---
omd: 0.1
brand: 순복음범천교회
bootstrapped_from: claude
bootstrapped_at: 2026-05-24
---

# Design System — 순복음범천교회

## 1. Visual Theme & Atmosphere

The feeling is **warm, dignified, and grounded** — like stepping into a well-kept sanctuary that has served a community for over five decades. Every surface carries quiet warmth rather than polished sheen. Colors feel like late-afternoon light filtering through wooden panes: earthy, unhurried, human.

This is not a startup. Not a platform. Not a product. It is a gathering place — and the design should feel like one. Generous whitespace, careful typography, and restrained color create the stillness that lets content speak. Sermon notes, worship schedules, and community updates are the protagonists. The interface steps back.

Avoid anything that reads as corporate, transactional, or aggressively modern. The site should feel equally at home to a longtime elder checking the weekly bulletin, a young person considering their first visit, and someone who found it searching "부산 교회" on Naver.

## 2. Color Palette & Roles

All colors are used intentionally. Do not introduce colors outside this palette.

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Background | Parchment | `#FAF8F5` | Page background, default section fill |
| Surface | White | `#FFFFFF` | Cards, modals, content areas |
| Surface Warm | Ash | `#EDEBE6` | Alternate section bg (identity, info sections) |
| Surface Off | Linen | `#F5F3EF` | Subtle fills, news section bg |
| Primary Text | Charcoal | `#1C1712` | Headings, primary body text |
| Secondary Text | Umber | `#5C5349` | Supporting text, labels |
| Tertiary Text | Stone | `#9A8F86` | Captions, meta, placeholders |
| Primary Accent | Copper | `#C4704A` | CTAs, active links, active states |
| Accent Hover | Ember | `#A85C38` | Hover state for Copper |
| Secondary Accent | Walnut | `#8B7355` | Secondary actions, decorative |
| Border | Birch | `#E2D9CF` | Card borders, dividers, list separators |
| Border Subtle | Cream | `#EEE8E1` | Hairline separators, header border |
| Overlay | Dusk | `rgba(28, 23, 18, 0.72)` | Video overlays, modals |

**Color strategy**: Restrained. The copper accent (`#C4704A`) appears in ≤10% of any surface. The majority of the UI lives in parchment, white, and charcoal. Color earns its place; it is never decorative.

**Never use**: pure `#000000` or `#FFFFFF`. Always tint toward the warm hue. Never introduce cool blues, purples, or neutral grays — every gray in this system has a warm brown undertone.

## 3. Typography Rules

**Font family**: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif`

Do not substitute Inter, Roboto, Noto Sans KR, or any other sans-serif. Pretendard is already loaded via CDN.

**Type scale**:

| Token | Size | Weight | Letter-spacing | Line-height | Usage |
|-------|------|--------|----------------|-------------|-------|
| `title1` | 3rem | 700 | -0.03em | 1.4 | Hero headlines |
| `title2` | 2.5rem | 700 | -0.03em | 1.4 | Section hero titles |
| `title3` | 2.25rem | 700 | -0.03em | 1.4 | Major section headers |
| `title4` | 2rem | 700 | -0.02em | 1.4 | Subsection headers |
| `title5` | 1.75rem | 700 | -0.02em | 1.4 | Component titles |
| `title6` | 1.5rem | 700 | -0.02em | 1.4 | Card titles |
| `title7` | 1.25rem | 700 | -0.02em | 1.5 | Small headers, nav |
| `body0` | 1.25rem | 400 | -0.01em | 1.6 | Large body |
| `body1` | 1rem | 400 | -0.01em | 1.6 | Primary body text |
| `body2` | 0.95rem | 400 | -0.01em | 1.5 | Secondary body, descriptions |
| `caption` | 0.85rem | 400 | 0 | 1.4 | Meta, timestamps, labels |

**Rules**:
- Body line length: cap at 68ch
- `word-break: keep-all` on all Korean text
- `-webkit-font-smoothing: antialiased` globally
- Adjacent heading levels must differ by ≥1.25× scale ratio
- Mobile: drop one title step (e.g., desktop `title4` → mobile `title5`)

## 4. Component Stylings

### Buttons

**Primary**: `background: #C4704A` · `color: #FFFFFF` · `border-radius: 6px` · `padding: 12px 24px` · `font-weight: 600` · `font-size: 0.95rem`
Hover: `background: #A85C38` — color shift only, no translateY lift

**Secondary / Outline**: `background: transparent` · `border: 1px solid #C4704A` · `color: #C4704A` · `border-radius: 6px`

**Ghost**: `background: transparent` · `color: #5C5349` · `border: 1px solid #E2D9CF`

**Pill** (`border-radius: 999px`): reserved for tags, badges, and the bulletin nav button only. Not for primary or secondary CTAs.

### Cards

`background: #FFFFFF` · `border: 1px solid #E2D9CF` · `border-radius: 10px` · `box-shadow: 0 2px 8px rgba(28, 23, 18, 0.06)`
Hover: `box-shadow: 0 6px 20px rgba(28, 23, 18, 0.10)` · `transform: translateY(-2px)`

