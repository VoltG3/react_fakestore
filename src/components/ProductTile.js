import styled from "styled-components"

const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
    width: 90vw;
  margin: 1em 0 1em 0;
`

const StyledProductImg = styled.img`
  width: 25vw;
`

const StyledProductSection = styled.div`
  padding: 1em;
`

const StyledProductTitle = styled.p`
    
`

const StyledProductDescription = styled.p`

`

const StyledProductPrice = styled.p`

`

const StyledProductRate = styled.p`

`

const StyledProductCount = styled.p`
    
`

export default function Product(props) {
    return (
        <StyledProductContainer>
            <StyledProductImg src={ props.image }/>

            <StyledProductSection>
                <StyledProductTitle>{ props.title }</StyledProductTitle>
                <StyledProductDescription>{ props.description }</StyledProductDescription>
                <StyledProductPrice> { props.price } </StyledProductPrice>
                <StyledProductRate>Rating: { props.rate }</StyledProductRate>
                <StyledProductCount>Count: { props.count }</StyledProductCount>
            </StyledProductSection>
        </StyledProductContainer>
    )
}