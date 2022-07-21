import NavProducts from "./groups/NavProducts.js"
import NavUser from "./groups/NavUser.js"
import SvgLogo from "./groups/components/SvgLogo.js"
import { StyledHeaderContainer,
         StyledHeaderTopSection,
         StyledHeaderBottomSection } from "./Header.style.js"
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <StyledHeaderContainer>
            <StyledHeaderTopSection />
            <StyledHeaderBottomSection>
                <Link to="/home"><SvgLogo /></Link>
                <Link to="/NoMatch">NoMatch</Link>
                <NavProducts />
                <NavUser />
            </StyledHeaderBottomSection>
        </StyledHeaderContainer>
    )
}
