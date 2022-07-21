import {
    StyledMessageContainer,
    StyledMessageGreen,
    StyledPageContainer} from "./routes.style.js"

export default function Cart() {
    return (
        <StyledPageContainer>
            <StyledMessageContainer>
                <StyledMessageGreen>
                    <p>Cart</p>
                </StyledMessageGreen>
            </StyledMessageContainer>
        </StyledPageContainer>
    )
}