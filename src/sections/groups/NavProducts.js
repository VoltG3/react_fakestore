import NavProductsBtn from "./components/NavProductsBtn.js"
import { categoryList } from "../../utils/JsonCategoryList.js"
import { useGetUniqueKey } from "react-generate-unique-key-for-map";
import { StyledNavigationContainer,
         StyledNavigationTopSection,
         StyledNavigationBottomSection } from "./NavProducts.style.js";

export default function NavProducts() {
    const getUniqueKey = useGetUniqueKey()
    const category = categoryList().map(item => {

       return (
           <NavProductsBtn
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

