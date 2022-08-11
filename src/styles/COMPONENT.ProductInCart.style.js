import styled from 'styled-components'

export const StyledProductInCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
      min-width: 500px;
      max-width: 500px;
          width: 500px;
    padding: 20px;
    margin-bottom: 5px;
    border: solid 1px black;

  img {
    width: 100px;
    height: auto;
  }
  
  div:nth-child(3) {
    display: flex;
    flex-direction: column;
  }
`

export const StyledProductInCartInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  
  p {
    padding: 0 20px 0 20px;
  }
`