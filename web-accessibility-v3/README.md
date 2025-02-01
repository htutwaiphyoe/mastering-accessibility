# Web Accessibility v3

- Jon Kuperman

## Introduction

Accessibility => a11y

Web accessibility => Making websites usable to people with disabilities

usable => perceive, understand, navigate, interact and contribute

## Overlapped areas

1. Web Performance (faster websites make more accessible)
2. Internationalization (language barrier)
3. UI/UX (easy to use layout, information architecture, color)
4. SEO (semantic html)

## Disability Statistics (WHO)

- An estimated 1.3 billion people experience significant disability. This represents 16% of the world’s population, or 1 in 6 of us.

## Types of Disabilities

- Mobility and Physical
- Cognitive and neurological
- Visual
- Hearing

## Reasons

- Empathy
- Human Rights
- Legal Issues
- Impactful
- Standout

## Legal Landscape

- Legal requirement in US and EU
- Disability Act (ADA)
- Fines, Lawsuits and Reputational Damage

## Laws and Standards

- ADA Title II & III (Government & Business)
- Section 508 (Federal Agencies)
- WCAG 2.1 Level AA compliance

## Lawsuits & Fines

- $150k per violation
- E-commerce
- Finance
- Hospitality
- Healthcare

## Stay Compliant

- Follow WCAG 2.1 Level AA standards
- Test with real uses and assistive technologies
- Use automated tools (Lighthouse, Axe)
- Lead the team

## Assistive Technologies

- keyboard only
- Head wand
- Mouth stick
- Single switch
- Screen readers
- Eye tracker keyboard

## The curb cut effect

curb cut effect => phenomenon of disability-friendly features being used and by a larger group than the people they were designed for

improving one thing for specific issues benefits to others

## Standards and Guidelines

- Web Content Accessibility Guidelines (WCAG)
- W3C Web Accessibility Initiative (WAI)
- Accessible Rich Internet Applications (WAI-ARIA)

## W3C