No side-stripe borders (no left-accent 4px border). No nested cards.

### Navigation / Header

Glass on scroll: `background: rgba(255, 255, 255, 0.95)` · `backdrop-filter: blur(10px)` · `border-bottom: 1px solid #EEE8E1`
Transparent when at top of home page.
Mobile: sticky, always solid white.

### Lists / Info Rows

Separator: `border-bottom: 1px solid #E2D9CF`. No zebra striping.
Date/label column: `color: #1C1712` · `font-weight: 700`
Content column: `color: #5C5349`

### Form Inputs

`border: 1px solid #E2D9CF` · `border-radius: 6px` · `padding: 10px 14px` · `background: #FFFFFF`
Focus: `border-color: #C4704A` · `outline: none` · `box-shadow: 0 0 0 3px rgba(196, 112, 74, 0.15)`

## 5. Layout Principles

**Max content width**: 1200px, centered, `padding: 0 20px`
**Section padding**: 80–100px vertical on desktop · 48–64px on mobile
**Spacing scale**: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 100px

**Rules**:
- Vary section padding for rhythm. Identical padding on every section is monotony.
- No nested cards. If a card appears inside a card, rethink the structure.
- Most sections do not need an extra wrapper div — use the section element directly.
- Whitespace is content. Dense layouts feel corporate; generous layouts feel welcoming.
- Grids collapse to single column at 768px.

## 6. Depth & Elevation

Near-flat elevation system. Shadows are functional, not decorative.

| Level | Usage | Value |
|-------|-------|-------|
| 0 | Flat rows, list items, dividers | `none` |
| 1 | Cards, info blocks | `0 2px 8px rgba(28, 23, 18, 0.06)` |
| 2 | Hover state, active panels | `0 6px 20px rgba(28, 23, 18, 0.10)` |
| 3 | Modals, video overlays, dropdowns | `0 20px 50px rgba(28, 23, 18, 0.18)` |

`backdrop-filter: blur()` is reserved for the header only. No glassmorphism on content cards.

## 7. Do's and Don'ts

**DO**:
- Use parchment (`#FAF8F5`) as the default page background, not pure white
- Use warm charcoal (`#1C1712`) for headings, not pure black
- Let whitespace carry the weight — resist filling every gap
- Use copper (`#C4704A`) sparingly: one CTA per section, links, active states
- Apply `word-break: keep-all` on all Korean text blocks
- Show dates in natural Korean format: 오전 9:00, 2025년 5월 18일

**DON'T**:
- Use pure `#000`, pure `#fff`, or any cool-toned gray
- Add gradient backgrounds to sections (no purple-to-pink, no blue-to-teal)
- Use `backdrop-filter` on content cards — header only
- Use left-accent border cards (4px colored left border) — banned
- Add decorative emoji to UI copy (🙏✝️🎵) — reserved for user-generated content only
- Make bold color washes over entire sections
- Design it to look like a SaaS product or tech company

## 8. Responsive Behavior

**Breakpoints**:
- Mobile: < 768px
- Tablet: 768px – 1024px
- Desktop: > 1024px

**Rules**:
- Minimum touch target: 44×44px for all interactive elements
- Mobile header: sticky, solid white, logo left, hamburger right
- Typography: drop one scale step on mobile
- Grids: all multi-column grids collapse to single column at 768px
- Hero banner: `aspect-ratio: 1920/900` · `object-fit: cover` at all viewport sizes
- No horizontal scroll at any viewport width

## 9. Agent Prompt Guide

**Quick context**: Korean Protestant church (기독교대한하나님의성회), founded 1971, Busan. Tagline: "하나님을 기뻐하는 행복한 예배자". Earthy warm design — parchment backgrounds, copper accent, Pretendard font. Near-flat elevation. No corporate feel.

**Token cheatsheet**:
- Background: `#FAF8F5` (Parchment)
- Primary text: `#1C1712` (Charcoal)
- Accent: `#C4704A` (Copper)
- Border: `#E2D9CF` (Birch)
- Alt section bg: `#EDEBE6` (Ash)

**Example prompts**:
- "Add an events section" → parchment bg, info-row list, copper links, Birch dividers
- "Style a sermon card" → white card, Birch border, level-1 shadow, Charcoal title, Umber meta
- "Update worship schedule" → flex layout, title6 headers, body1 rows, Birch dividers
- "Add a welcome banner" → parchment or Ash bg, title1 Korean headline, no gradient, copper CTA

## 10. Voice & Tone

**Register**: Warm and approachable, not formal. Speaks like a trusted church staff member — respectful, clear, never cold. Never corporate.

**In Korean**:
- 존댓말 throughout (합쇼체). "확인하세요" not "확인해"
- Avoid jargon that excludes newcomers — 신앙 용어는 풀어서 설명
- CTAs: action verb + subject (예: "예배 시간 확인하기", "주보 보기", "처음 오셨나요?")
- Dates and times in natural Korean format

