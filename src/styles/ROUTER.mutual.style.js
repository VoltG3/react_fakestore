import styled from "styled-components";

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100vw;
    height: 100%;
  padding-top: var(--padding-top);
`

export const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    width: 100vw;
    height: 100%;
  
  @media only screen and (max-width: 320px) {
    justify-content: start;
  }
`

export const StyledMessageGreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 10vh;
  border: solid 1px #1a461a;

  p {
    color: #1a461a;
  }
  
  @media only screen and (max-width: 320px) {
    font-size: 12px;
    width: 80vw;
    height: 5vh;
  }
`

export const StyledMessageRed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 10vh;
  border: solid 1px #590d0d;

  p {
    color: #590d0d;
  }

  @media only screen and (max-width: 320px) {
    font-size: 12px;
    width: 80vw;
    height: 5vh;
  }
`
