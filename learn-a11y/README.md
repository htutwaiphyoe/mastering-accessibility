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
