
SEO & GEO — engine research List updating (72 entries)
Compiled 2026-08-28. All URLs accessed 2026-08-28.



AI search engines are evolving every month, and the rules must keep pace. We commit to releasing a rule-engine update every month, aligning with the latest retrieval preferences of mainstream AI models (GPT-5, Claude 5, DeepSeek-V3, Doubao, etc.).

August update (already released this month):

Added preliminary support for multimodal search: now checks whether a page contains image descriptions that can be understood by visual models (not just alt text, but also surrounding context around images).

Adjusted Schema weight tiers: based on the latest papers, QAPage and HowTo have increased in weight, while display-oriented fields of Product have been downgraded.

Optimized paragraph chunking length thresholds: changed from a fixed 1,000-character limit to dynamic segmentation based on semantic boundaries, better matching the actual chunking logic used in RAG retrieval.

Expanded AI crawler User-Agent detection to include checks for ClaudeBot/2.0 and PerplexityBot/2.0.

We will release version notes every subsequent month. You can treat this like subscribing to security patches—keeping your rule base always aligned with the latest industry practices.




GEO Rules  ( basic Items – Made Understandable for Engineers)
Check Item	Why It Matters (In Plain English)
JSON-LD Schema type & weight	AI “confirms” your identity from structured data. Article / Organization / FAQPage are hard requirements for being indexed; Product / Service determine ranking. Flashy decorative fields (e.g., empty review values) are ignored by models—don’t include them.
Schema field consistency	GEO demands extremely high data accuracy. One wrong date or a misspelled author name will make AI doubt your reliability and directly lower your weight.
Brand entity consistency	Your brand name must be identical across the page, Schema, and external references. Otherwise, AI cannot associate your content with the correct knowledge‑graph node.
AI crawler permissions	If robots.txt blocks GPTBot, ClaudeBot, or Google‑Extended, large models simply cannot see you. Many people overlook this.
Paragraph chunking adaptability	AI uses RAG to split pages into small chunks for retrieval. If a single <p> exceeds 1,000 characters, key arguments get fragmented, causing vector‑matching failure. We recommend 150–250 characters per paragraph with clear structure.
Heading hierarchy tree structure	AI cannot attach H1/H2 context to each chunk during retrieval. Therefore, you must use a clear H2→H3→H4 tree structure, so every small chunk carries its own “origin” information.
E‑E‑A‑T signals	Experience, Expertise, Authoritativeness, Trustworthiness. Pages must have clear author bylines, publication dates, and traceable references for AI to dare to cite you.
Citation quality & sources	If your content cites authoritative data (e.g., government reports, academic papers), AI will exponentially boost your weight when tracing sources.
Content freshness	Experimental data shows that content refreshed within 13 weeks sees a 67% increase in AI citation rates. Even “evergreen” knowledge should have its dates and details updated regularly.


