import { StyledProductContainer,
         StyledProductContainerInner } from "./ListProductsItem.style.js";

export default function Product(props) {
    return (
        <StyledProductContainer>
            <StyledProductContainerInner>
                <div>
                    <img src={ props.image } alt={"img"} />
                </div>

                <div>
                    <h2>{ props.title }</h2>
                </div>

                <div>
                    <p>{ props.description }</p>
                </div>

                <div>
                    <table>
                        <tr>
                            <td>Rating:</td>
                            <td>{ props.rate }</td>
                        </tr>
                        <tr>
                            <td>Count:</td>
                            <td>{ props.count }</td>
                        </tr>
                    </table>
                </div>

                <div>
                    <p>Price: { props.price }</p>
                </div>
            </StyledProductContainerInner>
        </StyledProductContainer>
    )
}