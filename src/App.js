import { Outlet, Link } from "react-router-dom";
import styled from "styled-components"
import { GlobalRootStyles } from "./Root.styles.js"
import Header from "./sections/Header.js"
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
            <GlobalRootStyles />
                <Header />
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link> |{" "}
                    <Link to="/login">Login</Link>
                    <Link to="/home">home</Link>
                <Outlet />
                <Footer />
        </StyledAppContainer>
    )
}