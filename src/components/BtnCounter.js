import { StyledProductCounter } from '../styles/component.BtnCounter.style.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function BtnCounter() {
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