# PrintConnect | Event-Driven Programming Final Project

**Founders:** Zianne B. Pontanar and Daniel D. Pacundo  
**School:** Cebu Eastern College, Inc.  
**Course:** Event-Driven Programming  
**Business concept:** On-campus student printing station.

## Start the website

You don't need Node, a database, or a backend API.

1. Download or clone the repository.
2. Open a terminal inside the folder containing `index.html`.
3. Start a static local server:

   ```bash
   python -m http.server 8000
   ```

4. Visit **http://localhost:8000**.
5. Open **Get a Quote** and wait for **PyScript ready**. A connection is needed for the PyScript CDN on first load.

You can also host the files on **GitHub Pages** after pushing them to a public repository. Source code does not require credentials or a database.

## Tech stack

HTML5, CSS3, minimal vanilla JS for responsive menu, Python 3 in the browser through PyScript **2026.7.3**. Uses browser events to recalculate estimates, handle selected files, validate form submission, and reset fields. Python pricing rules are isolated in `py/pricing.py`.

**Demonstration only:** The document picker displays a local filename. It never uploads the file. The form creates a quote in your browser, not a real order. No payment collection or server storage exists.

## Pricing
- B&W: **₱2 per printed page**
- Color: **₱5 per printed page**
- Total = `rate per page × number of pages × copies`.

The uploaded feasibility study contains an inconsistent ₱1 price in other paragraphs, so the website explicitly follows the study's ₱2 / ₱5 financial model.

## Project files

```text
index.html             Home
services.html          Services & prices
order.html             Python-powered order quote
process.html           Workflow & FAQ
about.html             Founders & survey findings
assets/styles.css      Responsive visual design
assets/site.js         Mobile navigation
assets/logo.svg        Logo
assets/printer_hero.svg Homepage illustration
py/order.py            PyScript event handlers
py/pricing.py          Pure Python calculation/validation
build_pages.py         Generates the five site pages
PROJECT_PLAN.md        Page plan and work division
tests/test_pricing.py  Automated test cases
PRESENTATION_SCRIPT.md Narration for the recorded video
presentation_assets/  Real source-code & website screenshots
```

## Tests

```bash
python -m unittest discover -s tests -v
```

Manual test on the Get a Quote page: Change 5 B&W pages × 1 copy (**₱10**) to 5 color pages × 2 copies (**₱50**). Try `0` pages to see validation. Enter a name and press **Generate quote** to see the local summary. Press **Clear form** and confirm defaults return.

## Required GitHub submission (important)

The course PDF requires a **public GitHub repo**, real commits from **every member**, and a **recorded video at least 10 minutes**. Add both collaborators, commit individual changes using each student's own account, record each member speaking and explaining the code, and upload the video or use the instructor's video method. Submit **only the public repo link** to the instructor. This ZIP is not a GitHub repo and does not substitute for your own commit history.

For proposed file ownership and evidence screenshots see `PROJECT_PLAN.md` and the PowerPoint deck. Replace screenshots with actual GitHub contribution screenshots before final submission.

## Sources
- Uploaded document: *Improving Campus Printing: A Feasibility and Sustainability Study* (PrintConnect feasibility study).
- Uploaded PDF: *Event-Driven Programming Final Project Instructions*.
- PyScript official docs: https://docs.pyscript.net/2026.7.3/
