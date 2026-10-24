# PrintConnect — Recorded Presentation Speaker Script

**Presenters:** Zianne B. Pontanar and Daniel D. Pacundo  
**Planned minimum video duration:** 10 minutes (course requirement).  
**Timed spoken sections:** 13.7 minutes before pauses, screen demonstrations, and transitions.

> These are prepared speaking roles based on assigned code ownership. Each member should understand, review and really contribute to the files before claiming the work as their own on GitHub. Include each member on camera.

## Slide 01 — Zianne (45 seconds)

Good day, everyone. We are Zianne B. Pontanar and Daniel D. Pacundo, the co-founders of PrintConnect. For our Event-Driven Programming final project, we transformed the business idea from our Business Analytics feasibility study into a functional website. The site is made for students who want to estimate the cost of printing academic documents without leaving campus just to ask for a price. Today we will explain the problem, introduce the pages and business process, demonstrate the website, and explain the important code and PyScript events. We will also identify which parts were assigned to each member.

## Slide 02 — Zianne (45 seconds)

We started by studying the students’ printing habits. In our survey with 35 respondents, 33 students, or 94.3 percent, said they usually print at shops outside the campus. Thirty-four of the 35, or 97.1 percent, identified high prices as a frustration. All 35 respondents said they were likely or very likely to use an on-campus printing service. These results describe only our surveyed group, but they helped us identify a real problem to address. PrintConnect aims to reduce unnecessary trips, make expected charges transparent, and give students a simpler way to plan their printing.

## Slide 03 — Zianne (39 seconds)

Our proposed business is an on-campus printing station that focuses on affordable and accessible services. The main services include black-and-white printing, colored printing, photocopying, scanning, and possible basic formatting assistance. Our website supports the business by introducing these services and allowing a student to calculate a quote. We use two pesos per black-and-white page and five pesos per colored page because those are the rates in our final financial feasibility model. This is a school project prototype, so we do not claim that a real kiosk is currently operating or that the website takes payments.

## Slide 04 — Zianne (44 seconds)

We decided to keep the technology stack intentionally simple. HTML gives the pages their structure, and CSS handles the visual design and mobile layout. We used a very small amount of ordinary JavaScript only for the mobile navigation menu. The required business functionality comes from Python running through PyScript in the browser. We separated the pricing formula into a pure Python file so it can be tested independently. There is no database, backend server, sign-in, or payment gateway because the site only needs to demonstrate how a print estimate works. That lets us focus clearly on the event-driven requirements.

## Slide 05 — Zianne (43 seconds)

Here is the structure of our website. There are five pages. The Home page introduces PrintConnect, highlights prices, and invites users to estimate their print costs. The Services page explains black-and-white printing, colored printing, photocopying, and scanning. The Get a Quote page contains our main interactive calculator. How It Works explains the proposed business process and answers common questions. Finally, the About page lists the two co-founders and summarizes important survey findings. We kept the navigation consistent throughout the website so that a visitor can move between these pages easily.

## Slide 06 — Zianne (37 seconds)

This is the Home page. The first section introduces PrintConnect with our name, logo, and the main message: print smart and stay on campus. We display the per-page printing rates and give students a clear button to calculate their printing cost. Further down the page are service cards and a short explanation of the process. In the recorded demo, I will click the buttons and show that they lead to the correct pages. The purpose is to make the website understandable even to someone using it for the first time.

## Slide 07 — Zianne (37 seconds)

On the Services page, we show the two primary printing types and their rates. We also list photocopying, scanning, and formatting as proposed kiosk services. We do not invent separate prices for those because the study did not finalize them. On the About page, we introduce both founders, Zianne B. Pontanar and Daniel D. Pacundo. We also explain why we made the business and show supporting survey statistics. This page gives the website an identity and connects our programming project to the business concept used in our earlier subject.

## Slide 08 — Zianne (52 seconds)

This slide shows an actual excerpt of the source code for our About page. For my assigned portion, I worked on structuring the website and presenting business information clearly. Here, the HTML uses article elements for founder cards, headings for the founders’ names, and descriptive text for each role. There are two separate founder cards so both group members are equally represented. Organizing the page into semantic elements makes it easier to style and maintain. I also connected the pages through shared navigation links and maintained a consistent website header and footer. The screenshot comes from the actual project file, not a mock example.

## Slide 09 — Zianne (55 seconds)

My second main contribution is the CSS. This source screenshot shows selectors for grids, service cards, the navigation menu, and responsive layouts. On large screens, cards can appear in two or three columns. On smaller screens, media queries change them to a single column so the content does not overflow. I also styled the print calculator form, buttons, service cards, and founder cards. The mobile screenshot on the right illustrates how the layout looks on a narrow screen. For the phone navigation, a small JavaScript click listener opens and closes the menu, but our core printing logic is still written with PyScript, as the instructor requires.

## Slide 10 — Daniel (34 seconds)

