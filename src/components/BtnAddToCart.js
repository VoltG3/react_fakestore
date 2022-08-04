import React from 'react'
import { StyledBtnAddToCart } from '../styles/component.BtnAddToCart.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// import { CART_ADD_PRODUCT_TOTAL_COUNT } from '../actionTypes.js'

export default function BtnAddToCart(props) {
    const dispatch = useDispatch()

    const CART_ADD_PRODUCT_TOTAL_COUNT = () => {
        dispatch({
            type: "CART_ADD_PRODUCT_TOTAL_COUNT"
        })
    }

    const CART_REM_PRODUCT_TOTAL_COUNT = () => {
        dispatch({
            type: "CART_REM_PRODUCT_TOTAL_COUNT"
        })
    }

    const CART_ADD_PRODUCT_ID = () => {
        dispatch({
            type: "CART_ADD_PRODUCT_ID",
            payload: { thisProductID }
        })
    }

    const CART_REM_PRODUCT_ID = () => {
        dispatch({
            type: "CART_REM_PRODUCT_ID",
            payload: { thisProductID }
        })
    }

    /**
     *
     * @type {[]|*[]|*}
     */

    const [messageStatus, setMessageStatus] = React.useState("Add")
    const thisProductID = props.thisProductID

    const t = useSelector(state => state.choisedProductsIdsArray)
    console.log("arr", t)

    const [item, setItem] = React.useState({
        isActiv : true
    })

    console.log("-----")
    const x = props.thisProductID
    console.log(x)

    function toggleIsActiv() {
        setItem( prevItem => ({
            ...prevItem,
            isActiv: !prevItem.isActiv
        }));

        if(item.isActiv) {
            setMessageStatus("Remove")
            CART_ADD_PRODUCT_TOTAL_COUNT()
            CART_ADD_PRODUCT_ID()
        } else {
            setMessageStatus("Add")
            CART_REM_PRODUCT_TOTAL_COUNT()
            CART_REM_PRODUCT_ID()
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
