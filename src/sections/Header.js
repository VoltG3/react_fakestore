import {
    StyledHeaderContainer,
    StyledHeaderTopSection,
    StyledHeaderBottomSection } from "./Header.style.js"
import NavProducts from "./groups/NavProducts.js"
import NavUser from "./groups/NavUser.js"
import NavUserMobile from "./groups/NavUserMobile.js";
import { NavDropDown } from "./groups/NavDropDown.js";
import SvgLogo from "./groups/components/SvgLogo.js"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <StyledHeaderContainer>
            <div className={"desktop"}>
                <StyledHeaderTopSection />

                <StyledHeaderBottomSection>
                    <Link to="/home"><SvgLogo /></Link>
                    <NavProducts />
                    <NavUser />
                </StyledHeaderBottomSection>
            </div>

            <div className={"mobile"}>
                <StyledHeaderTopSection>
                    <NavDropDown />
                    <NavUserMobile />
                </StyledHeaderTopSection>

                <StyledHeaderBottomSection />
            </div>
        </StyledHeaderContainer>
    )
}

