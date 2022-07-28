import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const StyledProductCounter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 40px;
      width: 40px;
      height: 40px;
    background-color: aliceblue;
    cursor: pointer;
`

export default function NavBtnCounter() {
    const dispatch = useDispatch()

    const PRODUCTS_COUNT = useSelector(
        state => state.countOfProduct
    )

    const INCREMENT_PRODUCT_COUNT = () => {
        dispatch({
            type: "INCREMENT_PRODUCT_COUNT"
        })
    }

    const DECREMENT_PRODUCT_COUNT = () => {
        if(PRODUCTS_COUNT === 0 || PRODUCTS_COUNT === 1) {
           dispatch({
               type: "NULL_PRODUCT_COUNT"
           })
        } else {
            dispatch({
                type: "DECREMENT_PRODUCT_COUNT"
            })
        }
    }

    return(
        <div>
            <StyledProductCounter style={{display: 'none'}}/>

            <StyledProductCounter
                onClick={() => INCREMENT_PRODUCT_COUNT()}
            >+</StyledProductCounter>

            <StyledProductCounter>{PRODUCTS_COUNT}</StyledProductCounter>

            <StyledProductCounter
                onClick={()=> DECREMENT_PRODUCT_COUNT()}
            >-</StyledProductCounter>
        </div>
    )
}