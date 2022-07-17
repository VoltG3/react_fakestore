import { StyledProductContainer,
         StyledProductImg,
         StyledProductSection,
         StyledProductTitle,
         StyledProductDescription,
         StyledProductPrice,
         StyledProductRate,
         StyledProductCount } from "../../../styles.css/Component.ProductListTile";

export default function Product(props) {
    return (
        <StyledProductContainer>
            <div>
                <StyledProductImg src={ props.image }/>
            </div>

            <StyledProductSection>
                <StyledProductTitle>{ props.title }</StyledProductTitle>
                <StyledProductDescription>{ props.description }</StyledProductDescription>
                <StyledProductPrice>Price: { props.price } </StyledProductPrice>
                <StyledProductRate>Rating: { props.rate }</StyledProductRate>
                <StyledProductCount>Count: { props.count }</StyledProductCount>
            </StyledProductSection>
        </StyledProductContainer>
    )
}