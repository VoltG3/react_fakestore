import styled from 'styled-components'

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 7px 0 7px 0;
  font-family: var(--font-primary);
  font-size: var(--footer-font-size);
 
  * { margin-left: 6px;
      color: var(--color-primary);
  }
  
  a:hover {
    color: red;
  }
`
