import ProductItem from "./components/ListProductsItem.js"
import { Rate } from "../../utils/JsonRate.js"
import { Count } from "../../utils/JsonCount.js"
import data from "../../data.js"

export default function ListProducts() {
    const productItem = data.map(item => {

        return (
            <ProductItem
                key = { item.id }
                image = { item.image }
                title = { item.title }
                description = { item.description }
                price = { item.price }
                rate = {item.rate = Rate(item.rating) }
                count = { item.count = Count(item.rating)}
            />
        )
    })

    return (
        <>
            { productItem }
        </>
    )
}

