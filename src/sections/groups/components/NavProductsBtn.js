import { StyledNavigationButton } from "./NavProductsBtn.style.js";

/**
 *
 * @param buttonLabel
 */

const respons = (buttonLabel) => {
    console.log("btn::", buttonLabel)
}

export default function NavProductsBtn({buttonLabel}) {
    return (
        <StyledNavigationButton  onClick={() => respons(buttonLabel)}>
            { buttonLabel }
        </StyledNavigationButton>
    )
}