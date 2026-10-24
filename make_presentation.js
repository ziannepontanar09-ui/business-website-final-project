// PrintConnect EVD PowerPoint generator. Uses real source-derived screenshot images.
const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'PrintConnect Project Team';
pptx.subject = 'Event-Driven Programming — PrintConnect website and member contributions';
pptx.title = 'PrintConnect | Event-Driven Programming Final Project';
pptx.company = 'Cebu Eastern College';
pptx.lang = 'en-PH';
const W=13.333, H=7.5; const P=path.join(__dirname,'presentation_assets');
const C={dark:'12333C', dark2:'0B2630',green:'22BE9B',pale:'DBF5EA',ivory:'F7FAF7',ink:'153842',muted:'627B80',line:'D7E6E1',white:'FFFFFF',gold:'F1CC80',navy:'244A54'};
const S=pptx.ShapeType;
const slides=[];
function slide(bg=C.ivory){let s=pptx.addSlide();s.background={color:bg};return s;}
function text(s,t,x,y,w,h,o={}) { s.addText(t,{x,y,w,h,fontFace:'Aptos',fontSize:20,color:C.ink,margin:0,breakLine:false,fit:'shrink',valign:'mid',...o}); }
function rect(s,x,y,w,h,fill,rad=.18,line=fill){s.addShape(rad?S.roundRect:S.rect,{x,y,w,h,rectRadius:rad,line:{color:line,transparency:line===fill?100:0,width:.7},fill:{color:fill},radius:rad});}
function tag(s,t,x,y,fill=C.pale,color='13876E',w=2.0){rect(s,x,y,w,.35,fill,.13);text(s,t,x+.1,y+.025,w-.2,.26,{fontSize:10.5,bold:true,color,charSpacing:.5});}
function heading(s,kicker,title,desc=''){text(s,kicker.toUpperCase(),.69,.38,11.7,.28,{fontSize:10.5,bold:true,color:'1AA485',charSpacing:2.0});text(s,title,.69,.78,11.8,.74,{fontSize:32,bold:true,color:C.ink});if(desc)text(s,desc,.70,1.57,11.55,.52,{fontSize:15,color:C.muted});}
function foot(s,n,owner='PRINTCONNECT • EVENT-DRIVEN PROGRAMMING'){s.addShape(S.line,{x:.7,y:7.15,w:11.9,h:0,line:{color:C.line,width:1}});text(s,owner,.7,7.22,10,.16,{fontSize:9.3,bold:true,color:C.muted,charSpacing:.6});text(s,String(n).padStart(2,'0'),12.23,7.2,.45,.18,{fontSize:10.5,bold:true,color:C.muted,align:'right'});}
function image(s,file,x,y,w,h){s.addImage({path:path.join(P,file),x,y,w,h});}
function card(s,x,y,w,h,title,desc,number='',fill=C.white){rect(s,x,y,w,h,fill,.22,C.line);if(number)text(s,number,x+.24,y+.2,w-.45,.5,{fontSize:26,bold:true,color:C.green});text(s,title,x+.24,y+(number?.87:.25),w-.48,.5,{fontSize:19,bold:true});text(s,desc,x+.24,y+(number?1.43:.87),w-.48,h-(number?1.58:1.06),{fontSize:13.8,color:C.muted,valign:'top'});}
function imageFrame(s,file,x,y,w,h){rect(s,x-.035,y-.035,w+.07,h+.07,C.white,.14,'D3E1DD');image(s,file,x,y,w,h);}
function addNotes(s,who,secs,note){s.addNotes(`Presenter: ${who}. Suggested duration: ${secs} seconds.\n\n${note}`);slides.push({idx:slides.length+1,title:s._slideTitle||'',who,secs,note});}
function bullet(s,t,x,y,w,size=18){rect(s,x,y+.07,.11,.11,C.green,.06);text(s,t,x+.25,y,w-.25,.62,{fontSize:size,color:C.ink});}

