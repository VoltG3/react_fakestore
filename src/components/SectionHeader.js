import {
    StyledHeaderContainer,
    StyledHeaderTopSection,
    StyledHeaderBottomSection } from "./SectionHeader.style.js"

import NavBtnCartUser from './NavBtnCartUser.js'
import NavigationDesktop from './NavigationDesktop.js'
import { NavigationMobile } from './NavigationMobile.js'

export default function SectionHeader() {

    return (

        /**
         * desktop - default width=1440px
         * mobile - @media max-width=320px
         */

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
