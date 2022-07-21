import {
    StyledPageContainer,
    StyledMessageContainer,
    StyledMessageGreen } from "./routes.style.js"

export default function Login() {
    return (
        <StyledPageContainer>
            <StyledMessageContainer>
                <StyledMessageGreen>
                    <p>Login</p>
                </StyledMessageGreen>
            </StyledMessageContainer>
        </StyledPageContainer>
    )
}