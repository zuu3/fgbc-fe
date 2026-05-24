# 순복음범천교회 — Claude Code Guide

<!-- omd:managed:start -->
## Design System

This project uses an OmD v0.1 design system. Read `DESIGN.md` before any UI work.

**Reference**: claude (earthy, warm, literary)
**Brand**: 순복음범천교회 · Founded 1971 · Busan, Korea
**Tagline**: "하나님을 기뻐하는 행복한 예배자"

### Token Quick-Reference

| Role | Token | Hex |
|------|-------|-----|
| Background | Parchment | `#FAF8F5` |
| Surface alt | Ash | `#EDEBE6` |
| Primary text | Charcoal | `#1C1712` |
| Secondary text | Umber | `#5C5349` |
| Accent | Copper | `#C4704A` |
| Accent hover | Ember | `#A85C38` |
| Border | Birch | `#E2D9CF` |
| Border subtle | Cream | `#EEE8E1` |

### Rules (non-negotiable)

- Never use pure `#000` or `#fff` — always use the warm tokens above
- Copper accent (`#C4704A`) appears in ≤10% of any surface
- No glassmorphism on content cards (`backdrop-filter` is header-only)
- No left-accent border cards (4px colored left border)
- No gradient backgrounds on sections
- `word-break: keep-all` on all Korean text
- Font: Pretendard Variable only — no Inter/Roboto substitution

### Voice

- 존댓말 throughout
- No corporate terms: "솔루션", "플랫폼", "온보딩"
- No urgency language: "지금 바로!", "놓치지 마세요!"
- No em dashes (—) in copy

<!-- omd:managed:end -->

## Stack

- Next.js 14 (App Router)
- Emotion (CSS-in-JS) — styled components in `style.ts` per container
- Framer Motion — section reveal animations
- Supabase — content backend
- Pretendard Variable — loaded via CDN in `globals.css`

## Structure

- `src/app/` — pages (App Router)
- `src/containers/` — page-level components with co-located `style.ts`
- `src/components/` — shared components (Header, Footer, KakaoMap)
- `src/styles/theme.ts` — typography scale + color tokens
- `src/lib/` — Supabase client, date utils, content helpers
