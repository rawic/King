import simplebar from 'simplebar/dist/simplebar.min.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle` 
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
    background-color: hsl(195, 29.1%, 94.5%);
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    font-variant-ligatures: no-common-ligatures;
    line-height: 1.5;
    min-height: 100vh;
    
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul,
  ol[class] {
    list-style: none;
    padding-left: 0;
  }

  /* A elements that don't have a class get default styles */
  a {
    text-decoration: none;
  }
  
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    display: block;
    max-width: 100%;
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
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }

  #root {
    padding: 100px 160px;
  }

  .app-container {
    background-color: hsl(0, 0%, 97.3%);
    border-radius: 12px;
    box-shadow: 0px 0px 73px rgba(0, 0, 0, 0.02);
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 1600px;
    overflow: hidden;
  }

  ${simplebar}
`

export default GlobalStyle
// not just a css import via @import. it's been compiled with webpack
