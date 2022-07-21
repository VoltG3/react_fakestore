import styled from "styled-components"
import SvgCartMobile from "./components/svg/SvgCartMobile.js"
import SvgUserMobile from "./components/svg/SvgUserMobile.js"
import {Link} from "react-router-dom";

const StyledSvg = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  
  * {
    fill: white;
  }
  
  *:hover {
    cursor: pointer;
  }
`

export default function NavUserMobile() {
    return (
        <StyledSvg>
            <Link to="/cart"><SvgCartMobile /></Link>
            <Link to="/login"><SvgUserMobile /></Link>
        </StyledSvg>
    )
}