import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const StyledButtonAddToCart = styled.div`
  background-color: ${({isTrue}) => {
    if (isTrue === false)  return 'green;'
    else return 'lightgrey;'
  }}
  
  color:  ${({isTrue}) => {
    if (isTrue === false)  return 'white;'
    else return 'black;'
  }}
`

export default function NavBtnAddToCart(props) {

    const thisProductID = props.thisProductID

    const dispatch = useDispatch()
    const INCREMENT_PRODUCT_TOTAL_COUNT = () => { dispatch({ type: "INCREMENT_PRODUCT_TOTAL_COUNT" })}
    const DECREMENT_PRODUCT_TOTAL_COUNT = () => { dispatch({ type: "DECREMENT_PRODUCT_TOTAL_COUNT" })}

    const INCREMENT_CHOISED_PRODUCTS_IDS = () => { dispatch({
        type: "INCREMENT_CHOISED_PRODUCTS_IDS",
        payload: { thisProductID } })}

    const DECREMENT_CHOISED_PRODUCTS_IDS = () => { dispatch({
        type: "DECREMENT_CHOISED_PRODUCTS_IDS",
        payload: { thisProductID } })}

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
            INCREMENT_PRODUCT_TOTAL_COUNT()
            INCREMENT_CHOISED_PRODUCTS_IDS()
        } else {
            DECREMENT_PRODUCT_TOTAL_COUNT()
            DECREMENT_CHOISED_PRODUCTS_IDS()
        }
    }

    return (
        <StyledButtonAddToCart
            onClick={ toggleIsActiv }
            isTrue={ item.isActiv }
        >
            <p>Add to Cart</p>
        </StyledButtonAddToCart>
    )
}
