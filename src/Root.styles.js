import { createGlobalStyle } from "styled-components"

export const GlobalRootStyles = createGlobalStyle`
  
  :root {
    --color-primary: #103a43;
    --color-primary-hover: #1f6b7c;
    --color-primary-active: #424206;
    --color-secondary: #4e8693;

    --font-primary: 'Work Sans', sans-serif;
    --font-secondary: 'Brygada 1918', serif;
    --font-accent: 'Edu TAS Beginner', cursive;

    --footer-font-size: 10px;
  }
  
  a { text-decoration: none; }
`