1. Tech Stack (Practical, No Fluff)
<table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd;"> <thead> <tr style="background-color: #f2f2f2; border-bottom: 2px solid #aaa;"> <th style="border: 1px solid #ddd; padding: 8px;">Technology</th> <th style="border: 1px solid #ddd; padding: 8px;">Purpose</th> <th style="border: 1px solid #ddd; padding: 8px;">Remarks</th> </tr> </thead> <tbody> <tr><td style="border: 1px solid #ddd; padding: 8px;">Next.js 14 (App Router)</td><td style="border: 1px solid #ddd; padding: 8px;">Full‑stack, API + frontend in one repo</td><td style="border: 1px solid #ddd; padding: 8px;">Unified project structure</td></tr> <tr><td style="border: 1px solid #ddd; padding: 8px;">TypeScript</td><td style="border: 1px solid #ddd; padding: 8px;">End‑to‑end type safety</td><td style="border: 1px solid #ddd; padding: 8px;">Shared types across frontend/backend</td></tr> <tr><td style="border: 1px solid #ddd; padding: 8px;">Tailwind + shadcn/ui</td><td style="border: 1px solid #ddd; padding: 8px;">Rapid UI development</td><td style="border: 1px solid #ddd; padding: 8px;">Component‑based atomic CSS</td></tr> <tr><td style="border: 1px solid #ddd; padding: 8px;">SQLite + Prisma</td><td style="border: 1px solid #ddd; padding: 8px;">Zero‑ops database for MVP</td><td style="border: 1px solid #ddd; padding: 8px;">Seamless migration to PostgreSQL later</td></tr> <tr><td style="border: 1px solid #ddd; padding: 8px;">NextAuth.js</td><td style="border: 1px solid #ddd; padding: 8px;">Unified authentication</td><td style="border: 1px solid #ddd; padding: 8px;">No manual JWT – built‑in OAuth</td></tr> <tr><td style="border: 1px solid #ddd; padding: 8px;">Claude API</td><td style="border: 1px solid #ddd; padding: 8px;">Single‑call diagnosis + suggestions</td><td style="border: 1px solid #ddd; padding: 8px;">Cost‑effective</td></tr> <tr><td style="border: 1px solid #ddd; padding: 8px;">cheerio + fetch</td><td style="border: 1px solid #ddd; padding: 8px;">Lightweight scraping & parsing</td><td style="border: 1px solid #ddd; padding: 8px;">Timeout retry + fingerprint emulation for large sites (Taobao, etc.)</td></tr> <tr><td style="border: 1px solid #ddd; padding: 8px;">Vercel</td><td style="border: 1px solid #ddd; padding: 8px;">Deployment & hosting</td><td style="border: 1px solid #ddd; padding: 8px;">One‑click deploy, env vars for secrets</td></tr> </tbody> </table>

=====================================================================

OFFICIAL SEARCH ENGINE SOURCES
=====================================================================
[1] Google. "Google Search Central Documentation." https://developers.google.com/search/docs
[2] Google. "Google Search Central Blog." https://developers.google.com/search/blog
[3] Google. "Google Search Essentials." https://developers.google.com/search/docs/essentials
[4] Google. "AI features and your website." https://developers.google.com/search/docs/appearance/ai-features
[5] Google. "Google Search guidance on using generative AI content on your website." https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
[6] Google Search Central. "Top ways to ensure your content performs well in Google's AI experiences on Search." (2025-05-21). https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search
[7] Google. "Latest Google Search Documentation Updates." https://developers.google.com/search/updates
[8] Microsoft. "Bing Webmaster Guidelines." https://www.bing.com/webmasters/help/guidelines-30fba23a
[9] Microsoft. "Bing Webmaster Blog." https://blogs.bing.com/webmaster
[10] Microsoft Bing Webmaster Team. "Introducing AI Performance in Bing Webmaster Tools Public Preview." (2026-02). https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview
[11] Microsoft Bing Search Team. "New AI Visibility Insights in Bing Webmaster Tools: Intents, Topics, Citation Share, Compare." (2026-06). https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare
[12] Microsoft Bing Webmaster Team. "How to get your content cited by Copilot." (2026-02). https://blogs.bing.com/webmaster/february-2026/how-to-get-your-content-cited-by-copilot
[13] Madhavan, K., & Merchant, M. "The AI Performance dashboard: Your view into where your brand appears across the AI web." Microsoft Advertising Blog (2026-03). https://about.ads.microsoft.com/en/blog/post/march-2026/the-ai-performance-dashboard-your-view-into-where-your-brand-appears-across-the-ai-web

=====================================================================
2. STANDARDS & PROTOCOLS
[14] Schema.org Community. "Schema.org — Vocabulary for Structured Data." https://schema.org
[15] Howard, J. "The /llms.txt file, v2." https://llmstxt.org
[16] IndexNow. "IndexNow — Instantly notify search engines about content changes." https://www.indexnow.org

