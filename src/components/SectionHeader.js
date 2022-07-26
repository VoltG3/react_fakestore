import {
    StyledHeaderContainer,
    StyledHeaderTopSection,
    StyledHeaderBottomSection } from "./SectionHeader.style.js"

import NavBtnCartUser from './NavBtnCartUser.js'
import NavigationDesktop from './NavigationDesktop.js'
import { NavigationMobile } from './NavigationMobile.js'

export default function SectionHeader() {

    return (
        <StyledHeaderContainer>
            <div className={"desktop"}>
                <StyledHeaderTopSection />

                <StyledHeaderBottomSection>
                    <div></div>
                    <NavigationDesktop />
                    <NavBtnCartUser />
                </StyledHeaderBottomSection>
            </div>

            <div className={"mobile"}>
                <StyledHeaderTopSection>
                    <NavigationMobile />
                    <NavBtnCartUser />
                </StyledHeaderTopSection>

                <StyledHeaderBottomSection />
            </div>
        </StyledHeaderContainer>
    )
}
