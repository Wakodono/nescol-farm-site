# Sunshine Farm Park – Wireframe outline

This document describes the current site structure as a wireframe-style outline. Layout is consistent across all pages; content areas vary by page.

---

## Global template (every page)

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER (full width, dark green)                                 │
│  [ Logo: Sunshine Farm Park ]                                    │
└─────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│  HERO (full width, max-height ~320px)                             │
│  [ Image ]                                                       │
│  [ Photo credit (small text, below image) ]                      │
└─────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│  MAIN NAV (full width, white, border-bottom)                      │
│  [ Menu ] (mobile)  |  Home  Visit  Shop  Animals  Cafe  Play Park  Walks  │
└─────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│  MAIN (max-width 960px, centred, padding)                         │
│  [ Page-specific content – see below ]                            │
└─────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│  FOOTER (full width, dark green)                                 │
│  Address | Opening times | Contact | © | (Home: "Developed by")   │
└─────────────────────────────────────────────────────────────────┘
```

**Responsive:** At viewport &lt; 768px, nav items are hidden and a “Menu” toggle button is shown; JS toggles the nav list.

---

## Page-by-page content (inside `<main>`)

### Home (`index.html`)
- **H1** Welcome to Sunshine Farm Park
- **Body** Intro paragraph + link to Visit page

### Visit (`visit.html`)
- **H1** Visit us
- **Body** Short intro
- **H2** Opening times → paragraphs
- **H2** Location → address + “Find us on Google Maps” link
- **H2** Parking & access → paragraph

### Shop (`shop.html`)
- **H1** Shop
- **Body** Paragraphs (shop description)

### Animals (`animals.html`)
- **H1** Petting zoo
- **Body** Paragraphs (animals description, link to Visit)

### Cafe (`cafe.html`)
- **H1** Cafe
- **Body** Paragraphs (cafe description)

### Play Park (`play-park.html`)
- **H1** Play park
- **Body** Paragraphs (play park description)

### Walks (`walks.html`)
- **H1** Walks
- **Body** Paragraphs (walks description)

---

## Layout notes (from CSS)

| Area      | Width     | Notes |
|----------|-----------|--------|
| Header   | 100%      | Padding 1rem 1.5rem |
| Hero     | 100%      | Image full width, max-height 320px; credit below |
| Nav      | 100%      | Flex row (desktop), toggled list (mobile) |
| Main     | max 960px | Centred, padding 2rem 1.5rem |
| Footer   | 100%      | Inner content can be centred / constrained |

**Breakpoint:** 768px (mobile menu vs horizontal nav).

---

## Asset references (hero images)

| Page     | Image path              |
|----------|-------------------------|
| Home     | `assets/hero-home.jpg`  |
| Visit    | `assets/hero-visit.jpg` |
| Shop     | `assets/hero-shop.jpg`  |
| Animals  | `assets/hero-animals.jpg` |
| Cafe     | `assets/hero-cafe.jpg`  |
| Play Park| `assets/hero-play-park.jpg` |
| Walks    | `assets/hero-walks.jpg` |