=====================================================================
3. INDUSTRY PRESS & NEWS
[17] Search Engine Land. https://searchengineland.com
[18] Search Engine Journal. https://www.searchenginejournal.com
[19] Schwartz, B. "Search Engine Roundtable." https://www.seroundtable.com
[20] Search Engine Watch. https://www.searchenginewatch.com
[21] Search Engine Land. "A 90-day SEO playbook for AI-driven search visibility." https://searchengineland.com/a-90-day-seo-playbook-for-ai-driven-search-visibility-466751
[22] Search Engine Land. "Generative engine optimization (GEO): How to win AI mentions." https://searchengineland.com/google-ai-overviews-study-clicks-444418

=====================================================================
4. TOOL VENDOR RESEARCH BLOGS
[23] Ahrefs. "Ahrefs Blog." https://ahrefs.com/blog
[24] Semrush. "Semrush Blog." https://www.semrush.com/blog
[25] Moz. "Moz Blog." https://moz.com/blog
[26] Dean, B. "Backlinko." https://backlinko.com
[27] Yoast. "Yoast SEO Blog." https://yoast.com/blog
[28] Mangools. "Mangools Blog." https://mangools.com/blog
[29] SE Ranking. "SE Ranking Blog." https://seranking.com/blog
[30] Allsopp, G. "Detailed.com." https://detailed.com

=====================================================================
5. PRACTITIONERS & INDEPENDENT EXPERTS
[31] Solis, A. "SEOFOMO — Weekly SEO & AI search newsletter." https://seofomo.co
[32] Solis, A. "LearningSEO.io — SEO Learning Roadmap." https://learningseo.io
[33] Solis, A. "Crawling Mondays." https://www.youtube.com/@aleydasolis
[34] Indig, K. "Growth Memo." https://www.growth-memo.com
[35] Haynes, M. "Marie Haynes Consulting Blog." https://www.mariehaynes.com/blog
[36] King, M., Muhammad, F., Sussman, G., & Monahan, F. "The AI Search Manual: The Official Documentation for Relevance Engineering in AI Search." iPullRank. https://www.ipullrank.com/ai-search-manual
[37] Slawski, B. "SEO by the Sea." (Archive) https://www.seobythesea.com
[38] Google Search Relations Team. "Search Off the Record" (Podcast). https://developers.google.com/search/podcast
[39] Shepard, C. "Zyppy SEO." https://zyppy.com
[40] Exploding Topics. "Exploding Topics Blog." https://explodingtopics.com/blog
[41] Clay, B. "Bruce Clay Blog." https://www.bruceclay.com/blog

=====================================================================
6. GEO / AI SEARCH VERTICAL RESOURCES
[42] Amplifying AI. "Awesome Generative Engine Optimization." https://github.com/amplifying-ai/awesome-generative-engine-optimization
[43] The GEO Community. https://thegeocommunity.com
[44] LLMrefs. "Generative Engine Optimization (GEO): The 2026 Guide." https://llmrefs.com
[45] Optigeno. "Guides & Playbooks — AEO, GEO, AI SEO, Entity Optimization." https://optigeno.com/guides
[46] Ferreira, A. "The GEO Lab." https://thegeolab.net
[47] Class Central. "25 Resources to Learn Generative Engine Optimization in 2026." https://www.classcentral.com/report/learn-generative-engine-optimization-geo/
[48] Trakkr. "The AI Search Tools Index." https://trakkr.ai/ai-search-tools
[49] Superlines. "AI Search Visibility Tools Compared: Features, Pricing, and Real Performance Data." (2026-02). https://www.superlines.io/articles/ai-search-visibility-tools-comparison/
[50] MaxAEO. "12 Best AI Search Visibility Tools (2026): Tested & Ranked, with Pricing." https://maxaeo.ai/blog/the-12-best-ai-search-visibility-tracking-tools-for-2026-ranked-by-use-case-with-pricing/
[51] Leapd. "The 25 Best Tools for AI Search Rank Tracking and Visibility." https://www.leapd.ai/blog/ai-visibility/the-25-best-tools-for-ai-search-rank-tracking-and-visibility
[52] Celik, O. F. "10 Best AI Search Visibility Tools in 2026 (Compared & Reviewed)." Geoptie. https://geoptie.com/blog/best-ai-search-visibility-tools

