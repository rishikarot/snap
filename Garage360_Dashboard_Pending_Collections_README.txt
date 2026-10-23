Garage360 Dashboard — Pending vs Collected Edition
===================================================
Deployment:
- Upload index.html to the root of the GitHub Pages repository or serve on any static web host.
- The standalone file needs no build step or JavaScript library.
- Select Owner or Accounts to see the Billing & Collections widget.
- Select a date preset / custom period to change the invoice-date cohort.
- Click either bar color to inspect supporting invoice records.

Accounting / reporting rules:
- All top summary invoicing figures filter on the invoice issue date.
- Billing & Collections displays PENDING and COLLECTED amounts for exactly those invoices.
- PENDING = invoice net outstanding after applied payments.
- COLLECTED = payments applied to those selected invoices (including later payment dates).
- PENDING + COLLECTED = INVOICED amount (including VAT in demo).
- The graph groups both series by invoice issue date, not by payment receipt date.
- 'Needs attention' shows live outstanding records, independent of date filter.
- In production, treat allocations, credit notes, cancellations, refunds and write-offs consistently
  when calculating an invoice's net due and collected amount.

Security / demo limitations:
- Generated sample data, not live records.
- Demo actions and per-role widget choices are saved in the current browser.
- Role selection is only a preview; a live backend must enforce permissions.
