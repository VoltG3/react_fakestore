import styled from "styled-components"
import { Styles } from "./styles.css/Styles.js"
import Header from "./sections/Header.js"
import Page from "./sections/Page.js"
import Footer from "./sections/Footer.js"

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100vw;
    height: 100vh;
`

export default function App() {
    return (
        <StyledAppContainer>
            <Styles />
                <Header />
                <Page />
                <Footer />
        </StyledAppContainer>
    )
}