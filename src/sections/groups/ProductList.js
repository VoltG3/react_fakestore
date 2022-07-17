import ProductTile from "./components/ProductListTile.js"
import { Rating } from "../../utils/JsonRatingRate.js"
import { Count } from "../../utils/JsonCount.js"
import data from "../../data.js"

export default function ProductList() {
    const productTile = data.map(item => {

        return (
            <ProductTile
                key = { item.id }
                image = { item.image }
                title = { item.title }
                description = { item.description }
                price = { item.price }
                rate = {item.rate = Rating(item.rating) }
                count = { item.count = Count(item.rating)}
            />
        )
    })

    return (
        <>
            { productTile }
        </>
    )
}