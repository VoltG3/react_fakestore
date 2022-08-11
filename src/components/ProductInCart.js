import styled from "styled-components"
import React from 'react'
import BtnThisProductCount from './BtnThisProductCount.js'

const StyledProductInCart = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    border: solid 1px black;

  img {
    width: 100px;
    height: 100px;
  }
`

const StyledProductInCartInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  
  p {
    padding: 0 20px 0 20px;
  }
`

export default function ProductInCart(props) {

    return (
        <StyledProductInCart>
            <img src={ props.image } alt={"img"} />

            <StyledProductInCartInner>
                <p>{ props.title }</p>
                <p>Price: { props.price }</p>
            </StyledProductInCartInner>

            <BtnThisProductCount />
        </StyledProductInCart>
    )
}
