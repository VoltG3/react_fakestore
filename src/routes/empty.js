import styled from "styled-components";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100vw;
    height: auto;
`

export default function Empty() {
    return (
        <StyledPageContainer>
            <p>There's nothing here!</p>
        </StyledPageContainer>
    )
}