**Forbidden phrases**: "솔루션", "플랫폼", "온보딩", "지금 바로!", "놓치지 마세요!"
**Forbidden punctuation**: em dash (—) in any copy — use commas, colons, or separate sentences

## 11. Brand Narrative

순복음범천교회는 1971년 부산 부산진구에서 시작하여 반세기가 넘는 시간 동안 지역 사회와 함께 성장해온 교회입니다. 기독교대한하나님의성회 소속으로, 성령의 역사와 말씀 중심의 예배를 통해 하나님 나라를 이 땅에서 살아내는 것을 사명으로 삼습니다.

교회의 표어는 **"하나님을 기뻐하는 행복한 예배자"** — 예배가 의무가 아닌 기쁨이 되는 공동체를 지향합니다. 이 웹사이트는 그 공동체의 디지털 관문입니다. 교인에게는 신뢰할 수 있는 정보의 창구, 처음 방문하는 이에게는 따뜻한 첫인사입니다.

## 12. Principles

1. **콘텐츠가 주인공이다** — 설교, 주보, 예배 안내가 디자인을 이끈다. 인터페이스는 물러선다.
2. **따뜻함은 선택이 아닌 기준이다** — 모든 색, 여백, 서체는 차갑지 않아야 한다. 기업적인 냉정함은 이 공동체의 언어가 아니다.
3. **모든 세대를 위해 설계한다** — 청년과 중장년이 동등하게 사용할 수 있어야 한다. 트렌디함을 위해 가독성을 희생하지 않는다.
4. **신뢰는 일관성에서 온다** — 색, 여백, 폰트가 페이지마다 흔들리면 신뢰를 잃는다. 토큰을 지키는 것이 브랜딩이다.
5. **절제가 품위다** — 강조가 많으면 강조가 없는 것과 같다. 구리색 액센트는 한 섹션에 하나로 족하다.

## 13. Personas

**성실한 교인 — 이영수 집사 (58세)**
매주 주보를 확인하고 월간 일정을 메모한다. 스마트폰 사용은 익숙하지만 복잡한 UI는 불편하다. 그에게 이 사이트는 전화 대신 쓰는 정보 창구다. 글자가 크고 메뉴가 단순해야 한다.

**처음 방문하는 분 — 박지현 씨 (34세)**
이사 온 지 얼마 안 돼 근처 교회를 검색했다. 교회가 어떤 곳인지, 예배 시간이 언제인지, 분위기는 어떤지가 궁금하다. 첫 페이지에서 30초 안에 그 답을 얻어야 한다.

**청년 교인 — 최민준 (24세)**
청년부 소속. 목양편지와 나눔 예배 일정을 주로 본다. 모바일로만 접속한다. 빠르게 원하는 정보를 찾을 수 있는 UX를 기대한다.

## 14. States

**Loading / Skeleton**: Ash(`#EDEBE6`) 배경의 shimmer 스켈레톤
```
background: linear-gradient(110deg, #EDEBE6 8%, #F5F3EF 18%, #EDEBE6 33%);
background-size: 200% 100%;
animation: shimmer 1.2s ease-in-out infinite;
```
파란색 스피너 금지.

**Empty**: 텍스트만으로 처리. "등록된 내용이 없습니다." 일러스트, sad face, 이모지 없음.

**Error**: "불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." 재시도 링크 포함.

**Success toast**: `background: #1C1712` · `color: #FFFFFF` · `border-radius: 10px` — 초록색 토스트 금지.

## 15. Motion & Easing

**Philosophy**: 움직임은 의도를 가져야 한다. 콘텐츠가 자연스럽게 나타나도록 돕는 것이지, 주의를 끌기 위한 것이 아니다. 교회 웹사이트에서 휘황찬란한 애니메이션은 경건함을 해친다.

**Duration tokens**:

| Token | Value | Usage |
|-------|-------|-------|
| `motion-instant` | 100ms | Focus ring, 즉각적인 상태 변화 |
| `motion-fast` | 200ms | Hover 색상 전환, 버튼 상태 |
| `motion-standard` | 400ms | 메뉴 열림, 컴포넌트 등장 |
| `motion-slow` | 800ms | 섹션 reveal |
| `motion-deliberate` | 900ms | 히어로 타이틀, 주요 텍스트 등장 |

**Easing tokens**:

| Token | Value | Usage |
|-------|-------|-------|
| `ease-out-gentle` | `ease-out` | 섹션 reveal (기본) |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | 대부분의 전환 |
| `spring-slide` | `{ type: 'spring', bounce: 0, duration: 0.8 }` | 슬라이더 전환 |

**Section reveal pattern** (Framer Motion):
```
hidden: { opacity: 0, y: 12~16 }
visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
```
Y 이동량 12–16px. X축 이동 없음. Stagger gap ≤ 0.2s.

**Never**:
- Bounce 또는 elastic easing
- layout 속성 애니메이션 (width, height, top, left)
- X축 슬라이드 (콘텐츠 섹션에서)
- `whileHover` scale transform on content cards
- Stagger gap > 0.2s
