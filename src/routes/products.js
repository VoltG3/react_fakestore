import ListProducts from "../sections/groups/ListProducts.js"
import styled from "styled-components";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100vw;
    height: auto;
`

export default function Products() {
    return (
        <StyledPageContainer>
            <ListProducts />
        </StyledPageContainer>
    )
}