import styled from 'styled-components'

export const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  
  *:hover {
    cursor: pointer;
  }
  
  .iconCart {
    width: 25px;
    height: 25px;
    fill: var(--color-primary);
  }
  
  .iconLogin {
    width: 17px;
    height: 17px;
    fill: var(--color-primary);
  }

  @media only screen and (max-width: 320px) {
    .iconCart {
      width: 16px;
      height: 16px;
      fill: var(--color-default);
    }
    
    .iconLogin {
      width: 9px;
      height: 9px;
      fill: var(--color-default);
    }
`

export const StyledIconTotalCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    width: 25px;
    height: 25px;
  border-radius: 50%;
  background-color: brown;
  color: white;
`
