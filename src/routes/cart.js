import {
    StyledMessageContainer,
    StyledMessageRed,
    StyledPageContainer }  from '../styles/ROUTER.mutual.style.js'

import { useSelector } from 'react-redux'
import { FetchData } from '../utils/API_fetchData.js'
import { strThisProductID } from '../utils/JSON_thisProductID.js'
import ProductInCart from '../components/ProductInCart.js'

export default function Cart() {
    // get selected array
    const selectedProductsIdsArray = useSelector(state => state.arrID)

    // convert arr
    const convertedProductsIdsArray = []
    for(let i = 0; i < selectedProductsIdsArray.length; i++) {
        convertedProductsIdsArray.push(strThisProductID(selectedProductsIdsArray[i]))
    }

    // stdcout
    for(let i = 0; i < convertedProductsIdsArray.length; i++) {
        console.log("converted array ->", convertedProductsIdsArray[i])
    }

    // compare converted array id's with api id's
    function compareIDs(itemId) {
        for (let i = 0; i < convertedProductsIdsArray.length; i++) {
            if (itemId === convertedProductsIdsArray[i]) {
                // console.log("TARGET item.id", item.id, "convertedProductsIdsArray", convertedProductsIdsArray[i])
                return true
            } else {
                return false
            }
        }
    }

    const productInCart = FetchData().map(item => {
        // ctrl
        // for(let i = 0; i < convertedProductsIdsArray.length; i++) {
        //     if(item.id === convertedProductsIdsArray[i]) {
        //         console.log("TARGET item.id", item.id, "convertedProductsIdsArray", convertedProductsIdsArray[i])
        //     }
        // }

        if(compareIDs(item.id) === true) {
            return (
                <ProductInCart
                    key = { item.id }
                    image = { item.image }
                    title = { item.title }
                    price = { item.price }
                />
            )

        } else {
            return null
        }

        //return compareIDs(item.id) ? console.log("true") : console.log("false")

    }); //console.log(product)

    return (
        <StyledPageContainer>
            <StyledMessageContainer>
                { productInCart }
            </StyledMessageContainer>
        </StyledPageContainer>
    )
}
