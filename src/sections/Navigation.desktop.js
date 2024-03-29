import styled from 'styled-components'
import BtnProductCategory from '../components/BtnProductCategory.js'
import { useGetUniqueKey } from 'react-generate-unique-key-for-map'
import { categoryList } from '../utils/JSON_categoryList.js'
import Logo from '../components/svg/Logo.js'
import { Link } from 'react-router-dom'

const StyledNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledNavigationTopSection = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 320px) { 
    display: none;
  }
`

const StyledNavigationBottomSection = styled.div`
  display: flex;
  flex-direction: var(--nav-product-direction);
  gap: 15px;
  padding: 20px 0 20px 0;
`

export default function NavigationDesktop() {
    const getUniqueKey = useGetUniqueKey()
    const category = categoryList().map(item => {

        /**
         * Get unique "categories" from api as buttonLabels
         */

       return (
           <BtnProductCategory
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
