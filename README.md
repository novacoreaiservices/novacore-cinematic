# Novacore — Cinematic Website Preview

A cinematic landing-page preview for **Novacore AI**, built from the control-room
key art (`assets/img/control-room.jpg`). This repo is the daily-build playground:
small features land here every day.

**Live preview:** https://novacoreaiservices.github.io/novacore-cinematic/
**Repo:** https://github.com/novacoreaiservices/novacore-cinematic

## What's in v0.1

- Full-viewport cinematic hero: slow Ken Burns drift on the key art, film grain,
  vignette, letterbox bars that roll away on load
- Glowing NOVACORE wordmark with pulse, mouse parallax on the hero
- Fleet section (workers #462 / #463), animated stat counters, scroll reveals
- Zero dependencies beyond Google Fonts — plain HTML/CSS/JS

## Preview locally

```bash
cd novacore-cinematic
python3 -m http.server 8080
# open http://localhost:8080
```

## Structure

```
index.html              page markup
assets/css/style.css    all styling (cinematic theme tokens in :root)
assets/js/main.js       letterbox, reveals, counters, parallax
assets/img/             key art
ROADMAP.md              the daily feature backlog
```

## Daily build workflow

1. Pick the next item in `ROADMAP.md`
2. Build it on a branch (`feature/<name>`)
3. Open a PR, merge to `main` — GitHub Pages redeploys automatically

Brand tokens (keep the mark constant): cyan `#35f0ff`, magenta `#ff3df0`,
background `#04070d`. The NOVACORE wordmark never changes hue — see `:root`
in `style.css`.