// 01
{
let s=slide(C.dark2);
rect(s,8.1,0,5.233,H,'17434A',0);
image(s,'website_index.png',7.8,1.65,5.3,3.35);
text(s,'EVENT-DRIVEN PROGRAMMING • FINAL PROJECT',.77,.81,7.5,.35,{fontSize:13,color:'7BE6CA',bold:true,charSpacing:1.7});
text(s,'PRINT\nCONNECT',.74,1.62,6.65,2.25,{fontSize:62,bold:true,color:C.white,breakLine:false,lineSpacingMultiple:.9});
text(s,'An on-campus printing website\npowered by Python + PyScript',.77,4.19,6.46,1.05,{fontSize:23,color:'CEE5DF'});
rect(s,.78,6.12,6.42,.69,'1F4D54',.16);text(s,'Zianne B. Pontanar  +  Daniel D. Pacundo',1.02,6.28,5.95,.32,{fontSize:15.5,bold:true,color:C.white});
addNotes(s,'Zianne',45,'Good day, everyone. We are Zianne B. Pontanar and Daniel D. Pacundo, the co-founders of PrintConnect. For our Event-Driven Programming final project, we transformed the business idea from our Business Analytics feasibility study into a functional website. The site is made for students who want to estimate the cost of printing academic documents without leaving campus just to ask for a price. Today we will explain the problem, introduce the pages and business process, demonstrate the website, and explain the important code and PyScript events. We will also identify which parts were assigned to each member.');}
// 02
{
let s=slide(); heading(s,'Business problem','Why does PrintConnect matter?','Our survey of 35 active students identified a campus printing inconvenience.');
const v=[['94.3%','33 out of 35 students print off-campus'],['97.1%','34 out of 35 cite high price as a frustration'],['100%','All 35 rated on-campus use likely or very likely']];
v.forEach((a,i)=>{const x=.75+i*4.23;rect(s,x,2.53,3.82,2.6,C.white,.22,C.line);text(s,a[0],x+.25,2.9,3.3,.85,{fontSize:47,bold:true,color:'129B7F'});text(s,a[1],x+.27,4.0,3.2,.87,{fontSize:16,color:C.ink,valign:'top'});});
rect(s,.75,5.77,11.88,.7,'E7F4EE',.14);text(s,'SOURCE   PrintConnect Business Analytics study • 35 respondents • not the whole school population',1.02,5.97,11.2,.25,{fontSize:13,color:C.muted});foot(s,2);
addNotes(s,'Zianne',45,'We started by studying the students’ printing habits. In our survey with 35 respondents, 33 students, or 94.3 percent, said they usually print at shops outside the campus. Thirty-four of the 35, or 97.1 percent, identified high prices as a frustration. All 35 respondents said they were likely or very likely to use an on-campus printing service. These results describe only our surveyed group, but they helped us identify a real problem to address. PrintConnect aims to reduce unnecessary trips, make expected charges transparent, and give students a simpler way to plan their printing.');}
// 03
{
let s=slide();heading(s,'Business concept','An easier way to print on campus','PrintConnect proposes an accessible kiosk supported by a simple digital price-estimation website.');
card(s,.78,2.37,3.72,2.73,'Affordable','Proposed student-oriented prices: ₱2 for B&W and ₱5 for color per printed page.','01');
card(s,4.78,2.37,3.72,2.73,'Convenient','Students can view services and pricing without asking multiple print shops.','02');
card(s,8.78,2.37,3.72,2.73,'Transparent','The website calculates a quote before a student visits a physical print station.','03');
rect(s,.78,5.46,11.73,.82,C.dark,.13);text(s,'Scope: A proposed business and academic website prototype — not a live print kiosk or payment system.',1.06,5.68,11.13,.38,{fontSize:15.4,color:C.white,bold:true});foot(s,3);
addNotes(s,'Zianne',39,'Our proposed business is an on-campus printing station that focuses on affordable and accessible services. The main services include black-and-white printing, colored printing, photocopying, scanning, and possible basic formatting assistance. Our website supports the business by introducing these services and allowing a student to calculate a quote. We use two pesos per black-and-white page and five pesos per colored page because those are the rates in our final financial feasibility model. This is a school project prototype, so we do not claim that a real kiosk is currently operating or that the website takes payments.');}
// 04
{
let s=slide();heading(s,'Project objectives','A simple stack, based on what is needed','The instructor requires PyScript interaction and evidence of event-driven programming.');
const stack=[['HTML5','Five semantic pages and student forms'],['CSS3','Modern responsive site, no UI framework'],['PyScript','Browser-based Python event handlers'],['Python','Pure pricing calculations and tests'],['No database','Local on-screen quotations; no records or uploads']];
stack.forEach((r,i)=>{const y=2.27+i*.82;rect(s,.8,y,11.7,.67,i%2?C.white:'EAF4EE',.11);text(s,r[0],1.05,y+.15,2.13,.29,{fontSize:16,bold:true});text(s,r[1],3.12,y+.15,8.9,.3,{fontSize:15.5,color:C.muted});});foot(s,4);
addNotes(s,'Zianne',44,'We decided to keep the technology stack intentionally simple. HTML gives the pages their structure, and CSS handles the visual design and mobile layout. We used a very small amount of ordinary JavaScript only for the mobile navigation menu. The required business functionality comes from Python running through PyScript in the browser. We separated the pricing formula into a pure Python file so it can be tested independently. There is no database, backend server, sign-in, or payment gateway because the site only needs to demonstrate how a print estimate works. That lets us focus clearly on the event-driven requirements.');}
// 05
{
let s=slide();heading(s,'Website architecture','Five clear pages','Each page has a purpose, so students can navigate the business without confusion.');
const pages=[['01','Home','Welcome, rates and student benefits'],['02','Services','Printing choices and per-page prices'],['03','Get a Quote','Interactive PyScript estimator'],['04','How It Works','Proposed process and FAQ'],['05','About','Founders, mission and survey data']];
pages.forEach((r,i)=>{let y=2.22+i*.84;rect(s,.85,y,11.6,.7,C.white,.13,C.line);text(s,r[0],1.1,y+.12,.65,.4,{fontSize:23,bold:true,color:C.green});text(s,r[1],1.95,y+.17,3.16,.31,{fontSize:17.7,bold:true});text(s,r[2],5.28,y+.18,6.82,.28,{fontSize:15.3,color:C.muted});});foot(s,5);
addNotes(s,'Zianne',43,'Here is the structure of our website. There are five pages. The Home page introduces PrintConnect, highlights prices, and invites users to estimate their print costs. The Services page explains black-and-white printing, colored printing, photocopying, and scanning. The Get a Quote page contains our main interactive calculator. How It Works explains the proposed business process and answers common questions. Finally, the About page lists the two co-founders and summarizes important survey findings. We kept the navigation consistent throughout the website so that a visitor can move between these pages easily.');}
// 06
{
let s=slide();heading(s,'Website demonstration','Home page','First impression: brand, service value and a direct call to action.');imageFrame(s,'website_index.png',.75,2.14,9.0,4.41);
rect(s,10.0,2.28,2.59,3.92,'E7F5EF',.18);text(s,'What to show',10.24,2.58,2.1,.45,{fontSize:20,bold:true});bullet(s,'Brand and headline',10.25,3.22,2.02,14);bullet(s,'₱2 / ₱5 rates',10.25,4.05,2.02,14);bullet(s,'Quote button',10.25,4.88,2.02,14);foot(s,6);
addNotes(s,'Zianne',37,'This is the Home page. The first section introduces PrintConnect with our name, logo, and the main message: print smart and stay on campus. We display the per-page printing rates and give students a clear button to calculate their printing cost. Further down the page are service cards and a short explanation of the process. In the recorded demo, I will click the buttons and show that they lead to the correct pages. The purpose is to make the website understandable even to someone using it for the first time.');}
// 07
{
let s=slide();heading(s,'Website demonstration','Services and About pages','Students can view pricing and see who proposed the PrintConnect business.');
imageFrame(s,'website_services.png',.75,2.21,5.83,3.65);imageFrame(s,'website_about.png',6.76,2.21,5.83,3.65);
text(s,'SERVICES: rates and planned offers',.84,6.08,5.7,.35,{fontSize:16,bold:true,color:C.ink});text(s,'ABOUT: founders and survey evidence',6.84,6.08,5.7,.35,{fontSize:16,bold:true,color:C.ink});foot(s,7);
addNotes(s,'Zianne',37,'On the Services page, we show the two primary printing types and their rates. We also list photocopying, scanning, and formatting as proposed kiosk services. We do not invent separate prices for those because the study did not finalize them. On the About page, we introduce both founders, Zianne B. Pontanar and Daniel D. Pacundo. We also explain why we made the business and show supporting survey statistics. This page gives the website an identity and connects our programming project to the business concept used in our earlier subject.');}
// 08
{
let s=slide();heading(s,'Zianne’s code contribution','HTML structure and founder information','Actual HTML excerpt assigned to Zianne B. Pontanar.');imageFrame(s,'code_zianne_html.png',.72,2.04,9.65,5.01);
rect(s,10.62,2.11,2.03,4.83,'E8F4EF',.18);text(s,'Key points',10.86,2.38,1.55,.4,{fontSize:18,bold:true});bullet(s,'Semantic HTML',10.83,3.05,1.6,14);bullet(s,'Founder cards',10.83,4.05,1.6,14);bullet(s,'Readable content',10.83,5.11,1.6,14);foot(s,8);
addNotes(s,'Zianne',52,'This slide shows an actual excerpt of the source code for our About page. For my assigned portion, I worked on structuring the website and presenting business information clearly. Here, the HTML uses article elements for founder cards, headings for the founders’ names, and descriptive text for each role. There are two separate founder cards so both group members are equally represented. Organizing the page into semantic elements makes it easier to style and maintain. I also connected the pages through shared navigation links and maintained a consistent website header and footer. The screenshot comes from the actual project file, not a mock example.');}
// 09
{
let s=slide();heading(s,'Zianne’s code contribution','Responsive CSS and mobile layout','The design adapts to narrower screens while keeping the quote page usable.');imageFrame(s,'code_zianne_css.png',.73,2.08,8.72,4.75);imageFrame(s,'website_mobile.png',9.72,2.08,2.64,4.75);foot(s,9);
addNotes(s,'Zianne',55,'My second main contribution is the CSS. This source screenshot shows selectors for grids, service cards, the navigation menu, and responsive layouts. On large screens, cards can appear in two or three columns. On smaller screens, media queries change them to a single column so the content does not overflow. I also styled the print calculator form, buttons, service cards, and founder cards. The mobile screenshot on the right illustrates how the layout looks on a narrow screen. For the phone navigation, a small JavaScript click listener opens and closes the menu, but our core printing logic is still written with PyScript, as the instructor requires.');}
// 10
{
let s=slide(C.dark);text(s,'DANIEL D. PACUNDO • PYTHON & INTERACTIVITY',.83,.71,11.6,.36,{fontSize:14,bold:true,color:'75E7C4',charSpacing:1.5});
text(s,'From user action\nto instant feedback.',.82,1.57,11.62,1.73,{fontSize:47,bold:true,color:C.white});
const parts=[['INPUT','A student changes a field'],['PYTHON','PyScript runs a handler'],['UPDATE','The quote changes on screen']];
parts.forEach((r,i)=>{let x=.85+i*4.16;rect(s,x,4.12,3.75,1.45,'23535A',.18);text(s,r[0],x+.23,4.37,3.18,.29,{fontSize:13,bold:true,color:'85E9CB',charSpacing:1.4});text(s,r[1],x+.23,4.84,3.29,.5,{fontSize:17,bold:true,color:C.white});});
addNotes(s,'Daniel',34,'Now I will explain the interaction and Python side of the project. This is the part where the website becomes more than a static business brochure. Event-driven programming means that the program responds to actions instead of simply running all calculations once. For example, when a student changes a number or selects a different printing type, the browser triggers an event. PyScript calls the corresponding Python function, the function recalculates the price, and then the website updates the displayed total immediately.');}
// 11
{
let s=slide();heading(s,'Interactive website demonstration','The Get a Quote page','Enter a print type, number of pages and number of copies; the total is recalculated.');imageFrame(s,'website_order.png',.72,2.02,9.3,4.87);
rect(s,10.27,2.1,2.34,4.7,'E7F5EF',.17);text(s,'Live demo steps',10.49,2.37,1.9,.55,{fontSize:18,bold:true});
['Choose color','Type 5 pages','Set 2 copies','Check ₱50.00','Generate quote'].forEach((x,i)=>{text(s,`${i+1}. ${x}`,10.5,3.13+i*.64,1.8,.38,{fontSize:13.5,bold:i===3,color:C.ink});});foot(s,11);
addNotes(s,'Daniel',55,'This is the main interactive page. For the demonstration, I will open Get a Quote and wait for the label that says PyScript ready. Then I will choose colored printing, enter five pages, and set two copies. The price per colored page is five pesos, so five multiplied by two multiplied by five is fifty pesos. The cost estimate should update immediately. I will also choose a local reference document so the selected filename appears on the screen. However, the document is never actually uploaded. When I enter a name and generate a quote, the page displays a local summary rather than sending a real print order.');}
// 12
{
let s=slide();heading(s,'Event-driven programming','How the event flow works','PyScript uses decorators to connect HTML actions to Python functions.');
const nodes=[['1','Browser action','Input, change, click, or submit'],['2','Event listener','@when(...) triggers Python'],['3','Validation + math','Check values, calculate cost'],['4','DOM update','Change price, alert, preview']];
nodes.forEach((r,i)=>{let x=.72+i*3.2;rect(s,x,2.56,2.91,2.45,i%2===0?C.white:'E8F7F0',.18,C.line);text(s,r[0],x+.2,2.8,.51,.49,{fontSize:28,bold:true,color:C.green});text(s,r[1],x+.2,3.48,2.51,.48,{fontSize:17.5,bold:true});text(s,r[2],x+.2,4.14,2.48,.64,{fontSize:13.6,color:C.muted});if(i<3)text(s,'→',x+2.86,3.33,.42,.58,{fontSize:27,color:'15A886',bold:true,align:'center'});});
rect(s,.73,5.62,11.98,.6,C.dark,.15);text(s,'Example: CHANGE "bw → color"   →   Python calculate_total(...)   →   updated estimated total',1.03,5.79,11.3,.27,{fontSize:15.4,color:C.white,bold:true});foot(s,12);
addNotes(s,'Daniel',43,'This diagram summarizes how event-driven programming happens. First, the user performs an action, such as entering a new number or changing the printing type. Second, the browser sends the appropriate event, and the PyScript when decorator identifies which Python function should run. Third, our program reads the input, checks that it is valid, and calculates the price. Finally, Python changes the text of elements already on the webpage through the document object model. For example, choosing color printing changes the rate from two pesos to five pesos and updates the estimated total without needing to reload the page.');}
// 13
{
let s=slide();heading(s,'Daniel’s code contribution','Pure Python price calculator','The formula is separate from HTML and works without a database.');imageFrame(s,'code_daniel_pricing.png',.7,2.07,9.51,4.85);
rect(s,10.45,2.22,2.19,4.48,'E8F6F0',.18);text(s,'Formula',10.7,2.5,1.64,.4,{fontSize:19,bold:true});text(s,'RATE\n× PAGES\n× COPIES',10.7,3.16,1.69,1.65,{fontSize:22,bold:true,color:'0A9977'});text(s,'B&W: ₱2\nColor: ₱5',10.69,5.46,1.76,.72,{fontSize:16,bold:true});foot(s,13);
addNotes(s,'Daniel',55,'This is the pricing module that I am responsible for explaining. The program uses a dictionary named PRICES with two valid services: black-and-white at two pesos and color at five pesos per page. The calculate_total function receives a service, number of pages, and number of copies. It validates that the service is supported, that pages range from one to five hundred, and that copies range from one to ninety-nine. If any input is invalid, it raises a ValueError. Otherwise, the function multiplies the price per page, the number of pages, and the number of copies. We keep this file independent from the webpage so we can test the calculation on its own.');}
// 14
{
let s=slide();heading(s,'Daniel’s code contribution','Input and change event handlers','PyScript @when decorators respond as students interact with the form.');imageFrame(s,'code_daniel_events.png',.68,2.06,9.55,4.9);
rect(s,10.51,2.13,2.1,4.73,'E6F4EF',.18);tag(s,'EVENTS',10.76,2.46,C.pale,'11836D',1.43);
text(s,'input',10.74,3.1,1.65,.47,{fontSize:22,bold:true});text(s,'change',10.74,3.83,1.65,.47,{fontSize:22,bold:true});text(s,'update_quote()',10.74,4.8,1.67,.8,{fontSize:15.5,bold:true,color:'0D8E76'});foot(s,14);
addNotes(s,'Daniel',56,'The next screenshot is a real excerpt of the PyScript event code. I used the when decorator to listen for input events on the pages and copies fields and for change events on the service dropdown. These events call the function that updates the quote. It reads the latest values, uses the pricing module, and writes the new numbers into the summary area using textContent. There is also a change handler for the document selector. It only reads and displays the filename of the chosen local file. It does not read the document contents or upload the file. This shows how the interface reacts immediately to user actions.');}
// 15
{
let s=slide();heading(s,'Daniel’s code contribution','Form submission and validation','A submit event generates a browser-only quote and a click event resets the form.');imageFrame(s,'code_daniel_submit.png',.67,2.07,9.56,4.88);
rect(s,10.49,2.13,2.13,4.73,'E6F4EF',.18);text(s,'submit',10.73,2.69,1.67,.45,{fontSize:23,bold:true});text(s,'Validate name, service and counts.',10.72,3.42,1.75,1.03,{fontSize:14.3});text(s,'click',10.73,4.8,1.65,.44,{fontSize:23,bold:true});text(s,'Reset fields and the estimate.',10.72,5.48,1.71,.87,{fontSize:14.3});foot(s,15);
addNotes(s,'Daniel',54,'Here is the event handler for the form submission. First, event.preventDefault stops the browser from sending the form to another page. Then Python checks that the student entered a name and that the print details are valid. When the entries pass validation, it builds a text summary and displays it in the order preview panel. The panel is a demonstration quotation only; there is no database and no real order is submitted. If the values are invalid, the user sees an error message instead of an incorrect price. We also listen for a click on Clear Form, which resets the fields, hides the old preview, and restores the default total.');}
// 16
{
let s=slide();heading(s,'Verification and limitations','Testing the pricing rules','Pure Python tests verify correct totals and reject invalid inputs.');
const tests=[['8 B&W pages × 2 copies','₱32','PASS'],['3 color pages × 4 copies','₱60','PASS'],['0 or 501 pages','Rejected','PASS'],['Invalid service "scan"','Rejected','PASS'],['Currency display','₱1,234.00','PASS']];
tests.forEach((r,i)=>{let y=2.35+i*.7;rect(s,.8,y,11.72,.54,C.white,.1,C.line);text(s,r[0],1.05,y+.12,5.45,.29,{fontSize:15});text(s,r[1],6.74,y+.12,3.2,.3,{fontSize:15.3,bold:true});tag(s,r[2],10.89,y+.1,'DDF7EB','09896D',1.24);});
rect(s,.81,6.03,11.71,.67,'FFF2D8',.14);text(s,'Scope note: tests cover Python business logic; browser PyScript must also be checked live on your computer.',1.02,6.22,11.2,.29,{fontSize:13.5,color:'705B36',bold:true});foot(s,16);
addNotes(s,'Daniel',45,'We checked the pure Python pricing calculations using automated unit tests. For example, eight black-and-white pages with two copies should cost thirty-two pesos, and three colored pages with four copies should cost sixty pesos. We also tested invalid zero and very large counts, unsupported services, and the currency formatter. All five test cases passed. We should also run the site in a normal browser and demonstrate that PyScript loads and handles real user events; those runtime interactions are not replaced by the Python unit tests. During our recording, we will show the interactive quotation page and confirm the changing prices manually.');}
// 17
{
let s=slide();heading(s,'Individual contribution evidence','Two members, clear ownership','The submission requires real GitHub contributions from every member.');
card(s,.8,2.32,5.74,2.78,'Zianne B. Pontanar','Frontend pages, HTML structure, navigation, CSS, responsive design, founder profiles.','01');
card(s,6.8,2.32,5.74,2.78,'Daniel D. Pacundo','PyScript event handlers, quotation form, Python pricing module, unit tests.','02');
rect(s,.79,5.57,11.76,.99,'FFF1D7',.16);text(s,'Before submission: create a PUBLIC repository, add both collaborators, make real commits from each account, and record a 10+ minute video. Do not fake commits.',1.04,5.8,11.2,.5,{fontSize:14.7,color:'6E5733',bold:true});foot(s,17);
addNotes(s,'Zianne + Daniel',50,'Zianne: For the individual contributions, my assigned responsibility is the visual frontend. This includes the page structure, styling, navigation, responsiveness, and founder profiles. The previous code screenshots came from my assigned files. Daniel: My assigned responsibility is the interactive quotation form, PyScript event listeners, calculation logic, validation, and Python test cases. The code screenshots show those parts as well. We also need to demonstrate our own real activity on GitHub. After reviewing the supplied project, we will each use our own GitHub accounts to contribute meaningful work and commits, add both people as collaborators, and include our recorded video. Our actual commit history must match our claims.');}
// 18
{
let s=slide(C.dark2);rect(s,8.45,-.2,5.3,7.9,'17474B',0);image(s,'website_index.png',8.54,2.2,4.5,2.8);text(s,'THANK YOU',.84,.94,7.1,.36,{fontSize:14,color:'7CE8C8',bold:true,charSpacing:2});text(s,'Print smart.\nStay on campus.',.81,1.7,8.5,2.17,{fontSize:52,bold:true,color:C.white});text(s,'PrintConnect • Cebu Eastern College',.84,4.64,7.55,.48,{fontSize:20,color:'CAE4DC'});text(s,'Zianne B. Pontanar  |  Daniel D. Pacundo',.85,6.2,8.3,.38,{fontSize:16,bold:true,color:'7DE4C7'});
addNotes(s,'Both',31,'Zianne: To conclude, PrintConnect turns the results of our business feasibility study into a practical website concept for students. It introduces services clearly and makes the cost of printing easier to understand. Daniel: For Event-Driven Programming, the main achievement is the interactive PyScript calculator, where the site reacts to input, change, submit, and click events. We intentionally used a simple stack with no database because this meets the project scope without unnecessary complexity. Both: Thank you for watching our presentation. We are Zianne B. Pontanar and Daniel D. Pacundo, the founders of PrintConnect.');}

