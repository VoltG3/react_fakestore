import styled from "styled-components"
import SvgCart from "./components/SvgCart"
import SvgUser from "./components/SvgUser"
import {Link} from "react-router-dom";

const StyledSvg = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  
  * {
    fill: var(--color-primary);
  }
  
  *:hover {
    cursor: pointer;
  }
`

export default function NavUser() {
    return (
        <StyledSvg>
            <Link to="/cart"><SvgCart /></Link>
            <Link to="/login"><SvgUser /></Link>
        </StyledSvg>
    )
}