=====================================================================
7. AI VISIBILITY MONITORING TOOLS
[53] Profound. "AI Answer Engine Intelligence Platform." https://www.tryprofound.com
[54] Scrunch AI. "The Agent Experience Platform for AI Search Visibility." https://scrunchai.com
[55] Peec AI. "AI Search Analytics for Marketing Teams." https://peec.ai
[56] Otterly.AI. "AI Visibility Monitoring for SEO Teams." https://otterly.ai
[57] ZipTie. "AI Search Visibility Tracking." https://ziptie.dev
[58] Ahrefs. "Brand Radar — AI Search Visibility Tracking." https://ahrefs.com/brand-radar
[59] Semrush. "AI Visibility Toolkit." https://www.semrush.com/ai-toolkit
[60] SE Ranking. "SE Visible — AI Search Visibility Platform." https://visible.seranking.com
[61] Hall. "AI Brand Visibility Monitoring." https://hall.ai
[62] Am I On AI. "Free AI Search Visibility Checker." https://amionai.com

=====================================================================
8. ACADEMIC PAPERS & BENCHMARKS
[63] Aggarwal, P., Murahari, V., Rajpurohit, T., Kalyan, A., Narasimhan, K., & Deshpande, A. "GEO: Generative Engine Optimization." arXiv:2311.09735. https://arxiv.org/abs/2311.09735
[64] Aggarwal, P., et al. "GEO: Generative Engine Optimization." In KDD '24: Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining, pp. 5–16. DOI: 10.1145/3637528.3671900. https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization
[65] "Generative Engine Optimization: A Comparative Study Across Engines." arXiv:2509.08919. https://arxiv.org/abs/2509.08919
[66] Wu, Y., Zhong, S., Kim, Y., & Xiong, C. "AutoGEO: Automatic Generative Engine Optimization." arXiv:2510.11438 (ICLR 2026). https://arxiv.org/abs/2510.11438
[67] "SAGEO Arena: A Realistic Environment for Evaluating Search-Augmented Generative Engine Optimization." arXiv:2602.12187. https://arxiv.org/abs/2602.12187
[68] Zou, W., Geng, R., Wang, B., & Jia, J. "PoisonedRAG: Knowledge Corruption Attacks to Retrieval-Augmented Generation." arXiv:2402.07867 (USENIX Security 2025). https://arxiv.org/abs/2402.07867
[69] The GEO Community. "Generative Engine Optimization — Research Archive." https://thegeocommunity.com/blogs/generative-engine-optimization
[70] "Verifiability in Generative Search Engines." In Proceedings of EMNLP 2023. https://aclanthology.org/2023.emnlp-main.28/

=====================================================================
9. LEARNING PATHS & COMMUNITIES
[71] Reddit. "r/TechSEO." https://www.reddit.com/r/TechSEO
[72] DYNO Mapper. "43 Best Websites to Learn SEO Online in 2026." https://dynomapper.com/blog/21-sitemaps-and-seo/420-where-to-learn-seo-online
https://www.google.com/search/howsearchworks/
https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
https://www.schema.org/
https://openai.com/
https://help.openai.com/
https://www.perplexity.ai/
https://support.microsoft.com/bing
https://ai.google/
https://support.google.com/webmasters/
https://www.cloudflare.com/ai/
GEO research / academic citations
https://arxiv.org/abs/2311.09735 — foundational GEO paper.
https://arxiv.org/abs/2607.14035 — 2026 critical survey of GEO research covering 45 studies.
https://github.com/marketingtoolslist/awesome-geo
https://github.com/trakkr-aisearch/awesome-geo
https://arnelbukva.github.io/awesome-answer-engine-optimization/
