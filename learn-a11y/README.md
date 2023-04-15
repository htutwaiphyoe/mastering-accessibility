# Learn a11y

Course from Frontend masters

## 01. Introduction

Website [learn-a11y.netlify.com](https://learn-a11y.netlify.app/)!
Github [https://github.com/jkup/learn-a11y](https://github.com/jkup/learn-a11y)

Performance + Accessibility

## 02. What is accessibility

Web accessibility => people with disabilities can use the Web

Web performance => making smaller and faster web for slower internet and slower devices

Internationalization => making web translation into native languages

UI design => making web intuitive, easy to use and understand for all kind of users

Types of disabilities

1. Mobility and physical
2. Cognitive and neurological
3. Visual
4. Hearing

Web by itself is extremely accessible.

HTML is fairly accessible but after adding CSS and JS makes inaccessible. The main reason is to get accessibility back

Reasons developers should learn accessibility

1. It's fun!
2. We're the ones making it inaccessible
3. Human Rights
4. Legal Issue
5. Reach a larger audience
6. Impactful
7. Makes you a specialist

## 03. Ways people use the web

keyboard only => is the website accessible keyboard only?

head wand => less keystroke to do something

mouse stick => popular with tablet

single switch => one button for virtual keyboard

screen reader => nonvisual way of interacting the web, audio format for every content

there is no api to detect whether user is using with screen reader or assistant technology or not

## 04. Curb Cut Effect

The Curb-Cut Effect, in its essence, asserts that an investment in one group can cascade out and up and be a substantial investment in the broader well-being of a nation -- one whose policies and practices create an equitable economy, a healthy community of opportunity, and just society.

design consideration for disabled people, building with accessibility in mind and accessibility testing

For SEO and accessibility, semantic html is essential but for image ALT text is different. For SEO, keyword for ranking due to crawler and For accessibility, descriptive text

## 05. Accessibility standards

Web Content Accessibility Guidelines (WCAG) => specification of Accessibility
WCAG specifies three different conformance levels they are:
A (lowest)
AA (mid range)
and AAA (highest)

Level A sets a minimum level of accessibility and does not achieve broad accessibility for many situations. For this reason, UC (University of California) recommends AA conformance for all Web-based information.

[https://www.w3.org/WAI/standards-guidelines/wcag/](https://www.w3.org/WAI/standards-guidelines/wcag/)
[https://www.w3.org/WAI/WCAG21/Understanding/conformance#levels](https://www.w3.org/WAI/WCAG21/Understanding/conformance#levels)

WebAIM [https://webaim.org/](https://webaim.org/)
WebAIM provides a handy checklist with their recommendations.

[https://webaim.org/standards/wcag/checklist](https://webaim.org/standards/wcag/checklist)

WebAIM specifies that accessible websites should be:

Perceivable
Operable
Understandable
Robust

aria => Accessible Rich Internet Application, helper attributes for accessibility in html tag, default html has limitation for accessibility

## 06. Screen Readers

Screen readers convert digital text into synthesized speech. They empower users to hear content and navigate with the keyboard. The technology helps people who are blind or who have low vision to use information technology with the same level of independence and privacy as anyone else.

What all they let you do
Read all content
Display a list of links
Display a list of headings

There are different kind of screen readers for different platforms. But most of the accessibility are work well with all of them. There can be old version of screen reader problems. There is no screen reader specifications depends on company

Mac has built-in screen reader

Voiceover for Mac
How to enable VoiceOver for Mac

System Preferences
Accessibility
VoiceOver
Enable VoiceOver
cmd + f5

## 07. Alternative Text & Captions

by default, screen reader image => read file name if there is no alt text

the problem is file names are not meaningful.

by adding alt text, screen readers will read alt text instead of file name

to skip reading file, set alt attribute to empty

alt text is useful for SEO to rank the website with keyword but it is bad accessibility experience. should be meaningful name for image

captioning service must be added to video or audio content for accessibility

## 08. Screen Reader Exercise

dynamic alt text for user uploaded image with machine learning or custom alt text for uploaded image

screen reader skips css background images

## 09. Screen Reader Solution

[https://learn-a11y.netlify.app/exercises/1.html](https://learn-a11y.netlify.app/exercises/1.html)

labeled form fields are essential for accessibility

## 10. Accessible HTML

[https://learn-a11y.netlify.app/accessible-html/index.html](https://learn-a11y.netlify.app/accessible-html/index.html)

use semantic elements in HTML

div soup means using div for all elements

Some elements have semantic meaning but no special functionality. Examples are:

```html
<aside>
<footer>
<header>
```

good for SEO score, website health score

Other's provide a lot of built-in functionality such as:

```html
<button>
<input>
<textarea>
```

nested headings are good for accessibility, option + control + U

css classes won't affect accessibility

## 11. Accessible Form Field Labels

label (for) + input (id)

if the input is a child of the label, for is not required.

The label tag can only works with "labelable" elements. Those include:

```html
<button>
<input>
<keygen>
<meter>
<output>
<progress>
<select>
<textarea>
```

for other elements, use aria-label

label can be visually hidden

aria-label will be read by screen reader when element is focus.

provide keyboard shortcut with key binding for screen readers

## 12. Buttons

tabindex is to be focus with tab

Power of semantic elements and flexibility functionality to any element with aria (eg. div)

```html
<button onclick="alert('hello')">Click me!</button>

<div aria-label="Alert the word hello" tabindex="0" role="button" onclick="alert('hello')" onkeyup="alert('hello')">Click me!</div>
```

## 13. Accessibility Problems Exercise

[https://learn-a11y.netlify.app/exercises/2.html](https://learn-a11y.netlify.app/exercises/2.html)

## 14. Accessibility Problems Solution

aria-label for no content link

button is for interactivity on the page

link is for going different page

## 15. ARIA

[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

[https://www.w3.org/TR/html-aria/#aria-table](https://www.w3.org/TR/html-aria/#aria-table)

Earlier, we learned about the <label> tag in HTML and how it can be used to label certain form elements.

The ARIA spec provides us with great tools for labelling and describing any element we want. They are:

aria-label => inline
aria-labelledby => separate label that combine with id
aria-describedby

A label provides essential information about an object, while a description provides extended information that the user might need.

multiple labels read by FIFO

Roles, States and Properties
ARIA also provides roles which can be applied to any element. Examples include:

button
checkbox
tree
banner
aria-autocomplete
aria-haspopup

role => element type
state => element state like checked
properties => element properties like placeholder

[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

aria can be selected by css selectors

```css
.dropdown[aria-expanded="false"] .icon::after {
    content: '▶';
}
.dropdown[aria-expanded="true"] .icon::after {
    content: '▼';
}     
```

## 16. Live Regions & ARIA Exercise

Live Regions
Applications can become very dynamic. For cases where important information could be coming in at any time, the ARIA spec provides the ability to mark an element as containing live data so that screen readers can read out updates as they come.

Think of using the Uber app to hail a ride. At first your status will be "waiting for a ride" but at an undetermined time it will change to "drive en route". For this we could:

```html
<div aria-live="assertive">Waiting for a ride</div>
```

Then, all we have to do is update the content of that div and any assistive technology will let the user know.

The value in aria-live is a politeness setting.

assertive - will interrupt whatever it's doing to announce.
polite - will announce the live region update when it next idles.
off - will not read the update.

## 17. ARIA Solution

[https://learn-a11y.netlify.app/exercises/3.html](https://learn-a11y.netlify.app/exercises/3.html)

aria-live re-announces every content in the element is changed, so scope need to be as narrow as possible

## 18. Focus Management

Keyboard only users

As users navigate around using only the keyboard, focus rings provide a necessary clue as to the currently active item.

Keyboard Shortcuts

Keyboard shortcuts are another curb cut example. Sites like Twitter and Facebook offer keyboard shortcuts for almost any action which are great for both keyboard only users and and power users!

handle with JS for key binding and make key stroke as less as possible

## 19. Skip Links

[https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)

Skip links help users skip over large headers and navigation and jump right into the "main" content of your site. When a user hits tab for the first time, a button will appear and offer users to jump right to the main section.

How to make a skip link
Create an anchor with the body "Skip to content"
Prepend it to the body of your website
Make it visually hidden
Give it a focus state which makes it visible
href + id of main content

## 20. Focus Management Q&A

sound for notification, lighthouse accessibility, accessibility eslint plugin

## 21. Tab Navigation

You can use the tab key to navigate to the next tabbable item and shift + tab to navigate to the previous item.

```html
Tabbable elements include:
<a>
<button>
<input>
<select>
<textarea>
<iframe>
```

[https://github.com/jkup/focusable](https://github.com/jkup/focusable)

Making an element tabbable

You can add the tabindex attribute to any element like this:

```html
<div tabindex="0">I'm focusable</div>
```

Tabindex values
a negative value means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
0 means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
a positive value means should be focusable and reachable via sequential keyboard navigation; its relative order is defined by the value of the attribute: the sequential follow the increasing number of the tabindex. If several elements share the same tabindex, their relative order follows their relative position in the document.

top level element must be tabble and children are with arrow keys.

most of the design systems are accessible out of the box.

## 22. Active Element & Tab Trapping

Active Element
Sometimes, especially on single page applications, it's helpful to store the currently focused element before a page transition so you can return to it later.

Tab trapping
Another useful concept is tab trapping. Consider opening a modal on a page which contains a form. A keyboard only user will want to tab around the form but unless we help, tabbing while focused on the last form element will send us all the way back to the main document.

grab first and last focus element and loop through them

## 23. Skip Link Exercise

[https://learn-a11y.netlify.app/exercises/4.html](https://learn-a11y.netlify.app/exercises/4.html)

## 24. Skip Link Solution

make anchor visible when focus-visible

## 25. Color Contrast & Visual Impairments

Color Contrast
WebAIM
To check color contrast online, use the WebAIM contrast checker.

[https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)

this tool shows where it depends on the size, it depends on the surroundings, and it depends on how compliant you're trying to be.

Chrome DevTools
Did you know the Chrome DevTools come with a built-in accessibility color checker?

it requires to have a parent element with a background and a child element with a color. a body tag with both background and color, it won't be able to pick up on those.

check color picker in dev tool

Colors and forms
An important consideration for colorblind users is making sure that color isn't the only way users can tell if there is an error with the form. For example, a red ring is not enough. Consider adding an icon or an error label.

Visual Impairments
To simulate a number of visual impairments on any website, check out NoCoffee for Firefox [https://addons.mozilla.org/en-US/firefox/addon/nocoffee/](https://addons.mozilla.org/en-US/firefox/addon/nocoffee/)

UI design and layout are essential for visual impairments. big font size, color contrast and putting things together

Proximity of notifications from what you're doing
Helps neurological and also low vision (another curb cut example)

## 26. Set Language & Fixing Markup

Setting the language
Remember to set the lang attribute both on the top level html tag as well as any sections where the language deviates from it.

Fix markup errors
Although it won't always have a user facing effect, it is recommended that you find and fix and validation or parsing errors in your HTML.

use [validator.w3.org.](validator.w3.org.) to check markup

## 27. Prefers Reduced Motion

Neurocognitive

start with prefers and what they're doing is they're giving you access to specific system information

Prefers Reduced Motion
Users can set a "prefers reduced motion" setting in their operating system (Windows, Mac, Linux) and we can read that setting in CSS and swap out animations with more subtle effects.

This is important both as a preference and also to avoid causing issues for users who may suffer from seizures.

```html
<style>
    .animation {
        animation: pulse 1s linear infinite both;
    }
    @media (prefers-reduced-motion) {
        .animation {
            animation-name: dissolve;
        }
    }
</style>
<div class="animation">animated box</div>
```

## 28. Prefers Color Scheme & Visuals Exercise

Prefers Color Scheme
Another amazing API is one that allows us to detect if the user prefers a "light" or "dark" colorscheme.

```html
<style>
    @media (prefers-color-scheme: dark) {
        .wrapper {
            background: black;
        }
    }

    @media (prefers-color-scheme: light) {
        .wrapper {
            background: white;
        }
    }
</style>
<div class="wrapper">
            ...
</div>
```

it can be accessed by JS. [https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)

## 29. Visuals Solution

[https://learn-a11y.netlify.app/exercises/5.html](https://learn-a11y.netlify.app/exercises/5.html)

## 30. Accessibility Linters & Dev Tools

Tooling
Linters
[https://www.npmjs.com/package/eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
Angular Codelyzer
eslint-plugin-vuejs-accessibility
Accessible Design Systems
Adobe's React Spectrum
Google's Material Design
Accessibility Developer Tools
Deque's axe DevTools
Google's Lighthouse

grabbing accessibility component only from design system
lighthouse can be integrated in CI/CD.

## 31. Additional Resources

[https://accessibility.day/](https://accessibility.day/)
[https://egghead.io/courses/accessibility-tips-tricks-49286904](https://egghead.io/courses/accessibility-tips-tricks-49286904)

## 32. Wrapping Up

add aria-label in icon button

color contrast, semantic html, proper heading order, ads can mess up site accessibility
