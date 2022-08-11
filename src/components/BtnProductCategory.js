import { StyledBtnProduct } from '../styles/COMPONENT.BtnProduct.style'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { f_TARGET_PRODUCT_CATEGORY_BUTTON } from '../redux/action.js'

export default function BtnProductCategory({ buttonLabel }) {
    const dispatch = useDispatch()

    return (
        <StyledBtnProduct
            onClick={() =>
                dispatch(f_TARGET_PRODUCT_CATEGORY_BUTTON( buttonLabel ))
        }>
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
