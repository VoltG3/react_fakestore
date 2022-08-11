import styled from "styled-components";

export const StyledBtnAddToCart = styled.div`
  
  background-color: ${({ isTrue }) => {
    if (isTrue === false)  return 'green;'
    else return 'var(--color-accent);'
}}
  
  color:  ${({ isTrue }) => {
    if (isTrue === false)  return 'white;'
    else return 'var(--color-primary);'
}}
`
