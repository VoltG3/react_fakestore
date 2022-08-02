import {
    StyledMessageContainer,
    StyledMessageRed,
    StyledPageContainer } from '../styles/routes.mutual.style.js'

export default function IsNull() {
    return (
        <StyledPageContainer>
            <StyledMessageContainer>
                <StyledMessageRed>
                   <p>There's nothing here!</p>
                </StyledMessageRed>
            </StyledMessageContainer>
        </StyledPageContainer>
    )
}
