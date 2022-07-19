import styled from "styled-components";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100vw;
    height: auto;
`

export default function Login() {
    return (
        <StyledPageContainer>
            <p>Login</p>
        </StyledPageContainer>
    )
}