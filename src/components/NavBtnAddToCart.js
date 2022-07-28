import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

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

export default function NavBtnAddToCart() {
    const dispatch = useDispatch()
    const INCREMENT_PRODUCT_TOTAL_COUNT = () => { dispatch({ type: "INCREMENT_PRODUCT_TOTAL_COUNT" })}
    const DECREMENT_PRODUCT_TOTAL_COUNT = () => { dispatch({ type: "DECREMENT_PRODUCT_TOTAL_COUNT" })}

    const [item, setItem] = React.useState({
        isActiv : true
    })

    function toggleIsActiv() {
        setItem( prevItem => ({
            ...prevItem,
            isActiv: !prevItem.isActiv
        })); item.isActiv
            ? INCREMENT_PRODUCT_TOTAL_COUNT()
            : DECREMENT_PRODUCT_TOTAL_COUNT()
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
