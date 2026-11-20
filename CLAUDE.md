# CLAUDE.md — Web Builder Multi-Agent System

Ce fichier est le point d'entrée pour **Claude Code**.

Toutes les règles globales, la stack technique autorisée, le système de motion design configurable (`data-motion="none|moderate|high"`) et la structure du projet sont définis dans [`AGENTS.md`](./AGENTS.md).

## Démarrage rapide

À partir d'un cahier des charges ou d'un prompt utilisateur :

1. Suivre le pipeline défini dans [`.github/agents/orchestrator.md`](./.github/agents/orchestrator.md).
2. Commencer systématiquement par [`.github/agents/project-analyzer.md`](./.github/agents/project-analyzer.md) pour générer `docs/project-spec.md` (pages, sections, textes, stack CSS/Bootstrap/Tailwind, librairie d'icônes, `motion_level`).
3. Enchaîner dans l'ordre : `content-agent` / `copy-agent` → `html-agent` → `design-agent` → `css-agent` → `js-agent` → `seo-agent` → `qa-agent` → `github-agent`.

## Règles impératives

- **Icônes vectorielles uniquement** (Bootstrap Icons, Font Awesome ou Lucide) — zéro emoji dans l'UI.
- **Motion Design configurable** via `data-motion="none|moderate|high"` sur `<html>` (`moderate` par défaut) + `@media (prefers-reduced-motion: reduce)` obligatoire.
- **Responsivité mobile-first** de `320px` à `1920px+` sans overflow horizontal.
- **Zéro invention factuelle** : marquer `[À compléter]` si une donnée client manque.
