import { createGlobalStyle } from "styled-components"

export const GlobalRootStyles = createGlobalStyle`

  :root {
    --color-default: white;
    --color-primary: #103a43;
    --color-primary-hover: #1f6b7c;
    --color-primary-active: #424206;
    --color-secondary: #4e8693;
    --color-accent: #f8f8c1;
        
        //
        --color-accent-hover: #f6f666;
        --color-accent-active: #989803;

    --font-primary: 'Work Sans', sans-serif;
    --font-secondary: 'Brygada 1918', serif;
    --font-accent: 'Edu TAS Beginner', cursive;

    --max-width: 1440px;

    --logo-font-size: 40px;
    --color-logo: var(--color-primary);

    --nav-product-direction: row;
    --nav-product-btn-font-size: 16px;
    --nav-product-btn-height: auto;

    --btn-addToCart-width: 15vw;
    --btn-addToCart-height: 4vw;
    
    --padding-top: 25vh;

    --product-img-width: 10vw;
    --product-img-padding-right: 3em;
    --product-fontsize-title: 20px;
    --product-fontsize-description: 18px;
    --product-fontsize-ratingcount: 16px;
    --product-fontsize-price: 28px;

    --footer-font-size: 10px;
  }

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 320px) {
    :root {

      --max-width: 270px;

      --first-header-height: 4vh;

      --logo-font-size: 25px;
      --color-logo: var(--color-primary);

      --nav-product-direction: column;
      --nav-product-btn-font-size: 24px;
      --nav-product-btn-height: 30px;

      --btn-addToCart-width: 100%;
      --btn-addToCart-height: 25px;
      
      --padding-top: 5vh;

      --product-img-width: 30vw;
      --product-img-padding-right: 0em;
      --product-fontsize-title: 16px;
      --product-fontsize-description: 12px;
      --product-fontsize-ratingcount: 12px;
      --product-fontsize-price: 18px;
    }
  }
`
