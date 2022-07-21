import NavProductsBtn from "./components/NavProductsBtn.js"
import { categoryList } from "../../utils/JsonCategoryList.js"
import { useGetUniqueKey } from "react-generate-unique-key-for-map";
import { StyledNavigationContainer,
         StyledNavigationTopSection,
         StyledNavigationBottomSection } from "./NavProducts.style.js";
import Logo from "./components/Logo.js";
import {Link} from "react-router-dom";

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
                <Link to="/home"><Logo /></Link>
            </StyledNavigationTopSection>

            <StyledNavigationBottomSection>
                { category }
            </StyledNavigationBottomSection>
        </StyledNavigationContainer>
    )
}

