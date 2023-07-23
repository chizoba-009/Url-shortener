# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](<./images/Shortly-URL-shortening-API-Challenge%20(1).png>)

### Links

- Live Site URL: [Live site](https://url-shortener-by-xoba.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned how to make text copied directly to the clipboard with just a click.

I learned about the intersection observer and how it is used to make anmations on scroll.

```js
function copyText() {
  var text = document.querySelector('.short-url').innerHTML
  navigator.clipboard.writeText(text).then(
    function () {
      log('Async: Copying to clipboard was successful!')
    },
    function (err) {
      error('Async: Could not copy text: ', err)
    }
  )
}
```

### Continued development

I'm currently taking on more advanced challenges to build my skills and portfolio.

## Author

- Frontend Mentor - [@chizoba-009](https://www.frontendmentor.io/profile/chizoba-009)
- Twitter - [@chizoba-009](https://www.twitter.com/xoba_codes)
