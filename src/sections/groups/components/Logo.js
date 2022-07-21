import styled from "styled-components"

const StyledLogoContainer = styled.div`
    display: flex;
`

const StyledFirstCharContainer = styled.div`

`

const StyledSecondCharContainer = styled.p`
  margin-top: 10px;
`

const StyledCharFirst = styled.p`
  -webkit-transform:rotateY(180deg);
  -moz-transform:rotateY(180deg);
  -o-transform:rotateY(180deg);
  -ms-transform:rotateY(180deg);
  
  font-family: var(--font-accent);
  font-weight: 900;
  font-size: 40px;
  color: var(--color-primary);
`

const StyledCharSecond = styled.p`
  -webkit-transform:rotateX(180deg);
  -moz-transform:rotateX(180deg);
  -o-transform:rotateX(180deg);
  -ms-transform:rotateX(180deg);

  font-family: var(--font-accent);
  font-weight: 900;
  font-size: 40px;
  color: var(--color-primary);
`

export default function Logo() {
    return (
        <StyledLogoContainer>
            <StyledFirstCharContainer>
                <StyledCharFirst>F</StyledCharFirst>
            </StyledFirstCharContainer>

            <StyledSecondCharContainer>
                <StyledCharSecond>F</StyledCharSecond>
            </StyledSecondCharContainer>
        </StyledLogoContainer>
    )
}