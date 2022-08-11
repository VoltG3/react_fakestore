import {
    StyledMessageContainer,
    StyledMessageRed,
    StyledPageContainer }  from '../styles/ROUTER.mutual.style.js'

import { useSelector } from 'react-redux'

import BtnThisProductCount from '../components/BtnThisProductCount.js'

export default function Cart() {
    const IdArray = useSelector(state => state.arrID)
    console.log("#", IdArray)

    return (
        <StyledPageContainer>
            <StyledMessageContainer>
                <StyledMessageRed>
                    <p>Cart</p>
                    <br />
                    <BtnThisProductCount />
                </StyledMessageRed>
            </StyledMessageContainer>
        </StyledPageContainer>
    )
}
