import styled from 'styled-components'

const StyledLogoContainer = styled.div`
    display: flex;
    align-items: center;
  
    & {
      padding-top: 10px;
    }
  
    p, h1 {
      font-family: var(--font-accent);
      font-weight: 700;
      font-size: var(--logo-font-size);
      color: var(--color-logo);
      margin: 0;
    }
  
    div:nth-child(1) {
      margin-bottom: 10px;
      
     p {
       -webkit-transform:rotateY(180deg);
       -moz-transform:rotateY(180deg);
       -o-transform:rotateY(180deg);
       -ms-transform:rotateY(180deg);
       transform:rotateY(180deg);
     }
    }
  
    div:nth-child(2) {
      margin-top: 10px;
      margin-right: 20px;
      
      p {
        -webkit-transform:rotateX(180deg);
        -moz-transform:rotateX(180deg);
        -o-transform:rotateX(180deg);
        -ms-transform:rotateX(180deg);
        transform:rotateX(180deg);
      }
    }
`

export default function Logo() {
    return (
        <StyledLogoContainer>
            <div><p>F</p></div>
            <div><p>F</p></div>
            <div><h1>FakeStore</h1></div>
        </StyledLogoContainer>
    )
}
