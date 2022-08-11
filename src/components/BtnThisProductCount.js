import { StyledProductCounter } from '../styles/COMPONENT.BtnThisProductCount.style.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function BtnThisProductCount() {
    const dispatch = useDispatch()

    const PRODUCTS_COUNT = useSelector(
        state => state.countOfProduct
    )

    const ADD_THIS_PRODUCT_COUNT = () => {
        dispatch({
            type: "ADD_THIS_PRODUCT_COUNT"
        })
    }

    const REM_THIS_PRODUCT_COUNT = () => {
        if(PRODUCTS_COUNT === 0 || PRODUCTS_COUNT === 1) {
           dispatch({
               type: "NULL_THIS_PRODUCT_COUNT"
           })
        } else {
            dispatch({
                type: "REM_THIS_PRODUCT_COUNT"
            })
        }
    }

    return(
        <div>
            <StyledProductCounter />

            <StyledProductCounter
                onClick={() => ADD_THIS_PRODUCT_COUNT()}
            >+</StyledProductCounter>

            <StyledProductCounter>{PRODUCTS_COUNT}</StyledProductCounter>

            <StyledProductCounter
                onClick={()=> REM_THIS_PRODUCT_COUNT()}
            >-</StyledProductCounter>
        </div>
    )
}
