# Otterly Clean! — A charity:water Awareness Game

A casual browser-based game where you play as a tank keeper responsible for keeping Otto the sea otter healthy and happy by maintaining the cleanliness of his water enclosure.

---

## Screens

### Start Screen
- charity:water logo (links to charitywater.org)
- "Otterly Clean!" title with "Keep Otto's Water Clean" subtitle
- Animated Otto hero image (gentle floating bounce)
- Difficulty selector: **Easy / Normal / Hard**
- Full-width **Start Shift** button

### Gameplay Screen
- **Top bar** — countdown timer (left), weather indicator (center), live score (right)
- **Left panel** — Otto's sprite, speech bubble, trash collected count, and how-to-play instructions
- **Play area** — upper air zone (rain droplets fall here) and lower pool zone separated by an animated wave
- **Bottom bar** — "Water Cleanliness" label with live percentage and a row of 10 jerry can icons

### Score Screen
- "Shift Complete!" heading with a randomly selected end-of-shift message
- Otto's status reflecting his mood at the end of the shift
- Score summary: water cleanliness tier, trash removed, points earned, water quality bonus, trash bonus, session total, lifetime points
- **Start Another Shift** button

---

## Game Logic

### Timer
- 60-second countdown

### Cleanliness System
- Pool starts at **80% cleanliness**
- **Self-healing:** pool passively recovers each second
- **Trash drain:** each trash piece in the pool drains cleanliness per second (stacks)
- **Net per second:** `selfHeal − (trashCount × trashDrain)`
- **Bad rain droplets** that reach the pool reduce cleanliness on impact
- **Clean rain droplets** that reach the pool add +1% cleanliness

### Otto's Health Tiers
| Cleanliness | Pool Color | Otto Sprite | Mood |
|---|---|---|---|
| 80–100% | Blue gradient | `otter_v1.png` | Happy |
| 50–79% | Light green gradient | `otter_v2.png` | Tired |
| 20–49% | Dark green gradient | `otter_v3.png` | Sick — warning banner flashes |
| Below 20% | Brown gradient | `otter_v4.png` | Critical |

### Rain System
- One rain event per shift, triggered randomly between 5–25 seconds in, lasting 30 seconds
- Click bad droplets to intercept them for points; let clean ones land for a cleanliness boost

### Trash System
- 3 trash pieces spawn in the pool at the start of every shift
- New trash spawns randomly throughout the shift (interval varies by difficulty)
- Click trash to remove it for points
- A corner indicator appears in the air zone when new trash spawns mid-game

### Scoring
Points are earned live during the shift and added to end-of-shift bonuses:

| Action | Easy | Normal | Hard |
|---|---|---|---|
| Click trash | +10 pts | +15 pts | +20 pts |
| Click bad droplet | +5 pts | +10 pts | +15 pts |
| Water quality bonus (end) | 100–500 pts | 100–500 pts | 100–500 pts |
| Trash bonus (end) | +50–500 pts | +50–500 pts | +50–500 pts |

**Win/lose sounds** and **confetti** trigger based on final cleanliness (≥ 50% = win).

### Difficulty Modes
| Setting | Easy | Normal | Hard |
|---|---|---|---|
| Self-heal | +1%/sec | +1%/sec | +1%/sec |
| Trash drain | −1%/sec each | −2%/sec each | −5%/sec each |
| Trash spawn interval | 8–15s | 6–10s | 4–6s |
| Bad droplet damage | −0.5% | −1% | −3% |
| Bad droplet rate | 60% | 60% | 45% |
| Droplet spawn rate | 700ms | 550ms | 380ms |

---

## Sound Effects
All sounds are loaded from the `sfx/` folder.

Otto also makes random chirp sounds every 10–25 seconds during gameplay (generated via Web Audio API).

---

## Visual Design

### Brand Palette
| Token | Hex |
|---|---|
| Yellow | `#FFC907` |
| Navy | `#003366` |
| Black | `#1A1A1A` |
| Steel Blue | `#77A8BB` |
| Cream | `#FFF7E1` |
| Rust | `#BF6C46` |
| Gray | `#CBCCD1` |

- **Fonts:** Avenir, Proxima Nova, Arial (fallback)
- **Body background:** `#1A1A1A` with a warm yellow glow behind each card
- **Game card:** max-width 760px, `border-radius: 28px`

### Responsive Layout
- **≥ 541px** — Otto panel on the left, play area on the right
- **≤ 540px** — play area full width on top, horizontal strip at the bottom with Otto + trash count on the left and how-to-play instructions on the right

---

## File Structure

```
charity-water-proj/
├── index.html        — All three screens (start, game, score)
├── style.css         — Full styling including responsive layout
├── script.js         — Game logic, audio, confetti, difficulty system
├── img/
│   ├── otter_v1.png – otter_v4.png   Otto sprites (happy → critical)
│   ├── otter_ic.png                  Otto icon (start/score screens)
│   ├── droplet_normal.png            Clean rain droplet
│   ├── droplet-bad.png               Dirty rain droplet
│   ├── bag.png                       Trash — plastic bag
│   ├── bottle.png                    Trash — water bottle
│   ├── can.png                       Trash — crushed can
│   ├── veg1.png – veg3.png           Sea vegetation
│   ├── water-can.png                 Jerry can (cleanliness bar)
│   └── cw_logo_horizontal.png        charity:water horizontal logo
└── sfx/
    ├── game-music-bgm.mp3
    ├── game-start.mp3
    ├── rain.mp3
    ├── trash.wav
    ├── win-sound.mp3
    ├── game-over.mp3
    └── click-button.mp3
```

---

## Try The Game!

https://quynhtruong1303.github.io/charity-water-game