Now I will explain the interaction and Python side of the project. This is the part where the website becomes more than a static business brochure. Event-driven programming means that the program responds to actions instead of simply running all calculations once. For example, when a student changes a number or selects a different printing type, the browser triggers an event. PyScript calls the corresponding Python function, the function recalculates the price, and then the website updates the displayed total immediately.

## Slide 11 — Daniel (55 seconds)

This is the main interactive page. For the demonstration, I will open Get a Quote and wait for the label that says PyScript ready. Then I will choose colored printing, enter five pages, and set two copies. The price per colored page is five pesos, so five multiplied by two multiplied by five is fifty pesos. The cost estimate should update immediately. I will also choose a local reference document so the selected filename appears on the screen. However, the document is never actually uploaded. When I enter a name and generate a quote, the page displays a local summary rather than sending a real print order.

## Slide 12 — Daniel (43 seconds)

This diagram summarizes how event-driven programming happens. First, the user performs an action, such as entering a new number or changing the printing type. Second, the browser sends the appropriate event, and the PyScript when decorator identifies which Python function should run. Third, our program reads the input, checks that it is valid, and calculates the price. Finally, Python changes the text of elements already on the webpage through the document object model. For example, choosing color printing changes the rate from two pesos to five pesos and updates the estimated total without needing to reload the page.

## Slide 13 — Daniel (55 seconds)

This is the pricing module that I am responsible for explaining. The program uses a dictionary named PRICES with two valid services: black-and-white at two pesos and color at five pesos per page. The calculate_total function receives a service, number of pages, and number of copies. It validates that the service is supported, that pages range from one to five hundred, and that copies range from one to ninety-nine. If any input is invalid, it raises a ValueError. Otherwise, the function multiplies the price per page, the number of pages, and the number of copies. We keep this file independent from the webpage so we can test the calculation on its own.

## Slide 14 — Daniel (56 seconds)

The next screenshot is a real excerpt of the PyScript event code. I used the when decorator to listen for input events on the pages and copies fields and for change events on the service dropdown. These events call the function that updates the quote. It reads the latest values, uses the pricing module, and writes the new numbers into the summary area using textContent. There is also a change handler for the document selector. It only reads and displays the filename of the chosen local file. It does not read the document contents or upload the file. This shows how the interface reacts immediately to user actions.

## Slide 15 — Daniel (54 seconds)

Here is the event handler for the form submission. First, event.preventDefault stops the browser from sending the form to another page. Then Python checks that the student entered a name and that the print details are valid. When the entries pass validation, it builds a text summary and displays it in the order preview panel. The panel is a demonstration quotation only; there is no database and no real order is submitted. If the values are invalid, the user sees an error message instead of an incorrect price. We also listen for a click on Clear Form, which resets the fields, hides the old preview, and restores the default total.

## Slide 16 — Daniel (45 seconds)

We checked the pure Python pricing calculations using automated unit tests. For example, eight black-and-white pages with two copies should cost thirty-two pesos, and three colored pages with four copies should cost sixty pesos. We also tested invalid zero and very large counts, unsupported services, and the currency formatter. All five test cases passed. We should also run the site in a normal browser and demonstrate that PyScript loads and handles real user events; those runtime interactions are not replaced by the Python unit tests. During our recording, we will show the interactive quotation page and confirm the changing prices manually.

## Slide 17 — Zianne + Daniel (50 seconds)

Zianne: For the individual contributions, my assigned responsibility is the visual frontend. This includes the page structure, styling, navigation, responsiveness, and founder profiles. The previous code screenshots came from my assigned files. Daniel: My assigned responsibility is the interactive quotation form, PyScript event listeners, calculation logic, validation, and Python test cases. The code screenshots show those parts as well. We also need to demonstrate our own real activity on GitHub. After reviewing the supplied project, we will each use our own GitHub accounts to contribute meaningful work and commits, add both people as collaborators, and include our recorded video. Our actual commit history must match our claims.

## Slide 18 — Both (31 seconds)

Zianne: To conclude, PrintConnect turns the results of our business feasibility study into a practical website concept for students. It introduces services clearly and makes the cost of printing easier to understand. Daniel: For Event-Driven Programming, the main achievement is the interactive PyScript calculator, where the site reacts to input, change, submit, and click events. We intentionally used a simple stack with no database because this meets the project scope without unnecessary complexity. Both: Thank you for watching our presentation. We are Zianne B. Pontanar and Daniel D. Pacundo, the founders of PrintConnect.

## Suggested recording steps

1. Record both members on camera at the start and at their individual sections.
2. Zianne presents the business rationale, five pages, live navigation, HTML and CSS.
3. Daniel presents the quote page, demonstrates changing five color pages and two copies to show ₱50, and explains each PyScript event.
4. Capture actual **real** GitHub contributor and commit history before final export; do not manufacture activity.
5. Show the test command: `python -m unittest discover -s tests -v`.
6. Put the recorded video in the repository or according to instructor directions; submit only the PUBLIC GitHub URL.
