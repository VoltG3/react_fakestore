import styled from 'styled-components'

export const StyledToolsContainer = styled.div`
  display: flex;
  align-self: center;
  gap: 10px;
`

export const StyledToolsBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  width: 18px;
  align-content: center;
  background-color: ${({ isTrue }) => {
    if(isTrue === false) return '#eeeff1;'
    else return '#eeff00;'
  }}
  
  border-radius: 50%;
  border: solid 1px white;

  *:hover {
    cursor: pointer;
  }
`

export const StyledToolsParagraph = styled.p`
  font-size:14px;
  margin: 0;
  color: blue;
`
