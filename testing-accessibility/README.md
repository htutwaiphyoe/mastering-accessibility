# Testing Accessibility (Pro)

- Marcy Sutton Todd

[Website](https://testingaccessibility.com/)

## Introduction

- To improve state of accessibility
- Building accessible web apps
- Making inclusive for people with disabilities
- The foundational part of the project
- Accessible from start for well-designed, well-architected
- Make a big impact

## Digital Accessibility

- The practice of preventing and removing barriers that keep disabled people from accessing digital content and interacting with online features
- Prevent from first place

## Accessibility

- A civil right to participate in digital society
- Legal situation with human rights
- Inclusion of people with disabilities
- A key part of design
- Not only technology also in public society
- Often forgotten
- Necessary to prioritize
- Make it a part of the requirements
- Persuade, better than being silent

## Inaccessibility

- Discrimination in practice, whether intentional or not

## Accessibility for Business

- Increase their customer base
- Hire people with disabilities
- Create more robust products and services
- Avoid lawsuits
- Minimize costly redesign and rework
- Selling point in marketing materials
- Standout among competitors
- Legal requirement in government and education sectors

## Accessibility for Society

- Provides a better quality of life for everyone (eg. elevators, curb cuts, intuitive user interfaces)
- Reduces social isolation
- Improves mental health for people with disabilities
- Creates opportunities for everyone (Economic benefits: education, GDP)

## Accessibility as a Moral

- It is necessary and right thing to do
- To be able to access website
- To be able to perform actions independently and securely
- To be able to participate in a digital world
- To be able to make valuable contributions in the workplace
- [ADA History](https://www.history.com/articles/americans-with-disabilities-act-1990-capitol-crawl)

## Accessibility as a Business

- At least one billion people - 15% of the world's population have a recognized disability
- $8 trillion in spending from them
- Disposable income for working-age people with disabilities: $645 billions
- 4055 ADA-related lawsuits in 2021

## Accessibility as a Legal

- Civil rights laws depending on countries
- USA: Americans with Disabilities Act, Section 508, ACAA, CVAA
- WCAG is technically not required under the ADA
- Canada: Accessible Canada Act, AODA
- EU: European Policy Act, EU Directive

## Terms in Accessibility

- Technologies
- Guidelines & Standards
- Miscellaneous terms and acronyms

## Technologies

- HTML, HyperText Markup Language => Structure & Content
- CSS, Cascading Style Sheets => Style & Presentation
- JS, JavaScript => Interactivity, Asynchronous & Functionality
- DOM, Document Object Model => HTML + CSS + JS
- SVG, Scalable Vector Graphics => Icons
- API, Application Programming Interface => Accessibility APIs
- UA, User Agent => Default CSS & Functionality
- AT, Assistive Technology => Hardware or Software used by people with disabilities
- CSR, Client Side Rendering => Single Page Apps
- Native Mobile => iOS and Android
- Hybrid Apps => Web in iOS and Android app
- Electron => Web in Desktop app

## What makes accessible

- Inclusive & Intuitive Design
- Semantic HTML
- Alternative Text
- Accessible Forms
- Interactivity

## Inclusive & Intuitive Design

- The need for accessibility before coding
- bold visual contrast (color contract)
- responsive text and layouts (zoom, reflow)
- Touch targets large enough for human figures and movements
- Obvious interactive controls
- Opt-in motion and animation

## HTML Headings

- Headings for content hierarchy that screen readers can navigate
- h1 to h6
- Outline like MS word
- One h1 per page
- Headings should's skip levels
- Levels for content hierarchy, not for style and size
- Css for styling

## HTML Landmarks

- Landmark element for content semantic sections
- header, nav, main, section, article, aside, footer
- Landmarks can be navigated

## Semantic HTML

- Provide all kinds of accessibility information for free and less work
- ul, ol, p, button, table, figure, hr
- Semantic elements can be navigated by collections of semantic elements

## Text Alternatives

- Graphic and non-text content need to be described
- Image alt text: photo, icons [decorative](https://www.w3.org/WAI/tutorials/images/decorative/)
- Decide decorative or non-decorative not for images
- Time-based media: video and audio captions, audio description and sign language

## Accessible Web Forms

- Use sematic elements for form, accessibility out of the box
- form, fieldset, legend, input, textarea
- Need label element to describe input and textarea, radio, checkbox, select
- Custom style should not be lost accessibility
- Error Validation patterns provide feedback to users [formvalidation](https://webaim.org/techniques/formvalidation/)

## Interactivity Beyond Mouse

- Any tasks mouse can do, keyboard and screen reader should also be able to do
- Semantic elements can provide keyboard interactivity for free
- Use tab key for keyboard navigation
- Use JS and DOM events for more functionalities, such as focus
