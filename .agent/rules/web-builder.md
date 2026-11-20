---
description: Règle workspace Antigravity pour le système multi-agents Web Builder (site vitrine, portfolio, landing page).
---

# Web Builder Multi-Agent — Antigravity Entrypoint

Ce workspace contient un système complet de création de sites web modernes piloté par `AGENTS.md` et `.github/agents/`.

## Comportement attendu sur Antigravity
Lorsqu'un utilisateur fournit un **cahier des charges** ou un **prompt** pour créer ou refondre un site web :

1. Agir selon le workflow de `.github/agents/orchestrator.md` (sauf si l'utilisateur demande explicitement un seul agent précis).
2. Exécuter d'abord `.github/agents/project-analyzer.md` pour générer `docs/project-spec.md` à partir de `docs/project-spec-template.md`.
3. Respecter strictement l'ordre :
   `project-analyzer` → `content-agent` / `copy-agent` → `html-agent` → `design-agent` → `css-agent` → `js-agent` → `seo-agent` → `qa-agent`.
4. Appliquer les règles impératives :
   - **Icônes vectorielles uniquement** (Font Awesome, Bootstrap Icons, Lucide) — jamais d'emojis dans l'UI.
   - **Motion Design réglable** via `data-motion="none|moderate|high"` sur `<html>` (`moderate` par défaut) + `@media (prefers-reduced-motion: reduce)`.
   - **Responsivité CSS mobile-first** (`320px` à `1920px+`, zéro overflow horizontal).
   - **SEO technique complet** sur toutes les pages.
   - **Zéro invention factuelle** (`[À compléter]` si une donnée manque).
