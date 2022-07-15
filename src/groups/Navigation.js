import styled from "styled-components"
import NavigationButton from "../components/NavigationButton.js"

const StyledNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledNavigationTopSection = styled.div`
  display: flex;
  justify-content: center;
`

const StyledNavigationBottomSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`

export default function Navigation() {
    return (
        <StyledNavigationContainer>
            <StyledNavigationTopSection>
                <h1>Products</h1>
            </StyledNavigationTopSection>

            <StyledNavigationBottomSection>
                <NavigationButton buttonLabel={"Men's clothing"} />
                <NavigationButton buttonLabel={"Women's clothing"} />
                <NavigationButton buttonLabel={"Electronic"} />
                <NavigationButton buttonLabel={"Jewelery"} />
                <NavigationButton buttonLabel={"All products"} />
            </StyledNavigationBottomSection>
        </StyledNavigationContainer>
    )
}