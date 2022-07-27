import {
    StyledMessageContainer,
    StyledMessageGreen,
    StyledPageContainer} from "./_.style.js"

import Temp from "../components/Temp.js"

export default function Cart() {
    return (
        <StyledPageContainer>
            <p>Cart</p>
            <Temp />
        </StyledPageContainer>
    )
}