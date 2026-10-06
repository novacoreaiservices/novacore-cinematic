# Novacore — The Hall

Cinematic preview of the first Sogni World place. The still is the operations hall photograph. Click the mark, either monitor wall, or the aisle.

**Repo:** https://github.com/novacoreaiservices/novacore-cinematic
**Pages:** https://novacoreaiservices.github.io/novacore-cinematic/

## What is locked

- Place id `hall`, from `01-hall.jpg`. The id cannot change.
- Canonical still: `assets/img/hall.jpg` (copy of `worlds/novacore/stills/hall.jpg`). Do not crop, upscale, or replace it.
- Plan: `world/world.yaml`. Lint is clean of errors. Three click-word warnings remain; they do not block select.
- One place only. Every click is a moment that starts and ends on this still. A crossing needs a second photograph.

## Billing

Renders, when approved, pay in SOGNI tokens and prefer worker NFTs 462 and 463.

```
SOGNI_TOKEN_TYPE=sogni
SOGNI_BILLING_MODE=tokens
```

Preferred workers: `462,463`.

## Not spent yet

No API key is on this machine, so nothing has been quoted or rendered. Next command after the key and your OK on the plan:

```
node world select novacore
node world quote novacore
node world render novacore --canary
```

## Daily build

Pick the next open item in `ROADMAP.md`. Keep the still sacred. New places arrive as new photographs, named in story order.
