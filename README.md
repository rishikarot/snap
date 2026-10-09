# SNAP Field · Single-HTML Mobile MVP

## What is inside
- `index.html` — **complete app UI, CSS, JavaScript and demo dataset in a single file**. Open it directly for a basic preview or host it on GitHub Pages.
- `sw.js`, `manifest.webmanifest`, icons — optional installable/offline PWA shell when hosted on HTTPS.

## Preview on GitHub Pages
1. Create a GitHub repository (for example, `snap-field-demo`).
2. Upload **all five files** in this directory to the repository root: `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`.
3. Go to repository **Settings → Pages → Build and deployment → Deploy from a branch**, select `main` and `/ (root)`.
4. Open the published `https://YOURNAME.github.io/snap-field-demo/` URL on your phone.
5. Allow **Location** and **Camera** permissions when testing relevant features. Add to Home Screen on iPhone or install the app on Android if available.

### Local preview
- Open `index.html` directly in a desktop browser for UI and non-GPS demo workflows.
- Better: run `python3 -m http.server 8765` in the folder and open `http://localhost:8765`. `localhost` is a secure context for browser APIs on your own device.
- To test on a *different* phone, GitHub Pages HTTPS is recommended (ordinary HTTP local-network IP addresses are generally not secure contexts for camera/geolocation).

## Quick demonstration workflow
1. From **Sites**, choose **Metro Hub** (geofence disabled by default) → **Check in**.
2. Open **Attendance**, choose **Mark pending as full day**, change some workers to AM/PM/Absent, add a remark, **Submit attendance**.
3. Open **Tasks**, enter a task, **Add update**, set progress and attach an image; open **Timeline** and **Photos**.
4. For ghost camera: save one progress photo to a task; on the next progress update, tap **Camera + ghost**. The prior image overlays the live camera view with adjustable opacity.
5. Add **Site notes** or **General notes**. End the visit with the floating **Leave site** action.
6. To test a geofenced site **where you actually are**, open **Settings** → select Riverside Tower → **Use my current GPS as site center** → save. Then check in. To test rejection, move outside the radius or set the center elsewhere.
7. The sample software project **SNAP Software Studio** uses the same project, task, note and activity engine.

## Operational rules implemented
- Optional geofence per site, with configured center/radius and explicit GPS error messages; inaccurate readings are rejected for check-in.
- Visit clock starts at actual check-in, stops on checkout, and persists over refresh.
- Auto-checkout watches GPS only for geofenced active sites **while the browser remains running and gets location updates**. It requires two accurate outside readings over at least 20 seconds, with a safety buffer. No guaranteed background geofence or OS-level event monitoring.
- Bulk attendance, AM/PM/Full/Absent, remarks and Undo. Same-worker schedule overlap checks are local to this device; submissions are tracked by site and local date.
- Tasks, progress, issues, review vs completion, chronological activity and photo evidence. Site progress is the average percentage of its tasks; quantity counts in detail views are estimates.
- Camera/phone gallery photos are resized and stamped with site, time added/captured, user and latest available GPS; photo blobs use IndexedDB. The ghost overlay is only a camera alignment guide and is **not** burned into the photo.
- Site/general notes, local project and roster administration, export JSON backup with photo data, reset demo.

## Important limitations and production requirements
This is a fully interactive **single-device HTML/PWA MVP**, **not a live centrally synchronized multi-user product**. GitHub Pages serves static files. It does not host a database, authenticated API, or server-authoritative geofence settings. Settings, tasks, attendance, visits, notes, and photos are **stored on each browser**, and are **not shared with another supervisor's phone**. Clearing browser data may destroy records. Back up data from Settings before any reset or browser clean-up. In particular:
- Geofence config is edited locally in the demo; in production it must be stored on a backend and reverified server-side at check-in (never trust a client-provided "in fence" flag).
- Don't rely on browser-only automatic checkout in the background. For reliable background monitoring, use a native Android/iOS geofence integration; always support manual checkout and audit history.
- Camera GPS and timestamp stamps are app metadata, **not tamper-proof field evidence**. Production needs authenticated identity, signed/validated server timestamps, file integrity checks, access controls and audit logging.
- Central multi-user attendance requires online conflict handling, concurrency, versioning, RLS/permissions and syncing; this demo only checks overlaps in the browser's current dataset.
- An offline-cached HTML shell does not imply backend sync. There is **no remote sync** in this version.
- Task approvals are demonstrative (no role restriction). A production reviewer/approver must be separately authorized.
- The browser's storage quota and device settings determine persistence.

A next production build could use Supabase Auth/Postgres/Storage/Edge Functions or your own FastAPI backend for centralized projects, authoritative GPS validation and real photo storage. Keep this UI intact while replacing the local data adapter.
