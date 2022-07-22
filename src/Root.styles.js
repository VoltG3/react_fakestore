import { createGlobalStyle } from "styled-components"

export const GlobalRootStyles = createGlobalStyle`
  :root {
    --color-default: white;
    --color-primary: #103a43;
    --color-primary-hover: #1f6b7c;
    --color-primary-active: #424206;
    --color-secondary: #4e8693;
    
    --font-primary: 'Work Sans', sans-serif;
    --font-secondary: 'Brygada 1918', serif;
    --font-accent: 'Edu TAS Beginner', cursive;

    --max-width: 1440px;
    
    --user-icon-cart-width: 25pt;
    --user-icon-cart-height: var(--user-icon-cart-width);
    --user-icon-login-width: 17pt;
    --user-icon-login-height: var(--user-icon-cart-width);
    --user-icon-color: var(--color-primary);
    
    --logo-font-size: 40px;
    --color-logo: var(--color-primary);
    
    --nav-product-direction: row;
    --nav-product-btn-font-size: 16px;
    --nav-product-btn-height: auto;
    
    --padding-top: 25vh;
    
    --product-img-width: 10vw;
    --product-img-padding-right: 3em;
    --product-fontsize-title: 20px;
    --product-fontsize-description: 18px;
    --product-fontsize-ratingcount: 16px;
    --product-fontsize-price: 28px;
    
    --footer-font-size: 10px;
  }
  
  a { text-decoration: none; }

  .desktop { display: block; }
  .mobile { display: none; }
  
  @media only screen and (max-width: 320px) {
    :root {
      
      --max-width: 270px;

      --user-icon-cart-width: 16pt;
      --user-icon-login-width: 9pt;
      --user-icon-color: var(--color-default);

      --first-header-height: 4vh;
      
      --logo-font-size: 25px;
      --color-logo: var(--color-primary);

      --nav-product-direction: column;
      --nav-product-btn-font-size: 24px;
      --nav-product-btn-height: 30px;
      
      --padding-top: 5vh;
      
      --product-img-width: 30vw;
      --product-img-padding-right: 0em;
      --product-fontsize-title: 16px;
      --product-fontsize-description: 12px;
      --product-fontsize-ratingcount: 12px;
      --product-fontsize-price: 18px;
    }
    
    .desktop { display: none; }
    .mobile { display: block; }
  }
`
