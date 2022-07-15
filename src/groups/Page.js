import styled from "styled-components"
import ProductList from "./ProductList.js"

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100vw;
    height: auto;
`

export default function App() {
    return (
        <StyledPageContainer>
            <ProductList />
        </StyledPageContainer>
    )
}