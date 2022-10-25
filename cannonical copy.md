# Canonical Written Interview

## Education

### How did you fare in high school mathematics, physical sciences and computing? Which were your strengths and which most enjoyable? How did you rank, competitively, in these subjects?

My parents noticed my interest in Mathematics at a young age.
My mother encouraged me by holding extra curriculum classes when I got home after school.
When she was not available, she enlisted the help of lesson teachers.
My mother told me that she was very good with Mathematics when she was younger, and my father said his father, my grandfather, taught Arithmetic in the primary school in their hometown.

My interest grew into competence.
Soon enough, I was representing my school in Mathematics competitions. My competence carried on into High School, where I competed at state and national levels in competitions like the National International Mathematics Olympiad (NIMO), the Mathematics Association of Nigeria(MAN) Competition, and Cowbellpedia, among others.
I mostly was king of Math in my set for my six years in High School, crying a couple of times when I fell short of 100%.
I was asked on multiple occasions to explain a Math concept to students in a class above me.
I finally scored an A in Mathematics in the West African Senior School Certificate Examination (WASSCE).

I wasn't good enough to go to competitions in Physical Sciences, Physics, and Chemistry.
However, I was always among the top 5 students in my class in Physics, and in my final year in high school, I was the highest-scoring student in the Physics mock exam in my class.
For Chemistry, I mostly performed averagely.

My high school did not have enough computing facilities.
However, my interest in computing was encouraged by my father's gadgets at home, the video games I played on them, and the ones I played on my friend's computers and consoles when I was on holiday.

### What sort of high school student were you? Outside of required work, what were your interests and hobbies?  What would your high school peers remember you for, if we asked them?

I was a quiet and reserved student for the most part, well-behaved and exemplary.
It was no surprise when I got named Senior Prefect Boy in the 3rd semester of my penultimate year in high school.

Outside of required work, I helped organize the school's football league after my elder brother, who started it, left for university.
After a year, I resigned as the league's coordinator to coach one of the teams I felt had the potential to win the league title but were doing poorly.

I was not actively involved in sports, but I participated in an 800m race in the last inter-house sports event I witnessed.

I competed in two debate competitions.

In my final year in high school, I was a member of the school's Chapel leadership.

My former schoolmates would remember me for my competence in Mathematics and general school work, my position as Senior prefect, my reservedness, the competitions I went to and the short stories I wrote in junior secondary school.

### In languages and the arts at high school, what were your strongest subjects and how did you rank in those among your school peers?

Languages and the arts were not my strong suits.
I wrote stories in Junior secondary school, but I never got to finish, let alone publish anyone.

I had a strong background in French coming from primary school, but because I did not like my French teacher in junior secondary school, I lost interest in French and, in no time, lost competence in both written and spoken French.
I failed woefully in my native language, Igbo, until high school, where I scored barely enough to pass and ended up with a C6 in the WASSCE.

I was in the school choir in primary school and played the recorder, but all of that went out the window when I got to junior secondary school.
I went to 2 debate competitions, in which my school did not win any.
I scored reasonably high on my essays, so I must have been good to a reasonable extent.

All in all, for the Arts and Languages, there was good potential and good Primary school background that I did not just work on improving, and in time, I became incompetent with those gifts and talents.

### Please outline some high school achievements considered exceptional by peers and staff members

- Senior Prefect Boy

- Cowbellpedia Mathematics Competition State First Runner-up Junior Category

- Cowbellpedia Mathematics Competition State Champion Senior Category

- Mathematics Association of Nigeria State Champion Senior Category

- A1 in Mathematics, Further Mathematics, and Economics in WASSCE

- Chapel Leader

### Which degree and university did you choose, and why?

I chose the University of Nigeria, Nsukka, because both parents attended the school.
I started with Dental Surgery but switched to Electronic Engineering after my first year to pursue my passion for computing and programming.

### Which university courses did you perform best at? How did you rank in your degree?

I did not perform nearly as well in my years at university.
I even had some carry-overs and repeated my 3rd year in Engineering.
Due to the nationwide strike that affected government-owned universities in Nigeria, I still don't know what rank I finished in school.

