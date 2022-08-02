import styled from "styled-components";

export const StyledBtnProduct = styled.div`
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
