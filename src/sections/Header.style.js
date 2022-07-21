import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr auto;
  "."
  ".";
  color: var(--color-primary);
  padding-bottom: 1em;
  border-bottom: solid 1px var(--color-primary);
`

export const StyledHeaderTopSection = styled.div`
  height: 4vh;
  font-size: 12px;
  padding-left: 2em;
  background-color: var(--color-primary);
`

export const StyledHeaderBottomSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`