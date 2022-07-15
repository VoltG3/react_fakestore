import styled from "styled-components"

const StyledNavigationButton = styled.div`
  font-weight: 400;
  font-size: 14px;
  
  &:hover {
    transition: 0.25s all ease-in-out;
    cursor: pointer;
    color: var(--color-primary-hover);
  }
`

export default function NavigationButton({buttonLabel}) {
    return (
        <StyledNavigationButton>
            { buttonLabel }
        </StyledNavigationButton>
    )
}