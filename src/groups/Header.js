import styled from "styled-components";
import Navigation from "./Navigation.js"

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
  color: var(--color-primary);

`

const StyledHeaderTopSection = styled.div`
  height: 3vh;
  background-color: var(--color-primary);
`

const StyledHeaderBottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

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