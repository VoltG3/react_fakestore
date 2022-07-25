import { useSelector } from "react-redux"
import ProductItem from './components/ProductsItem.js'
import { Rate } from '../../utils/JsonRate.js'
import { Count } from '../../utils/JsonCount.js'
import data from '../../data.js'

export default function ProductsList() {
    const targetProductCategory = useSelector(state => state.targetProductCategory)
    console.log(targetProductCategory.toLowerCase())

    const productItem = data.map(item => {
        if(item.category === targetProductCategory.toLowerCase()){
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
        } else if(targetProductCategory === 'All products'){
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
        } else {
            return null
        }
    })

    return (
        <>
            { productItem }
        </>
    )
}
