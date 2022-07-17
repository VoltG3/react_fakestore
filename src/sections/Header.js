import Navigation from "./groups/Navigation.js"
import { StyledHeaderContainer,
         StyledHeaderTopSection,
         StyledHeaderBottomSection } from "../styles.css/Section.Header.style"

export default function Header() {
    return (
        <StyledHeaderContainer>
            <StyledHeaderTopSection>

            </StyledHeaderTopSection>

            <StyledHeaderBottomSection>
                <p>FakeStore</p>
                <Navigation />
                <p>basket</p>
            </StyledHeaderBottomSection>
        </StyledHeaderContainer>
    )
}