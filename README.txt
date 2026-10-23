GARAGE360 DASHBOARD – Functional HTML MVP

Open index.html in a browser or deploy it to GitHub Pages.
No backend, libraries or account are required for this sample.

Features:
- Garage owner, service advisor, accounts and other-role previews
- Compact date presets and custom ranges, reporting period visible inside chart
- Billing & collections chart (navy = Billed; sage = Collected)
- Invoice-pending queue aging from QC approval (days to today)
- Overdue receivables aging from invoice due date (days past due)
- Accounts pending-amount aging, with not-yet-overdue bucket
- Interactive 0–7, 8–15, 16–30, 31–60, 61+ day bucket filters
- Clickable record drill-downs, workflow demo actions and aging CSV export
- Personalizable widgets by preview role (browser-local sample settings)

REPORTING DEFINITIONS
- Dashboard activity and graph follow selected invoice/event date range.
- Invoice cohorts are billed and collected as of TODAY in UAE time.
- Needs attention and overdue balances ignore the selected date range; all aging is as of TODAY (GST).
- Real integration requires server-side role access and timestamps/allocated payments.
- Real aging should account for contractual due dates, credits, write-offs and payment reconciliation.
