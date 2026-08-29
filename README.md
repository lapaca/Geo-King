<div align="center">

# 🗺️ Auto GEO & SEO Platform

**A monthly-updated rule engine for AI search visibility.**

*Get your content cited by GPT-5, Claude 5, DeepSeek-V3, Doubao & more.*

[![License](https://img.shields.io/github/license/lapaca/Geo-King)](https://github.com/lapaca/Geo-King)
[![GitHub Repo stars](https://img.shields.io/github/stars/lapaca/Geo-King)](https://github.com/lapaca/Geo-King/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/lapaca/Geo-King)](https://github.com/lapaca/Geo-King/commits/main)
[![Sources](https://img.shields.io/badge/sources-72-orange)](#-reference-library)
[![Updates](https://img.shields.io/badge/updates-monthly-2ea44f)](#-monthly-updates)

</div>
Support free by


Nakamura – CEO of gdata-tech ，Developed generative content scoring frameworks used by major AI platforms for ranking.

Amira – Expert in brand‑as‑answer methodology; authored the SEO Signal Index for measuring AI visibility.

Liam – Specializes in multi‑modal GEO; integrates visual, textual, and structured data for generative search.

---

## 📖 Table of Contents

- [🚀 Why This Exists](#-why-this-exists)
- [📅 Monthly Updates](#-monthly-updates)
- [🛠️ Tech Stack](#️-tech-stack)
- [📐 GEO Rules](#-geo-rules)
- [📚 Reference Library](#-reference-library)
- [🔗 Additional Resources](#-additional-resources)
- [🧭 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🚀 Why This Exists

AI search engines are evolving every month — and the rules must keep pace.

We ship a **rule-engine update every month**, aligned with the latest retrieval
preferences of mainstream AI models (GPT-5, Claude 5, DeepSeek-V3, Doubao, etc.).

> 💡 Think of it as subscribing to security patches — but for your content's
> visibility in AI search.

---

## 📅 Monthly Updates

### August 2026 ✅ *(released)*

- 🖼️ **Multimodal search (preliminary)** — now checks whether a page contains image
  descriptions that visual models can understand (not just `alt` text, but the
  surrounding context around images).
- 🏷️ **Schema weight tiers rebalanced** — based on the latest papers, `QAPage` and
  `HowTo` gained weight, while display-oriented `Product` fields were downgraded.
- ✂️ **Smarter paragraph chunking** — moved from a fixed 1,000-character limit to
  dynamic segmentation on semantic boundaries, better matching real RAG retrieval.
- 🤖 **Expanded AI crawler detection** — added `ClaudeBot/2.0` and `PerplexityBot/2.0`
  to User-Agent checks.

---

## 🛠️ Tech Stack

*Practical, no fluff.*

| Technology | Purpose | Remarks |
|---|---|---|
| **Next.js 14** (App Router) | Full-stack — API + frontend in one repo | Unified project structure |
| **TypeScript** | End-to-end type safety | Shared types across frontend/backend |
| **Tailwind + shadcn/ui** | Rapid UI development | Component-based atomic CSS |
| **SQLite + Prisma** | Zero-ops database for MVP | Seamless migration to PostgreSQL later |
| **NextAuth.js** | Unified authentication | No manual JWT — built-in OAuth |
| **Claude API** | Single-call diagnosis + suggestions | Cost-effective |
| **cheerio + fetch** | Lightweight scraping & parsing | Timeout retry + fingerprint emulation (Taobao, etc.) |
| **Vercel** | Deployment & hosting | One-click deploy, env vars for secrets |

---

## 📐 GEO Rules

*The basics, made understandable for engineers.*

| # | Check Item | Why It Matters (In Plain English) |
|---|---|---|
| 1 | **JSON-LD Schema type & weight** | AI "confirms" your identity from structured data. `Article` / `Organization` / `FAQPage` are hard requirements for indexing; `Product` / `Service` determine ranking. Decorative fields (e.g. empty review values) are ignored — don't include them. |
| 2 | **Schema field consistency** | GEO demands extreme data accuracy. One wrong date or a misspelled author name makes AI doubt your reliability and directly lowers your weight. |
| 3 | **Brand entity consistency** | Your brand name must be identical across the page, Schema, and external references — otherwise AI can't map your content to the correct knowledge-graph node. |
| 4 | **AI crawler permissions** | If `robots.txt` blocks `GPTBot`, `ClaudeBot`, or `Google-Extended`, large models simply cannot see you. Many people overlook this. |
| 5 | **Paragraph chunking adaptability** | AI uses RAG to split pages into chunks. A single `<p>` over 1,000 characters fragments your key arguments and breaks vector matching. Keep paragraphs to **150–250 characters** with clear structure. |
| 6 | **Heading hierarchy tree** | AI can't attach H1/H2 context to each chunk at retrieval. Use a clear `H2 → H3 → H4` tree so every chunk carries its own "origin" information. |
| 7 | **E-E-A-T signals** | Experience, Expertise, Authoritativeness, Trustworthiness. Clear author bylines, publication dates, and traceable references make AI dare to cite you. |
| 8 | **Citation quality & sources** | Citing authoritative data (government reports, academic papers) exponentially boosts your weight when AI traces sources. |
| 9 | **Content freshness** | Content refreshed within **13 weeks** sees a **+67%** increase in AI citation rates. Even "evergreen" knowledge should be updated regularly. |

---

## 📚 Reference Library

**72 curated sources**, verified and accessed on **2026-08-28**.

| Category | Count |
|---|---|
| 🔍 Official Search Engine Sources | 13 |
| 📏 Standards & Protocols | 3 |
| 📰 Industry Press & News | 6 |
| 🛒 Tool Vendor Research Blogs | 8 |
| 👤 Practitioners & Independent Experts | 11 |
| 🧭 GEO / AI Search Vertical Resources | 11 |
| 📡 AI Visibility Monitoring Tools | 10 |
| 🎓 Academic Papers & Benchmarks | 8 |
| 🧩 Learning Paths & Communities | 2 |
| **Total** | **72** |

### 🔍 Official Search Engine Sources *(1–13)*

| # | Source | Title |
|---|---|---|
| 1 | Google | [Google Search Central Documentation](https://developers.google.com/search/docs) |
| 2 | Google | [Google Search Central Blog](https://developers.google.com/search/blog) |
| 3 | Google | [Google Search Essentials](https://developers.google.com/search/docs/essentials) |
| 4 | Google | [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) |
| 5 | Google | [Using generative AI content on your website](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) |
| 6 | Google Search Central | [Top ways to perform well in Google's AI experiences](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search) *(2025-05-21)* |
| 7 | Google | [Latest Google Search Documentation Updates](https://developers.google.com/search/updates) |
| 8 | Microsoft | [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/guidelines-30fba23a) |
| 9 | Microsoft | [Bing Webmaster Blog](https://blogs.bing.com/webmaster) |
| 10 | Microsoft Bing Webmaster Team | [Introducing AI Performance in Bing Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) *(2026-02)* |
| 11 | Microsoft Bing Search Team | [New AI Visibility Insights in Bing Webmaster Tools](https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare) *(2026-06)* |
| 12 | Microsoft Bing Webmaster Team | [How to get your content cited by Copilot](https://blogs.bing.com/webmaster/february-2026/how-to-get-your-content-cited-by-copilot) *(2026-02)* |
| 13 | Madhavan, K., & Merchant, M. | [The AI Performance dashboard](https://about.ads.microsoft.com/en/blog/post/march-2026/the-ai-performance-dashboard-your-view-into-where-your-brand-appears-across-the-ai-web) *(2026-03)* |

### 📏 Standards & Protocols *(14–16)*

| # | Source | Title |
|---|---|---|
| 14 | Schema.org Community | [Schema.org — Vocabulary for Structured Data](https://schema.org) |
| 15 | Howard, J. | [The /llms.txt file, v2](https://llmstxt.org) |
| 16 | IndexNow | [IndexNow — Instantly notify search engines about content changes](https://www.indexnow.org) |

### 📰 Industry Press & News *(17–22)*

| # | Source | Title |
|---|---|---|
| 17 | Search Engine Land | [searchengineland.com](https://searchengineland.com) |
| 18 | Search Engine Journal | [searchenginejournal.com](https://www.searchenginejournal.com) |
| 19 | Schwartz, B. | [Search Engine Roundtable](https://www.seroundtable.com) |
| 20 | Search Engine Watch | [searchenginewatch.com](https://www.searchenginewatch.com) |
| 21 | Search Engine Land | [A 90-day SEO playbook for AI-driven search visibility](https://searchengineland.com/a-90-day-seo-playbook-for-ai-driven-search-visibility-466751) |
| 22 | Search Engine Land | [Generative engine optimization (GEO): How to win AI mentions](https://searchengineland.com/google-ai-overviews-study-clicks-444418) |

### 🛒 Tool Vendor Research Blogs *(23–30)*

| # | Source | Title |
|---|---|---|
| 23 | Ahrefs | [Ahrefs Blog](https://ahrefs.com/blog) |
| 24 | Semrush | [Semrush Blog](https://www.semrush.com/blog) |
| 25 | Moz | [Moz Blog](https://moz.com/blog) |
| 26 | Dean, B. | [Backlinko](https://backlinko.com) |
| 27 | Yoast | [Yoast SEO Blog](https://yoast.com/blog) |
| 28 | Mangools | [Mangools Blog](https://mangools.com/blog) |
| 29 | SE Ranking | [SE Ranking Blog](https://seranking.com/blog) |
| 30 | Allsopp, G. | [Detailed.com](https://detailed.com) |

### 👤 Practitioners & Independent Experts *(31–41)*

| # | Source | Title |
|---|---|---|
| 31 | Solis, A. | [SEOFOMO — Weekly SEO & AI search newsletter](https://seofomo.co) |
| 32 | Solis, A. | [LearningSEO.io — SEO Learning Roadmap](https://learningseo.io) |
| 33 | Solis, A. | [Crawling Mondays](https://www.youtube.com/@aleydasolis) |
| 34 | Indig, K. | [Growth Memo](https://www.growth-memo.com) |
| 35 | Haynes, M. | [Marie Haynes Consulting Blog](https://www.mariehaynes.com/blog) |
| 36 | King, M., Muhammad, F., Sussman, G., & Monahan, F. | [The AI Search Manual](https://www.ipullrank.com/ai-search-manual) |
| 37 | Slawski, B. | [SEO by the Sea (Archive)](https://www.seobythesea.com) |
| 38 | Google Search Relations Team | [Search Off the Record (Podcast)](https://developers.google.com/search/podcast) |
| 39 | Shepard, C. | [Zyppy SEO](https://zyppy.com) |
| 40 | Exploding Topics | [Exploding Topics Blog](https://explodingtopics.com/blog) |
| 41 | Clay, B. | [Bruce Clay Blog](https://www.bruceclay.com/blog) |

### 🧭 GEO / AI Search Vertical Resources *(42–52)*

| # | Source | Title |
|---|---|---|
| 42 | Amplifying AI | [Awesome Generative Engine Optimization](https://github.com/amplifying-ai/awesome-generative-engine-optimization) |
| 43 | The GEO Community | [thegeocommunity.com](https://thegeocommunity.com) |
| 44 | LLMrefs | [Generative Engine Optimization (GEO): The 2026 Guide](https://llmrefs.com) |
| 45 | Optigeno | [Guides & Playbooks — AEO, GEO, AI SEO, Entity Optimization](https://optigeno.com/guides) |
| 46 | Ferreira, A. | [The GEO Lab](https://thegeolab.net) |
| 47 | Class Central | [25 Resources to Learn Generative Engine Optimization in 2026](https://www.classcentral.com/report/learn-generative-engine-optimization-geo/) |
| 48 | Trakkr | [The AI Search Tools Index](https://trakkr.ai/ai-search-tools) |
| 49 | Superlines | [AI Search Visibility Tools Compared](https://www.superlines.io/articles/ai-search-visibility-tools-comparison/) *(2026-02)* |
| 50 | MaxAEO | [12 Best AI Search Visibility Tools (2026)](https://maxaeo.ai/blog/the-12-best-ai-search-visibility-tracking-tools-for-2026-ranked-by-use-case-with-pricing/) |
| 51 | Leapd | [The 25 Best Tools for AI Search Rank Tracking](https://www.leapd.ai/blog/ai-visibility/the-25-best-tools-for-ai-search-rank-tracking-and-visibility) |
| 52 | Celik, O. F. | [10 Best AI Search Visibility Tools in 2026](https://geoptie.com/blog/best-ai-search-visibility-tools) |

### 📡 AI Visibility Monitoring Tools *(53–62)*

| # | Source | Title |
|---|---|---|
| 53 | Profound | [AI Answer Engine Intelligence Platform](https://www.tryprofound.com) |
| 54 | Scrunch AI | [The Agent Experience Platform for AI Search Visibility](https://scrunchai.com) |
| 55 | Peec AI | [AI Search Analytics for Marketing Teams](https://peec.ai) |
| 56 | Otterly.AI | [AI Visibility Monitoring for SEO Teams](https://otterly.ai) |
| 57 | ZipTie | [AI Search Visibility Tracking](https://ziptie.dev) |
| 58 | Ahrefs | [Brand Radar — AI Search Visibility Tracking](https://ahrefs.com/brand-radar) |
| 59 | Semrush | [AI Visibility Toolkit](https://www.semrush.com/ai-toolkit) |
| 60 | SE Ranking | [SE Visible — AI Search Visibility Platform](https://visible.seranking.com) |
| 61 | Hall | [AI Brand Visibility Monitoring](https://hall.ai) |
| 62 | Am I On AI | [Free AI Search Visibility Checker](https://amionai.com) |

### 🎓 Academic Papers & Benchmarks *(63–70)*

| # | Source | Title |
|---|---|---|
| 63 | Aggarwal, P., Murahari, V., Rajpurohit, T., Kalyan, A., Narasimhan, K., & Deshpande, A. | [GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735) — *arXiv:2311.09735* |
| 64 | Aggarwal, P., et al. | [GEO: Generative Engine Optimization](https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization) — *KDD '24, pp. 5–16* |
| 65 | — | [Generative Engine Optimization: A Comparative Study Across Engines](https://arxiv.org/abs/2509.08919) — *arXiv:2509.08919* |
| 66 | Wu, Y., Zhong, S., Kim, Y., & Xiong, C. | [AutoGEO: Automatic Generative Engine Optimization](https://arxiv.org/abs/2510.11438) — *arXiv:2510.11438 (ICLR 2026)* |
| 67 | — | [SAGEO Arena](https://arxiv.org/abs/2602.12187) — *arXiv:2602.12187* |
| 68 | Zou, W., Geng, R., Wang, B., & Jia, J. | [PoisonedRAG](https://arxiv.org/abs/2402.07867) — *arXiv:2402.07867 (USENIX Security 2025)* |
| 69 | The GEO Community | [Generative Engine Optimization — Research Archive](https://thegeocommunity.com/blogs/generative-engine-optimization) |
| 70 | — | [Verifiability in Generative Search Engines](https://aclanthology.org/2023.emnlp-main.28/) — *EMNLP 2023* |

### 🧩 Learning Paths & Communities *(71–72)*

| # | Source | Title |
|---|---|---|
| 71 | Reddit | [r/TechSEO](https://www.reddit.com/r/TechSEO) |
| 72 | DYNO Mapper | [43 Best Websites to Learn SEO Online in 2026](https://dynomapper.com/blog/21-sitemaps-and-seo/420-where-to-learn-seo-online) |

---

## 🔗 Additional Resources

### Platform Docs & Help Centers

- [How Google Search Works](https://www.google.com/search/howsearchworks/)
- [Intro to Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Schema.org](https://www.schema.org/)
- [OpenAI](https://openai.com/) · [OpenAI Help Center](https://help.openai.com/)
- [Perplexity](https://www.perplexity.ai/)
- [Microsoft Bing Support](https://support.microsoft.com/bing)
- [AI at Google](https://ai.google/)
- [Google Webmasters Support](https://support.google.com/webmasters/)
- [Cloudflare AI](https://www.cloudflare.com/ai/)

### GEO Research & Academic Citations

- [Foundational GEO paper](https://arxiv.org/abs/2311.09735)
- [2026 critical survey of GEO research (45 studies)](https://arxiv.org/abs/2607.14035)
- [Awesome GEO — marketingtoolslist](https://github.com/marketingtoolslist/awesome-geo)
- [Awesome GEO — trakkr-aisearch](https://github.com/trakkr-aisearch/awesome-geo)
- [Awesome Answer Engine Optimization](https://arnelbukva.github.io/awesome-answer-engine-optimization/)

---

## 🧭 Roadmap

| Timeframe | Focus |
|---|---|
| **Monthly** | Ship a rule-engine update aligned with the latest AI-model retrieval preferences |
| **Next** | Expand multimodal search support & entity-consistency checks |
| **Ongoing** | Keep the 72-source reference library current and verified |

---

## 🤝 Contributing

Contributions are welcome — especially updates to the reference library, new GEO
rules, or corrections to any source. Open an issue or submit a pull request.

---

## 📄 License

Released under the [MIT License](./LICENSE). © 2026 [lapaca](https://github.com/lapaca)
