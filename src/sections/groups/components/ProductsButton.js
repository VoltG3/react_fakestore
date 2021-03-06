import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavigationButton = styled.div`
  font-family: var(--font-primary);
  font-size: var(--nav-product-btn-font-size);
  height: var(--nav-product-btn-height);
  
  *:hover {
    transition: 0.25s all ease-in-out;
    cursor: pointer;
    color: var(--color-primary-hover);
  }

  *:active {
    color: var(--color-primary-active)
  }
`

export default function ProductsButton({buttonLabel}) {
    return (
        <StyledNavigationButton>
            <Link
                style={{color: 'var(--color-primary)'}}
                to="/products">
                    <p style={{margin: '0px'}}>
                        { buttonLabel }
                    </p>
            </Link>
        </StyledNavigationButton>
    )
}
