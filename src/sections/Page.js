import ListProducts from "./groups/ListProducts.js"
import styled from "styled-components";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100vw;
    height: auto;
`

export default function App() {
    return (
        <StyledPageContainer>
            <ListProducts />
        </StyledPageContainer>
    )
}