### Outside of class, what were your interests and where did you spend your time?

Outside of class, I spent time, initially in church, later with my fraternity brothers, and much later, towards the end, programming.

### What did you achieve at university that you consider exceptional

I founded a startup with four other students in my class in my 3rd year at the university.
Sadly, it did not do so well, and we had to shut it down after a couple of months.

In my final year, I hosted one of the biggest events in school.

## Web Engineering Experience

### What does semantic markup mean?

Semantic markup is a way of writing and structuring your HTML (Hypertext Markup Language) so that it reinforces the semantics, or meaning, of the content rather than its appearance.
In other words, HTML only focuses on the structure of the page and CSS focuses on the style of the content of the web page.

For instance, when you look at a web page, you can clearly identify a paragraph.
A `<p>` tag indicates that an enclosed text is a paragraph. Again, since the `p` tag is both semantic and presentational, users know this is a paragraph, and browsers know how to display it.
On the other hand, if we use `<div>` or `<span>` in a text, it doesn’t provide any additional meaning to the markup because they are not semantic. Instead, they define only how the text would look like.

#### HTML5 & Semantics

A semantic element clearly describes its meaning(its purpose and content type) to both the browser and the developer, by having its own HTML tag.

HTML included semantic markup since its inception. However, HTML5 introduced even more semantic tags such as `<section>`, `<article>`, `<footer>`, `<nav>`, `<aside>`, `<mark>`, and `<time>`, making it clearer what information is on the webpage and what it means.
This is way better than mashing up web pages with `<div>` and `<span>` tags, which are non-semantic and only used to group elements together.

The following HTML5 tags can be used in place of `<div>` tags to break a page's content into meaningful parts:

- `<header>` — Represents a container for introductory content for a section, article, entire web page or a set of navigation links.

- `<nav>` — Navigation menu links would all be placed in a `<nav>` tag.

- `<aside>` — Represents content that’s less important. It’s mostly used for sidebars and should be indirectly related to the surrounding content.

- `<main>` — Specifies main content of the HTML document. The content inside the `<main>` element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms. There should be only one per page.

- `<section>` — A way of grouping together nearby content of a similar theme, typically with a heading. A web page could normally be split into sections for introduction, content, and contact information.

- `<article>` — Represents an independent article on a web page. For example, a blog post.

- `<footer>` — Sits at the base of a page or section, and might include contact information and some site navigation.

