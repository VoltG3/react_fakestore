import {
    StyledMessageContainer,
    StyledMessageRed,
    StyledPageContainer} from "./routes.style.js"

export default function Empty() {
    return (
        <StyledPageContainer>
            <StyledMessageContainer>
                <StyledMessageRed>
                    <p>Login</p><p>There's nothing here!</p>
                </StyledMessageRed>
            </StyledMessageContainer>
        </StyledPageContainer>
    )
}
