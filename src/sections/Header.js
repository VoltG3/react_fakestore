import {
    StyledHeaderContainer,
    StyledHeaderTopSection,
    StyledHeaderBottomSection } from "./Header.style.js"
import NavProductsDesktop from './groups/NavProductsDesktop.js'
import NavUser from './groups/NavUser.js'
import { NavProductsMobile } from './groups/NavProductsMobile.js'

export default function Header() {
    return (
        <StyledHeaderContainer>
            <div className={"desktop"}>
                <StyledHeaderTopSection />

                <StyledHeaderBottomSection>
                    <div></div>
                    <NavProductsDesktop />
                    <NavUser />
                </StyledHeaderBottomSection>
            </div>

            <div className={"mobile"}>
                <StyledHeaderTopSection>
                    <NavProductsMobile />
                    <NavUser />
                </StyledHeaderTopSection>

                <StyledHeaderBottomSection />
            </div>
        </StyledHeaderContainer>
    )
}
