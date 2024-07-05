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
