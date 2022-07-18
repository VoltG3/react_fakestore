import styled from "styled-components";

export const StyledNavigationButton = styled.div`
  font-family: var(--font-primary);
  
  &:hover {
    transition: 0.25s all ease-in-out;
    cursor: pointer;
    color: var(--color-primary-hover);
  }

  &:active {
    color: var(--color-primary-active)
  }
`