import styled from "styled-components";

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
    max-width: 1440px;
        width: 90vw;
  margin: 2em 0 2em 0;
  
  h2, p { margin: 0; }
`

export const StyledProductContainerInner = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto auto;
  gap: 1em;
    "img title title title"
    "img texts texts texts"
    "img stars   .     .  "
    "img rates   .   price"
    "img rates   .   price";
  
  div:nth-child(1) { grid-row: 1 / 5; grid-column: 1 / 1;}  // image
  div:nth-child(2) { grid-row: 1 / 1; grid-column: 2 / 5;}  // title
  div:nth-child(3) { grid-row: 2 / 2; grid-column: 2 / 5;}  // texts
  div:nth-child(4) { grid-row: 4 / 5; grid-column: 2 / 2;}  // rates
  div:nth-child(5) { grid-row: 4 / 5; grid-column: 4 / 4;}  // price
  div:nth-child(6) { grid-row: 3 / 3; grid-column: 2 / 2;}  // stars
  
  // image
  div:nth-child(1) {
    display: flex;
    align-items: center;
    padding-right: 3em;
        img { width: 10vw;}
        img:hover { transform: scale(1.5); }
  }
  
  // title
  div:nth-child(2) {
    h2 {
      font-family: var(--font-secondary);
      color: var(--color-secondary);
    }
  }
  
  //texts
  div:nth-child(3) {
    p {
      letter-spacing: 1px;
      line-height: 23px;
      color: var(--color-secondary);
    }
  }
  
  // rates
  div:nth-child(4) {
    color: var(--color-secondary);
  }
  
  // price
  div:nth-child(5) {
    font-weight: 500;
    font-size: 28px;
    font-family: var(--font-accent);
    color: var(--color-secondary);
  }
`



