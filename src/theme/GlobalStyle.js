import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle` 
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&display=swap');

  *, *::before, &::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
    font-variant-ligatures: no-common-ligatures;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  /* Blur images when they have no alt attribute */
  img:not([alt]) {
    filter: blur(10px);
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export default GlobalStyle
// not just a css import via @import. it's been compiled with webpack
