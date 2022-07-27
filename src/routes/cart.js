import {
    StyledMessageContainer,
    StyledMessageGreen,
    StyledPageContainer} from "./_.style.js"

import PassingStateAsProps from "../components/PassingStateAsProps.js"

export default function Cart() {
    return (
        <StyledPageContainer>
            <p>Cart</p>
            <PassingStateAsProps />
        </StyledPageContainer>
    )
}