# Project rules
- Render route metadata through the shared Seo component and HelmetProvider, and serialize it during Node-based prerendering so static crawlers receive the same tags as visitors.
- Keep concise route titles in a central metadata map so title length and suffix rules can be tested consistently across all public pages.
- Strip all route-owned social tags from the static template before injecting rendered head tags to avoid duplicate metadata in exported HTML.