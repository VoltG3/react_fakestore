import {
    StyledMessageContainer,
    StyledMessageGreen,
    StyledPageContainer} from "./routes.style.js"

export default function Home() {
    return (
        <StyledPageContainer>
            <StyledMessageContainer>
                <StyledMessageGreen>
                    <p>Home</p>
                </StyledMessageGreen>
            </StyledMessageContainer>
        </StyledPageContainer>
    )
}