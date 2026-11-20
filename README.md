# Web Builder Multi-Agent System

Kit d'instructions multi-agents prêt à l'emploi pour concevoir et livrer des **sites web modernes, uniques, vivants, responsives et optimisés SEO** (sites vitrines, portfolios, landing pages, sites corporate) à partir d'un **cahier des charges** ou d'un **simple prompt**.

---

## Entrypoints inclus (multi-outils)

Copiez ce dossier dans n'importe quel projet : il est reconnu automatiquement par les principaux assistants IA :

| Outil | Fichier(s) d'entrée |
| :--- | :--- |
| **Google Antigravity** | `AGENTS.md` + `.agent/rules/web-builder.md` |
| **OpenAI Codex** | `AGENTS.md` |
| **Claude Code** | `CLAUDE.md` |
| **GitHub Copilot** | `.github/copilot-instructions.md` + `.github/agents/*.md` |

---

## Architecture du Pipeline

1. **`orchestrator`** (`.github/agents/orchestrator.md`) — Pilote l'ensemble du projet de bout en bout.
2. **`project-analyzer`** (`.github/agents/project-analyzer.md`) — Analyse le cahier des charges ou le prompt et génère `docs/project-spec.md` (pages, sections, textes, stack CSS/Bootstrap/Tailwind, icônes, niveau de motion design).
3. **`content-agent`** & **`copy-agent`** — Vérifient la véracité des faits et optimisent les accroches et CTA.
4. **`html-agent`** — Intègre le HTML5 sémantique et les icônes vectorielles (**Font Awesome**, **Bootstrap Icons**, **Lucide** — **zéro emoji**).
5. **`design-agent`** → **`css-agent`** → **`js-agent`** — Définissent une direction artistique unique, implémentent le style + la responsivité (`320px`–`1920px+`) et le **Motion Design configurable**.
6. **`seo-agent`** — Implémente le SEO technique (`meta`, Open Graph, Twitter Cards, JSON-LD, `robots.txt`, `sitemap.xml`).
7. **`qa-agent`** → **`github-agent`** — Audit qualité complet et livraison Git.

---

## Réglage du Motion Design (`data-motion`)

Le niveau d'animation est piloté par l'attribut `data-motion` sur `<html>` :

- `data-motion="none"` : aucune animation d'entrée ou de scroll (transitions minimales d'accessibilité uniquement).
- `data-motion="moderate"` *(recommandé par défaut)* : site vivant et fluide sans surcharge (micro-interactions, reveals doux au scroll, navbar dynamique).
- `data-motion="high"` : animations chorégraphiées (stagger sur grilles, compteurs animés, parallaxe légère, transitions riches à 60fps).

`@media (prefers-reduced-motion: reduce)` est toujours respecté quel que soit le niveau choisi.

---

## Comment l'utiliser sur Antigravity (ou un autre outil)

1. Ouvrez ce dossier (ou copiez son contenu dans votre nouveau projet).
2. Déposez votre cahier des charges (ex. `docs/cahier-des-charges.md`) ou rédigez directement votre prompt, par exemple :
   > *« Lis `AGENTS.md` et utilise le pipeline `orchestrator` / `project-analyzer`. Crée un site vitrine pour [Nom / Activité] à partir de [cahier des charges ou description]. Stack : Tailwind CSS (ou Bootstrap 5 / CSS3), icônes Bootstrap Icons, motion design moderate. »*
3. Les agents génèrent `docs/project-spec.md`, `docs/design-spec.md`, puis construisent le site complet dans `site/`.
