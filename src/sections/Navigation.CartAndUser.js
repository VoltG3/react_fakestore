import { StyledIconContainer, StyledIconTotalCount } from '../styles/NAVIGATION.BtnCartAndUser.style'
import { ReactComponent as Cart } from '../components/svg/cart.svg'
import { ReactComponent as Login } from '../components/svg/login.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function NavigationCartAndUser(props) {
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

            <Link to="/temp">
                <p style={{color: `blue`}}>T</p>
            </Link>
        </StyledIconContainer>
    )
}
