import styled from 'styled-components'
import { GlobalRootStyles } from './styles/root.styles.js'
import { Outlet } from 'react-router-dom'
import Header from './sections/Header.js'
import Footer from './sections/Footer.js'
import { useSelector } from 'react-redux'

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100vw;
    height: 100vh;
  
  body { 
    
  /*  border: ${({ tt }) => {
      if(tt === 1) return 'solid'
      else return 'none'
    }} 1px black;*/

  // * { border: dotted 1px lightgray; }
  }
`

export default function App() {
    const tt = useSelector(state => state.showBorders) // !!!!
    console.log("arr", tt)

    return (
        <StyledAppContainer>
            <GlobalRootStyles />
                <Header />
                <Outlet />
                <Footer />
        </StyledAppContainer>
    )
}
