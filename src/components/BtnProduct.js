import { StyledBtnProduct } from '../styles/component.BtnProduct.style'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


export default function BtnProduct({ buttonLabel }) {
    const dispatch = useDispatch()

    const TARGET_PRODUCT_CATEGORY_BUTTON = () => {
        dispatch({
            type:"TARGET_PRODUCT_CATEGORY_BUTTON",
            payload: buttonLabel
        })
    }

    return (
        <StyledBtnProduct
            onClick={() => TARGET_PRODUCT_CATEGORY_BUTTON(buttonLabel)}>
            <Link
                style={{color: 'var(--color-primary)'}}
                to="/products">
                    <p style={{margin: '0px'}}>
                        { buttonLabel }
                    </p>
            </Link>
        </StyledBtnProduct>
    )
}
