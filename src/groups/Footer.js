import styled from "styled-components"

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0 10px 0;
  font-size: var(--footer-font-size);
  background-color: var(--background-color-3);
  
  * { margin-left: 6px; }
`

export default function Footer() {
    return (
        <StyledFooterContainer>
            <p>Coded by
                    <a href="https://www.danoss.no" target="_blank">© 2022 VoltG3</a>
            </p>
        </StyledFooterContainer>
    )
}