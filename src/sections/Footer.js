import styled from "styled-components";

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 7px 0 7px 0;
  font-family: var(--font-primary);
  font-size: var(--footer-font-size);
 
  * { margin-left: 6px;
      color: var(--color-primary);
  }
  
  a:hover {
    color: red;
  }
`

export default function Footer() {
    return (
        <StyledFooterContainer>
            <p>Coded by
                    <a href="https://www.danoss.no" target="_blank" rel="noreferrer">© 2022 VoltG3</a>
            </p>
        </StyledFooterContainer>
    )
}