// Export a standalone, fully assigned and timed narration script.
const lines=[
'# PrintConnect — Recorded Presentation Speaker Script',
'',
'**Presenters:** Zianne B. Pontanar and Daniel D. Pacundo  ',
'**Planned minimum video duration:** 10 minutes (course requirement).  ',
`**Timed spoken sections:** ${Math.round(slides.reduce((sum,s)=>sum+s.secs,0)/60*10)/10} minutes before pauses, screen demonstrations, and transitions.`,
'',
'> These are prepared speaking roles based on assigned code ownership. Each member should understand, review and really contribute to the files before claiming the work as their own on GitHub. Include each member on camera.',
''
];
slides.forEach(s=>{lines.push(`## Slide ${String(s.idx).padStart(2,'0')} — ${s.who} (${s.secs} seconds)`,'',s.note,'');});
lines.push('## Suggested recording steps','',
'1. Record both members on camera at the start and at their individual sections.',
'2. Zianne presents the business rationale, five pages, live navigation, HTML and CSS.',
'3. Daniel presents the quote page, demonstrates changing five color pages and two copies to show ₱50, and explains each PyScript event.',
'4. Capture actual **real** GitHub contributor and commit history before final export; do not manufacture activity.',
'5. Show the test command: `python -m unittest discover -s tests -v`.',
'6. Put the recorded video in the repository or according to instructor directions; submit only the PUBLIC GitHub URL.','');
fs.writeFileSync(path.join(__dirname,'PRESENTATION_SCRIPT.md'),lines.join('\n'),'utf8');
pptx.writeFile({fileName:path.join(__dirname,'PrintConnect_EVD_Presentation.pptx')}).then(()=>console.log('Wrote PPTX; slides:',slides.length,'seconds:',slides.reduce((t,x)=>t+x.secs,0))).catch(e=>{console.error(e);process.exit(1)});
