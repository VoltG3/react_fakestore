import React from 'react'
import {
    StyledProductContainer,
    StyledProductContainerInner } from '../styles/COMPONENT.product.style.js'

import StarRating from 'react-svg-star-rating'
import BtnAddToCart from './BtnAddToCart.js'

export default function Product(props) {

const RatingStars = () => {

    return (
        <StarRating
            isReadOnly
            roundedCorner="false"
            size="20"
            unit="float"
            initialRating={ props.rate }
        />
    )
}

    return (
        <StyledProductContainer>
            <StyledProductContainerInner>
                <div>
                    <img src={ props.image } alt={"img"} />
                </div>

                <h2>{ props.title }</h2>
                <p>{ props.description }</p>

                <table>
                    <tbody>
                        <tr>
                            <td>Rating:</td>
                            <td>{ props.rate }</td>
                        </tr>
                        <tr>
                            <td>Count:</td>
                            <td>{ props.count }</td>
                        </tr>
                    </tbody>
                </table>

                <p>Price: { props.price }</p>
                <RatingStars />
                <BtnAddToCart thisProductID={ props.productID }/>
            </StyledProductContainerInner>
        </StyledProductContainer>
    )
}
