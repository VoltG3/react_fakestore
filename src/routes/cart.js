import {
    StyledMessageContainer,
    StyledMessageGreen,
    StyledPageContainer} from "./_.style.js"

import SettingStateFromChild from "../components/SettingStateFromChild";

export default function Cart() {
    return (
        <StyledPageContainer>
            <p>Cart</p>
            <SettingStateFromChild />
        </StyledPageContainer>
    )
}