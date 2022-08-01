import styled from 'styled-components'

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
    max-width: var(--max-width);
        width: 90vw;
  margin: 2em 0 2em 0;
  
  h2, p { margin: 0; }
`

export const StyledProductContainerInner = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto auto auto auto auto;
  gap: 1em;
    "img title title title count"
    "img texts tejs.     .   count"
    "img rates   .   price   .  "
    "img rates   .   price   .  ";
  
  div:nth-child(1) { grid-row: 1 / 5; grid-column: 1 / 1;}  // image
  div:nth-child(2) { grid-row: 1 / 1; grid-column: 2 / 4;}  // title
  div:nth-child(3) { grid-row: 2 / 2; grid-column: 2 / 4;}  // texts
  div:nth-child(4) { grid-row: 4 / 4; grid-column: 2 / 2;}  // rates
  div:nth-child(5) { grid-row: 4 / 4; grid-column: 4 / 4;}  // price
  div:nth-child(6) { grid-row: 3 / 3; grid-column: 2 / 2;}  // stars
  div:nth-child(7) { grid-row: 1 / 3; grid-column: 5 / 5;}  // count
  
  @media only screen and (max-width: 320px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto auto auto;
    gap: 0.5em;
      "title title"
      "img   stars"
      "img   rates"
      "img   rates"
      "texts texts"
      "price price";

    div:nth-child(2) { grid-row: 1 / 1; grid-column: 1 / 3;}  // title
    div:nth-child(1) { grid-row: 2 / 4; grid-column: 1 / 1;}  // image
    div:nth-child(6) { grid-row: 2 / 2; grid-column: 2 / 3;}  // stars
    div:nth-child(4) { grid-row: 3 / 4; grid-column: 2 / 3;}  // rates
    div:nth-child(3) { grid-row: 5 / 5; grid-column: 1 / 3;}  // texts
    div:nth-child(5) { grid-row: 6 / 6; grid-column: 2 / 3;}  // price
    
  }
  
  // image
  div:nth-child(1) {
    display: flex;
    align-items: center;
    padding-right: var(--product-img-padding-right); 
        img { width: var(--product-img-width);}
        img:hover { transform: scale(1.5); }
  }
  
  // title
  div:nth-child(2) {
    h2 {
      font-family: var(--font-primary);
      font-size: var(--product-fontsize-title);
      letter-spacing: 1px;
      color: var(--color-secondary);
    }
  }
  
  //texts
  div:nth-child(3) {
    p {
      font-size: var(--product-fontsize-description);
      letter-spacing: 1px;
      line-height: 23px;
      color: var(--color-secondary);
    }
  }
  
  // rates
  div:nth-child(4) {
    font-size: var(--product-fontsize-ratingcount);
    color: var(--color-secondary);
  }
  
  // price
  div:nth-child(5) {
    font-weight: 500;
    font-size: var(--product-fontsize-price);
    font-family: var(--font-accent);
    color: var(--color-secondary);
  }
  
  // stars
  div:nth-child(6) {
    
  }
  
  // count
  div:nth-child(7) {
    display: flex;
    flex-direction: column;
  }
`
