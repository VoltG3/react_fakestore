import styled from "styled-components"
import { RootStyles } from "./Root.styles.js"
import Header from "./groups/Header.js"
import Page from "./groups/Page.js"
import Footer from "./groups/Footer.js"

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100vw;
    height: 100vh;
`

export default function App() {
    return (
        <StyledAppContainer>
            <RootStyles />
                <Header />
                <Page />
                <Footer />
        </StyledAppContainer>
    )
}