import data from "../data.js"
import styled from "styled-components"
import NavigationButton from "../components/NavigationButton.js"
import { categoryList } from "../utils/JsonCategoryList.js"
import { useGetUniqueKey } from "react-generate-unique-key-for-map";

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
    const getUniqueKey = useGetUniqueKey()
    const category = categoryList().map(item => {

       return (
           <NavigationButton
               key={ getUniqueKey(categoryList()) }
               buttonLabel={ item }
           />
       )
    })

    return (
        <StyledNavigationContainer>
            <StyledNavigationTopSection>
                <h1>Products</h1>
            </StyledNavigationTopSection>

            <StyledNavigationBottomSection>
                { category }
            </StyledNavigationBottomSection>
        </StyledNavigationContainer>
    )
}
