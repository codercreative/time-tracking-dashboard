# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Design preview for the Time tracking dashboard coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Centering the container in the middle of the browser window:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

User overflow hidden to make sure that the top of the activity icons are cut off:

```css
.icon-card {
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
}
```

Stacking the info-cards on top of the colored backgrounds:

```css
.card-wrapper {
  position: relative; /*relative here */
  margin-bottom: 30px;
}

.icon-card {
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  height: 160px;
  z-index: 1; /*insert z-index */
}

.info-card {
  background-color: var(--dark-blue);
  height: 160px;
  width: 78px;
  position: absolute; /*absolute here */
  top: 30px; /*make colored top show in the bg */
  z-index: 2; /*insert z-index */
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [CSS Grid Cheat Sheet](https://htmlcheatsheet.com/css/)

## Author

- Frontend Mentor - [@codercreative](https://www.frontendmentor.io/profile/codercreative)
