import React from 'react'
import {
    StyledProductContainer,
    StyledProductContainerInner } from '../styles/component.product.style.js'

import StarRating from 'react-svg-star-rating'
import BtnAddToCart from './BtnAddToCart.js'

export default function Product(props) {

const RatingStars = () => {

    return (
        <StarRating
            isReadOnly
            roundedCorner="false"
            size="30"
            unit="float"
            initialRating={props.rate}
        />
    )
}

    return (
        <StyledProductContainer>
            <StyledProductContainerInner>
                <div>
                    <img src={ props.image } alt={"img"} />
                </div>

                <div>
                    <h2>{ props.title }</h2>
                </div>

                <div>
                    <p>{ props.description }</p>
                </div>

                <div>
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
                </div>

                <div>
                    <p>Price: { props.price }</p>
                </div>

                <div>
                    <RatingStars />
                </div>

                {/*<NavBtnCounter />*/}

                <div>
                    <BtnAddToCart thisProductID={ props.productID }/>
                </div>

            </StyledProductContainerInner>
        </StyledProductContainer>
    )
}
