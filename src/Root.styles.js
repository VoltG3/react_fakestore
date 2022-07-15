import { createGlobalStyle } from "styled-components"

export const RootStyles = createGlobalStyle`

  :root {
    --color-primary: #103a43;

    --color-primary-hover: #1f6b7c;

    --background-color-2: lightgray;

    --footer-font-size: 12px;
  }

  a {
    text-decoration: none;
  }

  * {
    font-family: 'Work Sans', sans-serif;
  }
`