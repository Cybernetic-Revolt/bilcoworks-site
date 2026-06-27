# Billy & Julia's Calendar — flashy PWA front-end

A drop-in replacement for the front-end served by the calendar app
(origin `10.10.1.112:5300`, fronted by Cloudflare at `calendar.bilco.ca`).

It is **100% backwards-compatible with the existing backend** — it uses the
exact same JSON API:

| Method | Path               | Body fields                                                   |
|--------|--------------------|--------------------------------------------------------------|
| GET    | `/api/events`      | —                                                            |
| POST   | `/api/events`      | `title, description, start, end, allDay, color, createdBy`   |
| PUT    | `/api/events/:id`  | same as POST                                                 |
| DELETE | `/api/events/:id`  | —                                                            |

No database or API changes are required.

## What's new

- **Installable home-screen app (PWA)** — web manifest, offline service worker,
  and app icons. On Android Chrome an "Add to Home Screen" pill appears; on
  iOS use Share → *Add to Home Screen*. Launches full-screen, standalone.
- **Works offline** — the app shell is cached, and the last-loaded events are
  shown when the network is down (network-first for fresh data when online).
- **Flashy, modern UI** — animated aurora background, glassmorphism, smooth
  modal/sheet animations, gradient accents.
- **Mobile-first** — big tap targets, a floating ＋ button, and a bottom-sheet
  editor on phones. Opens in Agenda (list) view on small screens.
- **Per-person color dots** — every event shows a Billy/Julia badge, plus
  **filter chips** (Everyone / Billy / Julia).
- **Friendly feedback** — toast notifications instead of `alert()`, a loading
  spinner, and an offline banner.
- **Bug fixes** — the "Add Event" default date used UTC (`toISOString`) which
  could land on the wrong day in the evening; it now uses the **local** date.
  Drag/resize now reverts the event if the save fails.
- **Hardened CDN** — FullCalendar is loaded with Subresource Integrity (SRI)
  hashes pinned to `6.1.10`.

## Files

```
calendar/
├── index.html             # the app (self-contained HTML/CSS/JS)
├── manifest.webmanifest   # PWA manifest
├── sw.js                  # service worker (offline support)
└── icons/                 # app icons (192/512/maskable/apple-touch/favicon)
```

## Deploying to the app at 10.10.1.112:5300

The backend currently serves a single HTML page at `/`. To switch to this
front-end, serve these static files from the same origin as `/api/events`
(so the relative API calls and the service-worker scope resolve correctly).

**The important part:** `index.html`, `manifest.webmanifest`, `sw.js`, and
`icons/` must all be reachable at the site root:

```
https://calendar.bilco.ca/                      -> index.html
https://calendar.bilco.ca/manifest.webmanifest
https://calendar.bilco.ca/sw.js                 -> MUST be at root (controls SW scope)
https://calendar.bilco.ca/icons/icon-192.png    (etc.)
```

How exactly you wire that up depends on the backend at `:5300`:

- **Flask/FastAPI etc.** — replace the template/HTML it returns at `/` with
  `index.html`, and serve `manifest.webmanifest`, `sw.js`, and `/icons/*` as
  static routes (Flask: `send_from_directory`). `sw.js` should be served with
  `Content-Type: application/javascript` and ideally `Cache-Control: no-cache`
  so updates are picked up.
- **nginx in front** — you can also let nginx serve the static files directly
  and only `proxy_pass` `/api/` to `10.10.1.112:5300`:

  ```nginx
  location /api/ { proxy_pass http://10.10.1.112:5300; }
  location /     { root /var/www/calendar; try_files $uri $uri/ /index.html; }
  ```

After deploying, **rotate that Zoom passcode** that was exposed in a public
event, and consider adding auth + tightening CORS on `/api/events` (it is
currently world-readable/writable). See the project review notes.

## Updating later

Bump `CACHE_VERSION` in `sw.js` whenever you change the shell so installed
clients pull the new version.
