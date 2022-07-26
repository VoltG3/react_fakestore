import styled from 'styled-components'
import { GlobalRootStyles } from './root.styles.js'
import { Outlet } from 'react-router-dom'
import SectionHeader from './components/SectionHeader.js'
import SectionFooter from './components/SectionFooter.js'

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
                <SectionHeader />
                <Outlet />
                <SectionFooter />
        </StyledAppContainer>
    )
}
