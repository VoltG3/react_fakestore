import NavProducts from "./groups/NavProducts.js"
import NavUser from "./groups/NavUser.js"
import SvgLogo from "./groups/components/SvgLogo.js"
import { StyledHeaderContainer,
         StyledHeaderTopSection,
         StyledHeaderBottomSection } from "./Header.style.js"

export default function Header() {
    return (
        <StyledHeaderContainer>
            <StyledHeaderTopSection />
            <StyledHeaderBottomSection>
                <SvgLogo />
                <NavProducts />
                <NavUser />
            </StyledHeaderBottomSection>
        </StyledHeaderContainer>
    )
}
