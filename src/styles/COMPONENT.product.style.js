import styled from 'styled-components'

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
    max-width: var(--max-width);
        width: 90vw;
  margin: 2em 0 2em 0;
  
  * { margin: 0; }
`

export const StyledProductContainerInner = styled.div`
  display: grid;
  grid-template-columns: 10vw 1fr 1fr 1fr;
  grid-template-rows: repaet(4, 1fr);
  gap: 1em;
    width: 90vw;
  grid-template-areas: 
    "image title title title"
    "image descr descr descr"
    "image stars   .   price"
    "image rates   .   ading";
  
  div:nth-child(1) { grid-area: image; }      // image
  h2:nth-child(2) { grid-area: title; }       // title
  p:nth-child(3) { grid-area: descr; }        // description
  table:nth-child(4) { grid-area: rates; }    // rates table
  p:nth-child(5) { grid-area: price; }        // price
  div:nth-child(6) { grid-area: stars; }      // stars svg
  div:nth-child(7) { grid-area: ading; }      // add to cart
  
  @media only screen and (max-width: 320px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repaet(6, 1fr);
    gap: 1em;
    width: 90vw;
    grid-template-areas: 
      "title title"
      "image stars"
      "image rates"
      "image price"
      "image ading"
      "descr descr";
  }
  
  // image
  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
      width: auto;
      height: auto;
    margin-right: var(--product-img-padding-right); 
    
        img { width: var(--product-img-width);}
        img:hover { transform: scale(1.5); }
  }
  
  // title
  h2:nth-child(2) {
    font-family: var(--font-primary);
    font-size: var(--product-fontsize-title);
    letter-spacing: 1px;
    color: var(--color-secondary);
  }
  
  // description
  p:nth-child(3) {
    font-size: var(--product-fontsize-description);
    text-align: justify;
    text-justify: inter-word;
    letter-spacing: 1px;
    line-height: 23px;
    color: var(--color-secondary);
  }
  
  // rates table
  table:nth-child(4) {
      width: 6vw;
    font-size: var(--product-fontsize-ratingcount);
    color: var(--color-secondary);
  }
  
  // price
  p:nth-child(5) {
    display: flex;
    justify-content: flex-end;
    font-weight: 500;
    font-size: var(--product-fontsize-price);
    font-family: var(--font-accent);
    color: var(--color-secondary);
  }
  
  // stars svg
  div:nth-child(6) {

  }
  
  // add to cart
  div:nth-child(7) {
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    font-family: var(--font-primary);
        width: var(--btn-addToCart-width);
        height: var(--btn-addToCart-height);
    border-radius: 0.8rem;
    
  }
`