![HTML5 Semantic Markup](https://teamcodearchitects.com/wp-content/uploads/2021/06/HTML-semantic-page-structure.png)

#### Benefits of Semantic Markup

1. Accessibility

   Semantic markup can help humans(without disabilities) and different assistive applications and devices(such as text-to-speech translators, text size controls, colour and contrast controls, etc), understand the content structure, the relationship among page elements, and the nature of content inside an element and interpret these to people with disabilities.
   Thus, ensuring equal access for people with disabilities and providing more options to customize their experience.

2. Search Engine Optimization(SEO)

   Semantic markup provides better instructions for web(search engine) crawlers when scanning pages for content, by telling them what important content is on the page.
   This can result in search engines ranking the page using the most relevant and meaningful content on the page and ensuring that the right pages are delivered for the right queries.

3. Maintainability

   Semantic markup is easier to update and change than web pages that contain a great deal of presentation markup because it makes the code clearer and organizes it in a logical way.

4. Quality Code

   Semantic markup helps us think about the structure of dynamic data, and to choose the titles' hierarchy properly.

### What is the box model?

> All HTML elements can be considered boxes

In CSS, the term _box model_ is used when talking about design and layout.
The CSS box model is essentially a container that wraps around every HTML element. It consists of: _margins_, _borders_, _padding_, and the actual _content_. The image below illustrates the box model:

![CSS Box Model](https://miro.medium.com/max/1400/1*E_YuB8x1B3T3h6PIJ_I9qQ.png)

- **Content** - The content of the box, where text and images appear

- **Padding** - Clears an area around the content. The padding is transparent

- **Border** - A border that goes around the padding and content

- **Margin** - Clears an area outside the border. The margin is transparent

> The box model allows us to add a border around elements, and to define space between elements.

#### Width and Height of an Element

By default, a block-level element will take up the full width available (stretches out to the left and right as far as it can).

To set the width and height of an element, we can use the width and height properties.

By default, when the width and height properties of an element are set with CSS, it's just the width and height of the _content_ area that is set. To calculate the full size of an element, you must also add padding, borders and margins.

For instance:

```CSS

div {

  width: 320px;

  height: 220px;

  border: 15px solid green;

  padding: 50px;

  margin: 0;

}

```

The width of the div element is 320px(width) + 15px(left border) + 15px(right border) + 50px(left padding) + 50px(right padding) = 450px

The height of the div element is 220px(height) + 15px(top border) + 15px(bottom border) + 50px(top padding) + 50px(bottom padding) = 350px.

However, when the `box-sizing` property is set to `border-box`, the padding and border are included in the width and height.

```CSS

div {

  box-sizing: border-box;

  width: 320px;

  height: 220px;

  border: 15px solid green;

  padding: 50px;

  margin: 0;

}

```

The width of the div element is 320px.

The height of the div element is 220px.

### How would you save a login session?

> A session is a temporary interaction between a user and a server. It is used to store information about a user and their interaction with the server.

A session is created on the server and a unique session ID is assigned to the user, with a set time for expiration. The session ID is stored in a cookie on the user's computer. The session ID is used to retrieve the user's information from the server. This way the user can be recognized on subsequent requests, and the user cannot be impersonated by another user by altering the cookie on the client's computer.

#### How to save a session?

- Create a session ID

- Store the session ID in a cookie

- Store the session data on the server

#### How to destroy a session?

- Delete the session data on the server

- Delete the session ID cookie

### What is your approach to debugging a web page?

> Debugging is the process of finding and fixing errors within files and scripts that make up a web page.

Debugging a web page can be done by using the built-in developer tools on either the browser or an online/cloud-based debugging tool such as BrowserStack.

Benefits of using an online debugging tool include device rotation, local testing and geolocation testing across different OS-device-browser combinations that may not be accessible on-premise or in the browser.

The debugging tools are a special UI in developer tools that makes debugging much easier. With developer tools, one can inspect the HTML and CSS of a web page, and debug JavaScript code. The developer tools are built into most modern browsers and can be accessed by pressing `F12` or `Ctrl + Shift + I` on Windows, or `Cmd + Option + I` on Mac. With the developer tool, one can view _the source code_, _structure of the HTML and CSS_, _console logs_, _network requests,\_performance_,_storage_, etc of a web page.

Thus allowing one to trace the code step by step to see what exactly is going on.

#### Debugging The Web Page Design

Navigate to the **Inspect Tab** by pressing `F12` or `Ctrl + Shift + I` on Windows, or `Cmd + Option + I` on Mac, or by right-clicking on the web page and selecting **Inspect**.

A new area will come up where you can see the HTML code in the “Elements” tab, labelled in the diagram as follows:

a. The element being debugged

b. The element's HTML

c. The element's CSS

![Design Debugging](https://ostraining.com/wp-content/uploads/images/webdesign/chrome-dev-tools/2.jpg)

To debug the HTML:

![HTML Debugging 1](https://ostraining.com/wp-content/uploads/images/webdesign/chrome-dev-tools/3.jpg)

- In the _Elements_ area, right-click on the HTML you want to work with.

- Click _Edit as HTML_

- Change the HTML depending on your needs.

- Then click above or below the edit field to see your changes reflected on the browser.

![HTML Debugging 2](https://ostraining.com/wp-content/uploads/images/webdesign/chrome-dev-tools/4.jpg)

To debug the CSS:

- Under the _Styles_ tab in the CSS area, tweak the CSS properties for the current element.

- As you’re changing the CSS, note that the new properties are being reflected immediately.

![CSS Debugging](https://ostraining.com/wp-content/uploads/images/webdesign/chrome-dev-tools/5.jpg)

#### Debugging JavaScript Code

Here, the debugging process can be divided into 3 steps:

1. **Locating the error** — The first step is to find the error. There are several ways to do it:

   - **Console** — The console is a panel where the developer tools output errors, warnings, and other messages. It can be opened by pressing `Ctrl+Shift+J` or `Cmd+Option+J` on Mac. The console is the first place to look for errors. It shows the exact line and file where the error occurred. It also shows the error message and a stack trace with a list of functions that were running at the moment of the error.

   - **Breakpoints** — A breakpoint is a point in the code where the debugger will automatically pause the execution. It can be set by clicking on the line number in the developer tools. The execution can be resumed by pressing `F8` or `F10`. The `F8` key will run the code until the next breakpoint is reached, while the `F10` key will run the code line by line.

   - **Watch** — The watch panel allows observing any expressions. It can be useful when debugging complex code, or when the value of an expression changes several times. To add an expression to the watch panel, right-click on it and select `Add to watch`.

2. **Fixing the error** — Once the error is located, it can be fixed. There are several ways to do it:

   - **Edit and continue** — This feature allows editing the code while the debugger is paused. It can be useful when the error is caused by a typo in the variable name or a missing semicolon. To edit the code, press `F4` or click on the edit icon in the top right corner of the developer tools. The changes will be applied immediately, and the execution will continue.

   - **Breakpoints conditional** — A breakpoint can be made conditional by right-clicking on it and selecting `Add conditional breakpoint`. The breakpoint will only be triggered if the condition is true.

   - **Log points** — A log point is a breakpoint that doesn't pause the execution, but instead logs a message to the console. It can be useful when the value of an expression changes several times. To add a log point, right-click on the line number and select `Add log point`.

3. **Preventing the error from happening again** — With knowledge of how the error was fixed, it can be prevented from happening again. There are several ways to do it:

   - **Automated testing** — Automated testing is a great way to prevent errors from happening again. It involves writing tests that check if the code works as expected. If the code is changed, the tests will fail, and it will be clear what exactly needs to be fixed.

   - **Linting** — Linting is a type of static analysis that is frequently used to find bugs in code. It involves running a program that analyses the code and reports any errors it finds. Linting can be performed manually or automatically. It can be performed manually by running a linter on the code. It can be performed automatically by setting up a linter as a pre-commit hook.

   - **Code review** — Code review is a process where another developer examines the code and finds bugs or other issues. It can be performed manually or automatically. It can be performed manually by asking another developer to review the code. It can be performed automatically by setting up a code review tool as a pre-commit hook.

Other issues that can be debugged using the developer tools include, but are not limited to:

- **Performance** — The performance tab shows how long it takes to load the page and render each element. It can be used to find slow elements and optimize them.

- **Network** — The network tab shows all network requests made by the page. It can be used to find slow requests and optimize them.

- **Storage** — The storage tab shows all data stored in the browser. It can be used to find and fix issues with local storage.

- **Security** — The security tab shows security issues with the page. It can be used to find and fix issues with mixed content, insecure passwords, and other security issues.

- **Accessibility** — The accessibility tab shows accessibility issues with the page. It can be used to find and fix issues with colour contrast, missing labels, and other accessibility issues.

- **Audits** — The audits tab runs an audit of the page and shows the results. It can be used to find and fix issues with performance, accessibility, and other issues.

- **Application** — The application tab shows all service workers and other background processes. It can be used to find and fix issues with service workers.

## Software Engineering Experience

### What kinds of software projects have you worked on before? Which operating systems, development environments, languages, and databases?

On a professional level, I have worked on the following projects:

- [Placer.ai](https://placer.ai/) — A location intelligence platform that helps businesses understand their customers and optimize their marketing efforts. Improved the performance and overall functionality of the Ranking Overview and Ranking Index components by migrating from AngularJS to React. Other tools worked on include:

  Yarn, Storybook, Ant Design, BitBucket, Jira, React, Redux, Webpack, Babel

- [Remotebase Developers Portal](https://developers.remotebase.com/): Made design thinking suggestions and improvements, using analytical skills, to the Remotebase tool codebase and front-end web application in React/Redux that led to a better user experience and the admiration of the co-founders. Other technologies/tools used include Yarn, Storybook, GitHub, Typescript, SASS, and Ant Design.

- [Woozeee](https://woozeee.com/): Developed the landing page and movies vertical of the web application MVP from a Figma design using React & Redux(JavaScript), Bootstrap, JSON and Yarn with code hosted on Gitlab.

  This led to improved responsiveness, flexibility, and general functionality of the homepage and movies vertical of the MVP of the woozeee app

For personal projects, I have worked on the following projects:

- [Crwn Clothing](https://resplendent-salmiakki-1f772a.netlify.app): Developed a Progressive Web App for an eCommerce site using React(Typescript), React Router, Redux(with redux-toolkit and redux-saga), and Firebase, complete with Stripe payment integration using serverless functions, and deployed it to Netlify.

  I worked with Context API, CSS modules, and GraphQL(with Apollo client) also.

  Visit here: <https://resplendent-salmiakki-1f772a.netlify.app>

- [Staking App](https://github.com/amjedidiah/staking-app): A blockchain project, Staking Decentralized finance (Defi) app for cryptocurrency using open source software Truffle Ganache and Metamask wallet.

- [Would You Rather](https://amjedidiah-would-you-rather.netlify.app/): Implemented a front-end application for the popular Would You Rather game. User Interface & Software designs were employed to ensure quality User Experience (UX). Code was hosted on Git provider, GitHub, and the application was deployed to Netlify. Visit here: <https://amjedidiah-would-you-rather.netlify.app>

I have also worked on personal projects using the following technologies:

MongoDB, Express, Node, and Heroku.

### Would you describe yourself as a strong coder? Why?

I would describe myself as a strong coder because I:

- Have spent reasonable time over the years, learning and practising coding.

- Keep learning and improving my skills

- Have collaborated on projects with other developers in the past

- Help other coders fix bugs and improve their code

### Outline your thoughts on open-source software development. Have you been an open-source maintainer, and can you point to those projects?

I have not been an open source maintainer, and this year is the first time I signed up to contribute to my first open source project, Webblocks[https://github.com/zero-to-mastery/webblocks-2022]

### How extensive is your experience in Python software engineering? How do you test Python applications? Outline the applications that you have led in Python, and your takeaways from that experience

I do not have an extensive experience in Python software engineering. I have only taken an introductory course in Python and built simple projects with it. I have not led any projects in Python.

### How extensive is your experience in Golang software engineering? Outline the applications that you have led in Golang

I do not have any experience with Golang. I have not led any projects in Golang.

### Describe your experience of web programming - JavaScript, Typescript, React and CSS in particular

I have experience with web programming using JavaScript, Typescript, React, and CSS. I have worked on personal projects, using these technologies, collaborated with other developers on these technologies to build personal projects and collaborate on projects in a team. I have also mentored other developers on these technologies on a personal and cooperate level.

My journey with Web programming started in 2012 when I completed a Web Design course at an IT training Institute here in Lagos Nigeria.
After that, I went on to take the Complete Web Developer Course 1.0 on Udemy by Rob Percival.
I spent a lot of hours in that period practising and honing my skills in HTML, CSS, JavaScript and technologies in the LAMP stack.
I went on to build a few personal projects for myself and my friends using these technologies, including PHP and MySQL for the backend.

In 2015, I took a break from web development and design to focus on my studies.

I came back in 2018 and realised my skills had been outdated.
I went on to take the Complete Web Developer Course 2.0 and the Object Oriented Programming boh on Udemy by Rob Percival.
I also took the Modern React with Redux course and a course on Node.js by Andrei Neagoie on Udemy.

Thereafter, I started freelancing professionally and in that same year grabbed the gold and bronze medals, at the state and national levels respectively of the 2019 iCreate Skills Festival.
I also volunteered as a Community mentor for a Web Developer BootCamp organized by the Nigerian Society of Engineers in my school, the University of Nigeria.

In 2020, I continued to practice my skills in React, Redux, Node, Express and PostgreSQL, by building personal projects and freelancing. I also went on to speak at a Remote Student Conference held in South Africa by Microsoft Student Partners and Geekulcha on Web development

In 2021, I completed my schooling and in April went on to get my first cooperate job at Woozeee. Since then I have worked for 3 companies up till date, mentoring students in multiple African countries, and working on projects with other developers, while also learning and improving my skills.

I have gone on to adopt more technologies like GraphQL(with Apollo), TypeScript, SASS, Ant Design, React testing Library, Storybook, MongoDB, and Firebase.

### How have you used relational data, such as SQL databases, in your work? How much data model design work have you done? How do you approach this work? What has been unexpected for you in working with structured data models and design?

On a few occasions, I have used relational data, such as SQL databases, in my work. I have worked on some freelance and personal projects that required me to design and implement data models using SQL databases. I have also worked on personal projects that required me to design and implement data models using NoSQL databases.

All in a bid to determine how data is logically stored and retrieved from a database and updated when necessary.

I have used database models(high-level specifications for database structure using rows and columns) and schemas(a database blueprint, implementation of a DB model) to define tables, fields, relationships, and constraints and have taken all of these into consideration when inserting data into the database.

The steps I have followed loosely in the past include:

- Conceptual data model using data structure diagrams(entity-relational diagrams) to define entities and relationships between them, and to define the attributes of each entity

- Logical data model, using database models and schemas(relational model) to define the tables and fields and the relationships between tables. I have realised that the fastest way to create a schema is to translate the entity-relationship diagram into tables

> I am aware of the physical data model, but have not been tasked with that responsibility in the past.

### Describe your experience with micro-service architectures - web front ends, REST APIs, data stores, event processing and other kinds of integration between components. What are the key considerations for architecture, maintainability, and reliability in these large systems?

I have the experience of being part of the team that is building the Remotebase developers portal at <https://developers.remotebase.com>.
I worked on the front-end microservice built with React.

When deciding whether microservice architecture is best for an application, the following are key considerations:

- Access control & Security: In a microservice architecture, each service has separate access controls. To help ensure security, you need to secure access to each service both within the environment and from external applications that consume its APIs.

- Database system: Microservice best practices require per-service databases. When you do data modelling for an application, notice whether per-service databases fit your application.

- Analytics in the deployment environment: When you implement a microservice architecture, you must instrument and monitor the environment so that you can identify bottlenecks, detect and prevent failures, and support diagnostics

- Inter-service communication: Synchronous inter-service communication typically reduces the availability of an application. For example, if the order service in an e-commerce application synchronously invokes other services upstream, and if those services are unavailable, it can't create an order. Therefore, it is recommended to implement asynchronous, message‑based communication.

### Outline your thoughts on quality in software development. What practices are most effective in software teams to drive improvements in quality?

I believe that quality in software development is very important. It is the difference between a good product and a great product. I believe a product should not just be easy to use, but also easy to maintain and scale.
I believe that the most effective practices in software teams to drive improvements in quality are:

- Test early and often with automation to ensure that any defects to the product do not snowball into larger, more complicated issues, and to increase test coverage and accuracy, thus improving the quality of the overall product.

- Implement quality controls from the beginning and echo the importance of quality assurance throughout the entire software development cycle to instil confidence in the overall quality of the product.

- Encourage innovation and communication among team members to ensure that the product is of the highest quality

- Plan for a changeable environment for the product bearing in mind that the product relies on several changing external factors(like web browsers, libraries, and OS). The end result should be a product that is flexible and adaptable to changes in its environment to prevent dissonance and maintain software quality.

- Adopt the attitude of delivering continuous small progressions rather than one final end project to ensure that the product is of the highest quality.

- Have a risk register to identify and mitigate risks to the product

- Prioritize long-term thinking and planning to ensure that short-term gains and immediate gratification do not compromise long-term quality.

- Outlining clear and concise deliverables and milestones for the product from the outset will ensure there is an emphasis on quality from the beginning, and that budgets, resources, and time are aligned correctly to deliver quality

- Study what has worked throughout the production process. Utilise what is working and see if innovation can transcend product quality even further.

- When quality is delivered, remember what worked well and what did not work well. Keep an updated record of both the positives and negatives of any given project and turn to it frequently for future projects.

## Context

### Outline your thoughts on the mission of Canonical. What is it about the company's purpose and goals which is most appealing to you? What is risky or unappealing? Are there any elements of the company goals that you are unsure about?

> Seamless consumption of open source across the computing spectrum

I think the mission of canonical is relevant now and in the future.

As tech has grown and expanded over the years, the need for open-source software has grown also. The need for open-source software is not just limited to the desktop and the web but also applies to the cloud and devices. Even companies like Apple which started as mostly anti-open-source, are beginning to embrace open-source and use it more.

I had a Dell laptop one time with 2GB RAM space which made it very difficult for me to enjoy the full Windows experience and upgrade from Windows 7 to Windows 10. After a while of complaining, I changed the OS to Linux Ubuntu. A good number of times I messed up the laptop and had to reinstall Ubuntu. However, when I learned my way around the CLI and key commands, I was very grateful for the opportunity to enjoy the laptop and use it for my work, even though, now I had limited access to software, most of which was not available for Ubuntu. I had to use the web browser to access them. I was able to use the laptop for a good two years before I got a new one. I am grateful to Canonical and its mission to make open-source software available to everyone everywhere.

The company's goals and purpose I find most appealing, are described in the highlighted words and phrases in this statement:

> Canonical is unlike any other company in the world. It is amazing for people who are **organised**, **passionate about technology**, and **like to travel**. People at Canonical say the people at Canonical are amazing.

- I love organisation and mostly organise my day-to-day activities with the Google Calendar app: sleep time, wake-up time, breaks, and family time. I believe that once there is an organised structure, it is easier to achieve the desired result, such that even if one falls off the track, one can easily retrace their steps by seeing how far they have come and how far one has left to go, and committing to it once again.

- I am passionate about technology, its power and capability, its advancement and adoption. The adoption of technology drives and encourages me to mentor other developers around me and learn new technologies and skills.

- I love to travel. I have been to 2 African countries and three states in my country in the past years, and I look forward to travelling to more countries in the future. I think travelling is a great way to learn about other cultures and people and to learn about myself. I believe it introduces new perspectives and ideas to the mind and helps to broaden the mind.

  Above all, I have always desired to live as a digital nomad, on some remote island, with access to the internet, steady electricity, good food with a variety of delicacies, clean water, rich culture and friendly natives with whom I can interact with in my spare time out of work.

- It is impressive that people at Canonical think that teammates are amazing. I look forward to joining this amazing community.

### Who are competitors to Canonical, and what does Canonical need to change to be a more effective competitor?

Some Canonical competitors include:

- Windows

- macOS

- Amazon EC2

- Hostwinds

- DigitalOcean

- Google Compute Engine

- Azure Virtual Machines

- RedHat

- Linode

- Vultr

- Netrepid

To be a more effective competitor, canonical needs to prioritise making its services and devices available and easy to use for most people who have little or no programming/engineering skills.

As I mentioned above, when I switched from Windows to Ubuntu, I had issues adjusting to the OS, and a couple of times, I broke the OS, which is less likely to happen on a Windows PC.

I agree that Ubuntu is a powerful OS that gives more control than Windows.

However, most people without programming/engineering skills) is looking for a laptop to primarily browse, enjoy multimedia files, game and do word processing and, in some cases, video and image editing. It will be nice for Canonical to have a reasonable market share of these consumers by providing more services and products tailored to them.

### Why do you most want to work for Canonical?

I want to work for Canonical because I believe in the mission of the company, and I can contribute to the growth of the company and the community. I can learn a lot from the company and the community. I can also teach and share my knowledge with the community and the company.

### Which Canonical products and services would you most like to work on?

Here is a screenshot I took from the Canonical website of the lifestyle page:

![Canonical Lifestyle Page](https://drive.google.com/file/d/1XBD-I00xCM6C0b6TOYC5xx6zud4J_FPy/view?usp=sharing)

I clicked on the filters, hoping to see positions based on the selected filters, but it did not work as expected.

If given the opportunity, I will fix this bug on the Canonical website and any other related issues while learning the necessary technologies and skills to contribute to Ubuntu.

After which, I will like to contribute to the development of the Ubuntu OS to make it more user-friendly and to support more software for users.
