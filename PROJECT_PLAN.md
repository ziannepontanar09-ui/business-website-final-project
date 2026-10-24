# PrintConnect — EVD project plan (agreed implementation)

## Business and founders
- **Business:** PrintConnect / On-Campus Print Station, an academic business proposal for Cebu Eastern College.
- **Co-founders:** Zianne B. Pontanar; Daniel D. Pacundo.
- **Goal:** Show services, explain the proposed kiosk workflow, and let students estimate printing costs instantly with Python events.
- **Scope:** Demonstration website. No printer integration, real order submission, online checkout, backend or database.

## Pages
| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Value proposition, call to action, rates and workflow overview |
| Services | `services.html` | B&W/color prices, photocopying, scanning and service limits |
| Print Quote | `order.html` | File selection, form, live price calculator and local quotation |
| How It Works | `process.html` | Proposed service process and FAQ |
| About | `about.html` | Founders, mission and sample survey evidence |

## Technology
- HTML5 and plain CSS: responsive layout (no framework or build setup).
- Minimal vanilla JavaScript: mobile navigation only.
- **PyScript 2026.7.3** with Python: `@when` handles `input`, `change`, `click`, `submit` events.
- Pure Python `pricing.py`: unit-testable quote calculation.
- Database: not needed. No data is persisted to or sent by a server.
- Run locally: `python -m http.server 8000` at the project root. Open `http://localhost:8000`.
- Internet needed for the PyScript runtime CDN on the order page.

## Pricing decision
Use **₱2/B&W printed page**, **₱5/colored printed page** in the site.
These appear in the BA financial feasibility model. Other sections in the same report reference ₱1 B&W; the prototype consistently uses the financial model's figures, not the incompatible promotional claim. The quotation formula is `rate × pages × copies`.

## Two-member work allocation (complete by making real Git commits)
- **Zianne B. Pontanar:** `index.html`, `services.html`, `process.html`, `about.html`, `assets/styles.css`, `assets/site.js`, branding SVGs. Explain semantic HTML, styling, responsive breakpoints and navigation. Recommended commits: `feat: build responsive PrintConnect pages`, `style: finalize services and founders sections`.
- **Daniel D. Pacundo:** `order.html`, `py/order.py`, `py/pricing.py`, `tests/test_pricing.py`. Explain Python calculations, PyScript event handlers, validation, dynamic DOM updates, and testing. Recommended commits: `feat: implement PyScript live print quote`, `test: cover pricing and input validation`.
- **Together:** review and test the demo, record the video, document the repository setup, rehearse the speaker script.

**Academic integrity:** This package assigns files to each member as a handoff; it does not create or fabricate GitHub commits. Each member must review, modify as needed, and push meaningful real changes through their own GitHub account. Take an additional screenshot of genuine commit histories before submission.

## Completion checklist
- [x] Five navigable pages
- [x] Both founders named on the About page and site footer
- [x] PyScript `input`, `change`, `submit`, and `click` event handlers
- [x] Live pricing, form validation, quote preview and reset
- [x] No database or backend
- [x] Pure-Python automated pricing tests
- [ ] Create **public** GitHub repo and add both collaborators
- [ ] Each collaborator pushes meaningful real commits
- [ ] Record 10+ minute video with each member on camera and speaking
- [ ] Add the video to the repository or follow teacher's instructions
- [ ] Submit **only** the public repository link
