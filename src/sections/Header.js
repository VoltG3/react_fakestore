import {
    StyledHeaderContainer,
    StyledHeaderContainerTop,
    StyledHeaderContainerBottom } from '../styles/SECTION.header.style.js'

import HeaderTools from './Header.tools.js'
import NavigationCartAndUser from './Navigation.CartAndUser.js'
import NavigationDesktop from './Navigation.desktop.js'
import { NavigationMobile } from './Navigation.mobile.js'

export default function Header() {

    return (

        /**
         * desktop - default width    = 1440px
         * mobile  - @media max-width = 320px
         */

        <StyledHeaderContainer>
            <div className={"desktop"}>
                <StyledHeaderContainerTop>
                    <HeaderTools />
                </StyledHeaderContainerTop>

                <StyledHeaderContainerBottom>
                    <div></div>
                    <NavigationDesktop />
                    <NavigationCartAndUser />
                </StyledHeaderContainerBottom>
            </div>

            <div className={"mobile"}>
                <StyledHeaderContainerTop>
                    <NavigationMobile />
                    <NavigationCartAndUser />
                </StyledHeaderContainerTop>

                <StyledHeaderContainerBottom />
            </div>
        </StyledHeaderContainer>
    )
}
