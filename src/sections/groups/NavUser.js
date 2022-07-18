import styled from "styled-components"
import SvgCart from "./components/SvgCart"
import SvgUser from "./components/SvgUser"

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
            <SvgCart />
            <SvgUser />
        </StyledSvg>
    )
}
