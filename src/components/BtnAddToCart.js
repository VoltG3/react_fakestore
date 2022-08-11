import React from 'react'
import { StyledBtnAddToCart } from '../styles/COMPONENT.BtnAddToCart.js'
import { useDispatch } from 'react-redux'

import {
    f_CART_ADD_PRODUCT_TOTAL_COUNT,
    f_CART_REM_PRODUCT_TOTAL_COUNT,
    f_CART_ADD_PRODUCT_ID,
    f_CART_REM_PRODUCT_ID } from '../redux/action.js'

import { strThisProductID } from '../utils/JSON_thisProductID.js'

export default function BtnAddToCart(props) {
    const dispatch = useDispatch()
    const [messageStatus, setMessageStatus] = React.useState("Add")
    const thisProductID = props.thisProductID

    const [item, setItem] = React.useState({
        isActiv : true
    })

    function getProductID() {
        console.log("->", strThisProductID(thisProductID))
    }
    function toggleIsActiv() {
        setItem( prevItem => ({
            ...prevItem,
            isActiv: !prevItem.isActiv
        }));

        if(item.isActiv) {
            setMessageStatus("REMOVE")
            dispatch(f_CART_ADD_PRODUCT_TOTAL_COUNT())
            dispatch(f_CART_ADD_PRODUCT_ID({ thisProductID }))
            getProductID()
        } else {
            setMessageStatus("Add")
            dispatch(f_CART_REM_PRODUCT_TOTAL_COUNT())
            dispatch(f_CART_REM_PRODUCT_ID())
            getProductID()
        }
    }

    return (
        <StyledBtnAddToCart
            onClick={ toggleIsActiv }
            isTrue={ item.isActiv }
        >
            <p>{ messageStatus }</p>
        </StyledBtnAddToCart>
    )
}
