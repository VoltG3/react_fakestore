import { StyledIconContainer } from './NavBtnCartUser.style'
import { ReactComponent as Cart } from './svg/cart.svg'
import { ReactComponent as Login } from './svg/login.svg'
import { Link } from 'react-router-dom'

export default function NavBtnCartUser() {
    return (
        <StyledIconContainer>
            <Link to="/cart">
                <Cart className="iconCart"/>
            </Link>

            <Link to="/login">
                <Login className="iconLogin"/>
            </Link>
        </StyledIconContainer>
    )
}
