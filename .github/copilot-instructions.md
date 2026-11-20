# GitHub Copilot Instructions — Web Builder Multi-Agent System

Ce dépôt utilise un système multi-agents pour construire des sites web modernes, uniques, vivants, responsives et optimisés SEO à partir d'un cahier des charges ou d'un prompt.

## Source de vérité
Lire impérativement [`AGENTS.md`](../AGENTS.md) et les agents spécialisés dans `.github/agents/`.

## Pipeline recommandé
1. **`@orchestrator`** (`.github/agents/orchestrator.md`) pour piloter l'ensemble du projet de bout en bout.
2. **`@project-analyzer`** (`.github/agents/project-analyzer.md`) pour analyser le cahier des charges / prompt et produire `docs/project-spec.md`.
3. **`@content-agent`** & **`@copy-agent`** pour la véracité et le copywriting.
4. **`@html-agent`** pour l'intégration HTML5 sémantique et les icônes vectorielles.
5. **`@design-agent`** → **`@css-agent`** → **`@js-agent`** pour le design unique, la responsivité (`320px`–`1920px`) et le motion design calibré (`data-motion="none|moderate|high"`).
6. **`@seo-agent`** pour le SEO technique (`meta`, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`).
7. **`@qa-agent`** → **`@github-agent`** pour l'audit final et le commit.

## Règles non négociables
- **Prioriser les icônes aux emojis** (Bootstrap Icons, Font Awesome, Lucide) : zéro emoji dans l'interface utilisateur.
- **Motion design configurable** via `html[data-motion="none|moderate|high"]` + `@media (prefers-reduced-motion: reduce)`.
- **Ne jamais inventer** de faux chiffres, témoignages ou coordonnées (`[À compléter]` si manquant).
