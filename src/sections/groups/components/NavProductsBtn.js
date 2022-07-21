import { StyledNavigationButton } from "./NavProductsBtn.style.js";
import { Link } from "react-router-dom";

export default function NavProductsBtn({buttonLabel}) {
    return (
        <StyledNavigationButton>
            <Link
                style={{color: 'var(--color-primary)'}}
                to="/products">
                    <p>
                        { buttonLabel }
                    </p>
            </Link>
        </StyledNavigationButton>
    )
}