- The World Wide Web Consortium (W3C)
- The international standards organization for the World Wide Web
- The standards for HTML, CSS and Accessibility
- [W3C](https://www.w3.org/)

## WAI

- Web Accessibility Initiative (WAI)
- An Initiative within the W3C focused on Accessibility
- The author of official Accessibility Specification (WCAG)
- [WAI](https://www.w3.org/WAI/)

## WCAG

- Web Content Accessibility Guidelines (WCAG)
- The official standard, published by WAI
- [wcag](https://www.w3.org/WAI/standards-guidelines/wcag/)
- Lighthouse, Linter, Automation Tools follow WCAG rules

## WAI-ARIA

- Accessible Rich Internet Applications
- Accessibility Standard beyond semantic HTML
- [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)

## WebAIM

- Not an official standards body
- An Independent organization
- Provide easy to understand recommendations for Accessibility
- [WebAIM](https://webaim.org/)

## WCAG Conformance Levels

- A (lowest, minimum level)
- AA (Mid range, minimum legal requirement, recommended)
- AAA (highest)

## WCAG POUR Principles

- Perceivable
- Operable
- Understandable
- Robust

## Screen Reader

- assistive technology for blind/low vision person
- converts digital text to speech
- help to hear content and navigate with keyboard
- page structure and layout is important
- JAWS, NVDA, VoiceOver

## Alternative Text

- alt attribute in img tag
- by default, read file name if there is no alt text
- if exist, read alt text
- if exist but empty text, skip (decorative purposes)
- no need to add image/photo word in text
- add the meaning of image or description of things inside it
- picture tag => use aria label
- avoid SEO keywords

## Audio & Video

- not all content are visual
- transcript for video, audio
- synchronized captions in YouTube video

## Semantic HTMl

- have meaning to screen reader but no special functionality `<header>`, `<footer>`
- have both meaning and functionality `<button>`, `<input>`

## Div Soup

- using div for everything
- multiple nested div elements

## Form Labels

- Label is essential for each input
- Screen reader announce input + label once input is focused

## Visual only labels

- using p or span
- Screen reader announce "Edit text, blank"

## HTML Labels

- use label tag with for attribute and input with id attribute
- Screen reader announce "Label, Edit text, blank"

## Implicit HTML Labels

- wrap input with label
- no need to use for and id attributes

## Limitations with label

- works with 'label-able' element only
- button, input, keygen, meter, output, progress, select, textarea

## ARIA-LABEL

- can use to any elements
- use to label that cannot labeled by Label element
- aria-label has more precedence over label element

## Divs Are Not Buttons

[accessibility-weekly](https://theadminbar.com/accessibility-weekly/)

## Making button with a div

```html
<div onclick="alert('hello')">Click me!</div>
```

## Tell Screen readers it's clickable

```html
<div role="button" onclick="alert('hello')">Click me!</div>
```

## Tab focus

```html
<div tabindex="0" role="button" onclick="alert('hello')">Click me!</div>
```

## Keyboard only users interaction with space/enter

```html
<div tabindex="0" role="button" onclick="alert('hello')" onkeyup="alert('hello')">Click me!</div>
```

## Labeling for Screen readers

```html
<div aria-label='Alert the word hello' tabindex="0" role="button" onclick="alert('hello')" onkeyup="alert('hello')">Click me!</div>
```

## Styles for different state

```html
<div aria-label='Alert the word hello' tabindex="0" role="button" onclick="alert('hello')" onkeyup="alert('hello')" style="hover, active, focus, focus-within">Click me!</div>
```

## Just use button

```html
<button onclick="alert('hello')">Click me!</button>
```

## Twitter's Div Soup

- use single codebase for React and ReactNative
- anti div soup and use semantic html
- can create highly accessible without semantic html (trade-off)

## Screen Reader Only Content

- cannot detect screen reader or assistive technologies
- no minimum website version for accessibility
- full robust website with extremely accessible direction
- use to communicate with a screen reader directly
- use visually hidden class
- eg. announcing accessibility features like shortcuts in twitter

## Focus Management

- visible focus indicators for keyboard users
- mouse hover style does not need ring, only keyboard focus

## Focus Style Requirements

- focus indicators must have minimum contrast ratio of 3:1 against adjacent colors
- focus areas should be at least 2px thick
- Focus style should be visible in both dark and light theme
- Consider using multiple indicators (outline + background)
- Animation can enhance focus visibility but not distracting

## Keyboard only users

- usable with only keyboard
- use focus indicator to know current active item
- offer shortcut to do certain action (eg. skip link)

## Keyboard Shortcuts

- provide shortcuts to do actions
- eg. Twitter & Facebook shift + ?

## Skip Links

- to skip large headers and navigation
- jump to main content
- show a button once the user hit tab for the first time in the website

## How to make a skip link

- create an a tag with "Skip to content" text
- Put it to the top of body
- Make visually hidden
- make it visible when in focus state

## Tab Navigation

- use tab key to navigate by default
- next => tab, previous => shift + tab

## Tabbable elements

- a, button, input, select, textarea, iframe
- [focusable](https://github.com/jkup/focusable)

## Making an non-tabbable element tabbable

- use tabindex attribute

## Tabindex values

- negative => focusable, not reachable via sequential keyboard navigation
- 0 => focusable and reachable, order is defined by DOM
- positive => focusable and reachable, order is defined by value like z-index (NOT RECOMMENDED)

## Active Element

- store current focused element before page transition to return back to it
- document.activeElement
- element.focus()

## Tab Trapping

- trap the tab navigation in a modal
- last focus element back to first focus element in a modal
- back to last focus element before modal open when modal closed
- Component libraries support out of the box
- Need manual testing, automated testing cannot know

## ARIA

- use to provide exceptional accessible experience

## WAI-ARIA vs WCAG

- WCAG sets overall standards (eg. color contrast, keyboard focus)
- WAI-ARIA provides techniques to meet those standards for complex and dynamic content with ARIA APIs such as aria-label that simple HTML can't provide

## Labels with ARIA

- aria-label
- aria-labelledby
- aria-describedby

## Labelledby vs Describedby

- label provides essential information about an object
- description provides additional information that user might need
- screen reader announces label first, description after
- aria-labelledby + id
- aria-describedby + id + visually-hidden css

## Roles, States & Properties

- roles can apply to any elements
- indication to screen readers for how to interact
