import { StyledIconContainer, StyledIconTotalCount } from './NavBtnCartAndUser.style'
import { ReactComponent as Cart } from './svg/cart.svg'
import { ReactComponent as Login } from './svg/login.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function NavBtnCartAndUser() {
    const DISPLAY_PRODUCT_TOTAL_COUNT = useSelector(state => state.productsTotalCount)

    return (
        <StyledIconContainer>
            <StyledIconTotalCount>
                <p>{ DISPLAY_PRODUCT_TOTAL_COUNT }</p>
            </StyledIconTotalCount>

            <Link to="/cart">
                <Cart className="iconCart"/>
            </Link>

            <Link to="/login">
                <Login className="iconLogin"/>
            </Link>
        </StyledIconContainer>
    )
}
