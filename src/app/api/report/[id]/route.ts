import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'
import { prisma } from '@/lib/db'
import type { Optimization } from '@/types'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: '未登录' }, { status: 401 })
  }

  const { id } = await params
  const userId = (session.user as Record<string, string>).id

  const report = await prisma.report.findFirst({
    where: { id, userId },
  })

  if (!report) {
    return NextResponse.json({ error: '报告不存在' }, { status: 404 })
  }

  return NextResponse.json({
    id: report.id,
    url: report.url,
    status: report.status,
    seoScore: report.seoScore,
    geoScore: report.geoScore,
    seoIssues: report.seoIssues ? JSON.parse(report.seoIssues) : [],
    geoIssues: report.geoIssues ? JSON.parse(report.geoIssues) : [],
    optimizations: report.optimizations ? JSON.parse(report.optimizations) : [],
    advancedMetrics: report.advancedMetrics ? JSON.parse(report.advancedMetrics) : null,
    createdAt: report.createdAt.toISOString(),
  })
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: '未登录' }, { status: 401 })
  }

  const { id } = await params
  const userId = (session.user as Record<string, string>).id

  const report = await prisma.report.findFirst({
    where: { id, userId },
    select: { id: true },
  })

  if (!report) {
    return NextResponse.json({ error: '报告不存在' }, { status: 404 })
  }

  await prisma.report.delete({ where: { id: report.id } })

  return NextResponse.json({ success: true })
}

/**
 * Persist optimization decisions (accepted / selectedIndex / userEdited / rejected)
 * so the user's choices survive a page refresh and can be re-exported later.
 */
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: '未登录' }, { status: 401 })
  }

  const { id } = await params
  const userId = (session.user as Record<string, string>).id

  const report = await prisma.report.findFirst({
    where: { id, userId },
    select: { id: true, optimizations: true },
  })

  if (!report) {
    return NextResponse.json({ error: '报告不存在' }, { status: 404 })
  }

  let body: { optimizations?: Optimization[] }
  try { body = await req.json() } catch {
    return NextResponse.json({ error: '请求体格式错误' }, { status: 400 })
  }

  if (!Array.isArray(body.optimizations)) {
    return NextResponse.json({ error: 'optimizations 必须是数组' }, { status: 400 })
  }

  const existing: Optimization[] = report.optimizations ? JSON.parse(report.optimizations) : []
  const existingById = new Map(existing.map((o) => [o.id, o]))

  // Merge incoming updates onto existing records by id, preserving fields the
  // client didn't touch and ignoring ids that don't belong to this report.
  const merged = body.optimizations
    .filter((o) => existingById.has(o.id))
    .map((o) => ({ ...existingById.get(o.id)!, ...o }))

  await prisma.report.update({
    where: { id: report.id },
    data: { optimizations: JSON.stringify(merged) },
  })

  return NextResponse.json({ success: true, count: merged.length })
}
