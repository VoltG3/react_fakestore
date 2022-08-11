import {
    StyledMessageContainer,
    StyledPageContainer }  from '../styles/ROUTER.mutual.style.js'

import { useSelector } from 'react-redux'
import { FetchData } from '../utils/API_fetchData.js'
import { strThisProductID } from '../utils/JSON_thisProductID.js'
import ProductInCart from '../components/ProductInCart.js'

export default function Cart() {
    const selectedArray = useSelector(state => state.arrID)
    const productList = FetchData()
    const convertedArray = []
    const finalArray = []

    for(let i = 0; i < selectedArray.length; i++) {
        convertedArray.push(strThisProductID(selectedArray[i]))
    }

    for(let y = 0; y < convertedArray.length; y++) {
        for(let i = 0; i < productList.length; i++) {
            if(convertedArray[y] === i+1) {
                // console.log("-> convertesArray[y]", convertedArray[y])
                // console.log("-> i                ", i)
                finalArray.push(productList[i])
            }
        }
    }

    // console.table(finalArray)

    const productInCart = finalArray.map(item => {
        return (
            <ProductInCart
                key = { item.id }
                image = { item.image }
                title = { item.title }
                price = { item.price }
            />
        )
    })

    return (
        <StyledPageContainer>
            <StyledMessageContainer>
                { productInCart }
            </StyledMessageContainer>
        </StyledPageContainer>
    )
}
