import styled from "styled-components";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100vw;
    height: auto;
`

export default function Home() {
    return (
        <StyledPageContainer>
            <p>Home</p>
        </StyledPageContainer>
    )
}