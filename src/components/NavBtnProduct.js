import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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

window.ButtonTargetCategory = ""
export default function NavBtnProduct({buttonLabel}) {
    const dispatch = useDispatch()

    const TARGET_PRODUCT_CATEGORY_BUTTON = () => {
        dispatch({
            type:"TARGET_PRODUCT_CATEGORY_BUTTON",
            payload: buttonLabel
        })
    }

    return (
        <StyledNavigationButton
            onClick={() => TARGET_PRODUCT_CATEGORY_BUTTON(buttonLabel)}>
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
