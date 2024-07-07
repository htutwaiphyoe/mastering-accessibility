# Web App Accessibility - Frontend Masters

## Information

This repo includes the public source code for the [course website](https://web-accessibility-v3.vercel.app/) related to the [Frontend Masters course on Web App Accessibility](https://frontendmasters.com/courses/react-accessibility/).

Topics:

- Introduction
- Screen Readers and Assistive Technologies
- Accessibility Debugging
- Accessible HTML
- ARIA (Accessible Rich Internet Applications)
- Focus Management
- Visual Considerations
- Wrap-Up

The base components used in class are in the `components` directory: [https://github.com/marcysutton/frontend-masters-web-accessibility-v3/tree/main/components]

More-complete components are in the `completed-components` directory: [https://github.com/marcysutton/frontend-masters-web-accessibility-v3/tree/main/completed-components]

## Setup

This site uses Next.js and React. To run the project, clone (or download it) from GitHub:

```sh
git clone git@github.com:marcysutton/frontend-masters-web-accessibility-v3.git
```

Install dependencies with yarn or npm:

```sh
yarn
```

Run the project locally:

```sh
yarn run dev
```

Note: These slides are based on the [JavaScript Patterns repo](https://github.com/lydiahallie/javascript-react-patterns) from Lydia Hallie.

## 01. Introduction

Security issues => entering bank details without other's help

font size huge => vision accessibility

access debt

accessibility requirement by law

## 02. Benefit of Accessibility

switch device => limited motions

screen reader => rendering is important

voice over => semantic html

## 03. Accessibility Standards & Definitions

WCAG => forced by law

## 04. Screen Readers

Screen Readers => blind

iPhone => default screen reader (VoiceOver)

Read Aloud => Browser extension

skip links => screen reader techniques

alt => shouldn't add image/photo/picture as screen readers know it is a image

WebAIM => survey group

different platforms have different APIs

iOS, MacOS, Windows (JAWS, NVDA) => VM route

## 05. Alternative Text

no alt text => read file name

alt text => brief and descriptive

captions are part of the content.

empty alt text (decorative image like GIF) => skip the read

alt decision tree

sr-only for complex alt text with markup => arial-labelledby + id => background image alt text

AI alt text for user-generated content

## 06. Assistive Technologies

eyeglasses and wheelchairs => assistive devices.
Speech recognition and voice control
Braille displays
Switch devices
Screen magnification
Transcripts and Closed Captions
Audio Descriptions

## 07. Screen Reader Exercise

Mac VoiceOVer => fn + f5 => control to pause

screen reader announces type of elements

rotor utilities => list everything on the link

## 08. Screen Readers Q&A

Assistiv Labs

## 09. Testing Overview, Linters & Dev Tools

accessibility testing should be part of regular workflow

tab key to navigate through a page

a mouse user can click on it, as a keyboard user should be able to do the same task.

zoom the page to at least 200%

responsive design will work for zoom and magnification => layout reflow

screen readers

transcripts and captions for media content

Lighthouse, Axe Chrome extension

ESlint-Plugin-JSX-A11y, Axe Linter

## 10. Accessibility Dev Tools Walkthrough

axe dev tools => full page scan => check code level, need to check UX level too

Lighthouse

aria-label for landmark label

## 11. Working with Teams

disabled the cursor on localhost

saying something is compliant and actually making it accessible are two totally different things

It needs to be part of product DNA, and the earlier incorporate that, the better.

don't stop at tooling

## 12. Debugging Exercise

better late than never

accessibility inspector => accessibility tree

contrast AA => 4.5, AAA => 7.0

## 13. Accessible & Semantic HTML

If it generating a front end that users are interacting with, accessibility is a concern.

the basic always apply

HTML provides structural semantics => good for screen reader

all of those elements that are not divs have meaning => tags become objects in accessibility tree

semantic HTML => h1, header, footer => include in accessibility tree

generic HTML => div, span => does not include in accessibility tree

div soup => a long tree structure of div

right heading level for the content => not based on the way it looks => hierarchy of content

## 14. Landmark Elements, Forms, & Buttons

landmark elements are technically a best practice

nav and sections that aren't labeled are kind of treated as divs

if lists have their lists style removed with CSS, there's no dot, they will actually not call it out as a list in a lot of cases in Safari => add role list

label every control, for, id, wrap input in label

## 15. Setting Language and Fixing Markup

put HTML Lang

depending on how the content is like what language it's in, the screen reader will change its pronunciation

page level versus element level language => can overwrite

## 16. Accessible HTML Exercise

<https://web-accessibility-v3.vercel.app/product-page-exercise-3>

## 17. Accessible HTML Solution: Product Details

only have one header role banner

IconButton => aria-label

## 18. Accessible HTML Solution: Header & Gallery

the goal of aria-hidden is to hide something from the accessibility tree.

ref={(node) => setInert(node, 1)} to remove tab index on ghost links (hidden links)

## 19. ARIA

ARIA stands for Accessible Rich Internet Applications

standard to add accessibility information through web apps

implicit roles and explicit roles

## 20. Roles, States and Properties

building blocks of ARIA. all of the attributes that are defined in the ARIA specification are roles, states, or properties

A11ySupport.io => caniuse for aria

ARIA in your CSS selectors

can't put aria-label on a div unless it has a certain role on it

title, aria-describedby => accessible description.

Chrome DevTools => show which thing wins for multiple
