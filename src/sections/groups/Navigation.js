import NavigationButton from "./components/NavigationButton.js"
import { categoryList } from "../../utils/JsonCategoryList.js"
import { useGetUniqueKey } from "react-generate-unique-key-for-map";
import { StyledNavigationContainer,
         StyledNavigationTopSection,
         StyledNavigationBottomSection } from "../../styles.css/Group.Navigation.style.js";

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
