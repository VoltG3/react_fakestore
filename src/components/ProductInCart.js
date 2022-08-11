import React from 'react'
import {
    StyledProductInCart,
    StyledProductInCartInner } from '../styles/COMPONENT.ProductInCart.style'

import { useSelector } from 'react-redux'
import BtnThisProductCount from './BtnThisProductCount.js'

export default function ProductInCart(props) {
    const totalItemPrice = useSelector(state => state.countOfProduct)

    return (
        <StyledProductInCart>
            <img src={ props.image } alt={"img"} />

            <StyledProductInCartInner>
                <p>{ props.title }</p>
                <p>Price: { props.price }</p>
                <p>Total: { totalItemPrice * props.price}</p>
            </StyledProductInCartInner>

            <BtnThisProductCount />
        </StyledProductInCart>
    )
}
