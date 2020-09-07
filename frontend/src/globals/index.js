import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`


  *, *:before, *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  ul, li {
    list-style: none;
  }
  li {
    cursor: pointer;
  }
  html {
    font-size: 62.5%;
    font-family: 'Poppins';
  }
  body {
    font-size: 1.6rem;
  }
  button {
    border-color: transparent;
  }
  :root {
    --gray: #231f20;
    --focus-btn-border:#cccccc;
    --hr: #0000001a;
    --input-bg: #f2f2f2;
    --input-focus-border:#1e86c6ca;
    --opacity-text: #333;
    --color-footer-list-items:#000000b3;
    --color-note-signup:#000000CC;
    --label:#000000E6;
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Arimo', sans-serif;
    --font-tertiary: 'Source Sans Pro', 'Lucida Grande', sans-serif;
    --font-four: "Fira Mono", "Andale Mono", "Consolas", monospace;
    --btn-sign-up-bg:#c12127;
    --border-btn-sign-up: #fa8717;
    --btn-learn-about-bg:#e81aa8;
    --border-btn-learn-about: #b30ad2;
  }
`
