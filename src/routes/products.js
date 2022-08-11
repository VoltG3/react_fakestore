import { StyledPageContainer } from '../styles/ROUTER.mutual.style.js'
import { useSelector } from 'react-redux'

import Product from '../components/Product.js'
import { Rate } from '../utils/JSON_rate.js'
import { Count } from '../utils/JSON_count.js'
import { FetchData } from '../utils/API_fetchData.js'

export default function Products() {
    const targetProductCategory = useSelector(state => state.targetProductCategory)
    console.log(targetProductCategory.toLowerCase())

    const product = FetchData().map(item => {

        if(item.category === targetProductCategory.toLowerCase()
            || targetProductCategory === 'All products'){
            return (
                <Product
                    key = { item.id }
                    image = { item.image }
                    title = { item.title }
                    description = { item.description }
                    price = { item.price }
                    rate = {item.rate = Rate(item.rating) }
                    count = { item.count = Count(item.rating)}
                    productID={ item.id }
                />
            )

        } else {
            return null
        }
    })

    return (
        <>
            <StyledPageContainer>
                { product }
            </StyledPageContainer>
        </>
    )
}
