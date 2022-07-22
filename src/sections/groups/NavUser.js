import styled from 'styled-components'
import {ReactComponent as Cart} from './components/svg/cart.svg'
import {ReactComponent as Login} from './components/svg/login.svg'
import {Link} from 'react-router-dom'

const StyledSvg = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  
  *:hover {
    cursor: pointer;
  }
`

export default function NavUser() {
    return (
        <StyledSvg>
            <Link to="/cart">
                <Cart
                    width="var(--user-icon-cart-width)"
                    height="var(--user-icon-cart-height)"
                    fill="var(--user-icon-color)"
                />
            </Link>

            <Link to="/login">
                <Login
                    width="var(--user-icon-login-width)"
                    height="var(--user-icon-login-height)"
                    fill="var(--user-icon-color)"
                />
            </Link>
        </StyledSvg>
    )
}
