# Developer Portfolio

A pixel RPG-themed web developer portfolio built with pure HTML, CSS, and JavaScript. No frameworks, no build step, just craft.
check it at this link https://abdelmoudjib-journey.duckdns.org/ 
## Concept

The portfolio is designed as a top-down RPG world. A knight character traverses a hand-drawn canvas map as the user scrolls, stopping at quest nodes — each representing a real project. Clicking a node opens a character-sheet-style project panel.

## Features

- **RPG quest map** — Canvas 2D-rendered world with mountains, trees, castle, and lakes
- **Scroll-tracked knight** — Character follows a Bézier path using `getTotalLength()` / `getPointAtLength()`
- **6 quest nodes** — Each with a pixel-art SVG icon (20×20 viewBox, `image-rendering: pixelated`)
- **Character sheet panel** — Slides in with project details, stack, and links
- **HP / XP bars** — Animated stat bars tied to real metrics
- **Star field background** — Canvas 2D animated starfield
- **Pixel typography** — Press Start 2P + VT323 (Google Fonts)
- **GSAP animations** — Scroll triggers, fade-ins, and panel transitions

## Tech Stack

| Layer | Used |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, clip-path) |
| Logic | Vanilla JS (ES6+) |
| Animation | GSAP 3 + ScrollTrigger |
| Graphics | Canvas 2D API, inline SVG |
| Fonts | Press Start 2P, VT323 |

## Project Map (Quests)

| # | Quest | Type |
|---|---|---|
| 0 | Fire Safety Web App | Web app |
| 1 | Grill & Co | Restaurant landing page |
| 2 | 2M Confort Car Rental | Car rental landing page |
| 3 | Chicken Price Tracker | Data visualization |
| 4 | King of Tha | Game / interactive |
| 5 | Auto École | Driving school site |

> Portfolio 1 (Grill & Co) and Portfolio 2 (2M Confort) are client projects referenced within the map but excluded from this repository.

## Structure

```
webdev/
├── porfolio 3/          # Main RPG portfolio (this repo)
│   ├── index.html
│   ├── main.js
│   ├── style.css
│   └── avatar.svg
```

## Author

**C. Abdelmoudjib** — Full Stack Craftsman & DevOps  
[LinkedIn](https://www.linkedin.com/in/abdelmoudjib-chihoub-7597262a4/) · [WhatsApp](https://wa.me/33759189725) · abdelmoudjib.chihoub@gmail.com
