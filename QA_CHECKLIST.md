# SNAP Field MVP — QA and acceptance checks

## Automated interaction checks completed
Executed in headless Chromium using inline HTML loading and browser API stubs for local storage, IndexedDB and geolocation. Browser navigation to localhost/file URLs is restricted in the automated execution environment. **These checks do not replace a physical iPhone/Android acceptance test.**

| Scenario | Result |
|---|---|
| Home and project/site navigation | Passed |
| Check in at a site with no geofence; timer starts | Passed |
| Crew page, bulk full-day mark | Passed |
| Set individual worker AM status and add a remark | Passed |
| Submit today's attendance | Passed |
| Open task and save percentage/comment | Passed |
| Add site note | Passed |
| Checkout and return to site selector | Passed |
| Geofenced check in with simulated on-site GPS | Passed |
| Geofenced check in with simulated out-of-fence GPS is rejected | Passed |
| Cross-site half-day conflict rejected | Passed |
| Different AM and PM across sites accepted | Passed |
| Attach a sample image, save task update and list photo | Passed, IndexedDB stubbed |
| Photo metadata (site/user/time/GPS) displays in details | Passed |
| Runtime JavaScript errors during tested flows | None observed |

## Must run on a physical phone before field pilot
- Actual GPS permissions/accuracy under HTTPS, correct circle radius at your test site.
- Foreground location watch and **automatic checkout** while moving beyond the configured radius (allow enough time for two location updates with a 20s gap). Browser suspension/background behaviour remains platform-dependent.
- Actual live camera, native photo picker, front/rear camera selection and ghost reference alignment.
- Add image watermark and confirm readability/rotation on iPhone Safari and Android Chrome.
- Refresh/offline/online operation and persistence in the chosen mobile browser.
- Long crew list (40–100 workers) and keyboard accessibility.
- Confirm completion approval and evidence rules fit your real policy.
- Server-controlled site configurations, users, and syncing are not supported by this GitHub Pages demo; central cloud backend is required before multi-supervisor deployment.
