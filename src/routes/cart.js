import {
    StyledMessageContainer,
    StyledMessageRed,
    StyledPageContainer }  from '../styles/routes.mutual.style.js'

export default function Cart() {
    return (
        <StyledPageContainer>
            <StyledMessageContainer>
                <StyledMessageRed>
                    <p>Cart</p>
                </StyledMessageRed>
            </StyledMessageContainer>
        </StyledPageContainer>
    )
}
