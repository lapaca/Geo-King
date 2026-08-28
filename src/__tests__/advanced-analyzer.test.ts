import { describe, it, expect } from 'vitest'
import { AdvancedAnalyzer } from '@/services/advanced-analyzer'
import { SeoAnalyzer } from '@/services/seo-analyzer'
import { GeoAnalyzer } from '@/services/geo-analyzer'
import type { CrawlData } from '@/types'

function makeCrawlData(overrides: Partial<CrawlData> = {}): CrawlData {
  return {
    url: 'https://example.com',
    finalUrl: 'https://example.com',
    statusCode: 200,
    loadTimeMs: 500,
    htmlSize: 10000,
    isHttps: true,
    title: 'Test Page Title That Is Long Enough',
    metaDescription: 'This is a meta description that is long enough to pass the minimum length check of one hundred and twenty characters in total.',
    metaKeywords: null,
    canonical: 'https://example.com',
    viewport: 'width=device-width, initial-scale=1',
    ogTags: { title: 'Test', description: 'Desc', image: '/img.png', type: 'website', url: 'https://example.com' },
    structuredData: [],
    headings: [{ level: 1, text: 'Main Heading' }, { level: 2, text: 'Sub' }],
    images: [{ src: '/img.png', alt: 'test image' }],
    internalLinks: [{ href: '/a', text: 'a' }, { href: '/b', text: 'b' }],
    externalLinks: [{ href: 'https://ext.com', text: 'ext' }],
    robotsTxt: 'User-agent: *\nAllow: /',
    hasSitemap: true,
    semanticTags: { hasArticle: true, hasSection: true, hasNav: true, hasMain: true, hasAside: false, hasHeader: true, hasFooter: true },
    domCounts: { iframes: 0, forms: 1, cssFiles: 2, jsFiles: 3, inlineStyles: 0, inlineScripts: 1 },
    nofollowCount: 0,
    brokenLinks: [],
    hreflang: [],
    ampLink: null,
    manifest: null,
    serviceWorker: false,
    deprecatedTags: [],
    bodyText: 'Test content for analysis.',
    ...overrides,
  }
}

function analyze(data: CrawlData) {
  const seo = new SeoAnalyzer().analyze(data)
  const geoRule = new GeoAnalyzer().analyze(data)
  const advanced = new AdvancedAnalyzer().analyze(data, seo.issues, geoRule.issues, seo.score, geoRule.score)
  return { seo, geoRule, advanced }
}

describe('AdvancedAnalyzer', () => {
  it('computes real link metrics from crawl data', () => {
    const { advanced } = analyze(makeCrawlData({
      nofollowCount: 7,
      brokenLinks: [
        { href: 'https://example.com/dead', text: 'dead', statusCode: 404 },
        { href: 'https://example.com/gone', text: 'gone', statusCode: 410 },
      ],
    }))
    expect(advanced.links.nofollowCount).toBe(7)
    expect(advanced.links.brokenCount).toBe(2)
  })

  it('reports technical SEO signals from crawl data', () => {
    const { advanced } = analyze(makeCrawlData({
      hreflang: ['en', 'zh-CN'],
      ampLink: 'https://example.com/amp',
      manifest: '/manifest.webmanifest',
      serviceWorker: true,
      deprecatedTags: ['center', 'font', 'marquee'],
    }))
    expect(advanced.technical.hasHreflang).toBe(true)
    expect(advanced.technical.hasAmpVersion).toBe(true)
    expect(advanced.technical.hasPWA).toBe(true)
    expect(advanced.technical.hasServiceWorker).toBe(true)
    expect(advanced.technical.hasWebManifest).toBe(true)
    expect(advanced.technical.deprecatedTagCount).toBe(3)
  })

  it('treats manifest alone as a PWA signal but not a service worker', () => {
    const { advanced } = analyze(makeCrawlData({ manifest: '/manifest.webmanifest' }))
    expect(advanced.technical.hasWebManifest).toBe(true)
    expect(advanced.technical.hasPWA).toBe(true)
    expect(advanced.technical.hasServiceWorker).toBe(false)
  })

  it('defaults technical signals to false when absent', () => {
    const { advanced } = analyze(makeCrawlData())
    expect(advanced.technical.hasHreflang).toBe(false)
    expect(advanced.technical.hasAmpVersion).toBe(false)
    expect(advanced.technical.hasPWA).toBe(false)
    expect(advanced.technical.deprecatedTagCount).toBe(0)
  })

  it('produces a full radar dataset with 8 axes', () => {
    const { advanced } = analyze(makeCrawlData())
    expect(advanced.radarData).toHaveLength(8)
    for (const axis of advanced.radarData) {
      expect(axis.value).toBeGreaterThanOrEqual(0)
      expect(axis.value).toBeLessThanOrEqual(100)
    }
  })

  it('produces a valid competitiveness grade', () => {
    const { advanced } = analyze(makeCrawlData())
    expect(advanced.competitiveness.overallGrade).toMatch(/^(A\+|A|A-|B\+|B|B-|C\+|C|C-|D\+|D|D-|F)$/)
    expect(advanced.competitiveness.estimatedDifficulty).toBeGreaterThanOrEqual(0)
    expect(advanced.competitiveness.estimatedDifficulty).toBeLessThanOrEqual(100)
  })
})
