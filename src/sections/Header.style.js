import styled from 'styled-components'

export const StyledHeaderContainer = styled.div`
  position: fixed;
      top: 0;
      left: 0;
        width: 100vw;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr auto;
  "."
  ".";
  color: var(--color-primary);
  padding-bottom: 1em;
`

export const StyledHeaderTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4vh;
  padding: 0 1em 0 1em;
  background-color: var(--color-primary);
`

export const StyledHeaderBottomSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #eeeff1;
`
