import {
    StyledMessageContainer,
    StyledMessageGreen,
    StyledPageContainer }  from '../styles/routes.mutual.style.js'

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
