import { StyledPageContainer } from './_.style.js'

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import { API_REMOTE, API_LOCAL } from '../env.js'
import Product from '../components/Product.js'
import { Rate } from '../utils/JsonRate.js'
import { Count } from '../utils/JsonCount.js'


export default function Products() {
    const targetProductCategory = useSelector(state => state.targetProductCategory)
    console.log(targetProductCategory.toLowerCase())

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        axios
            .get(API_REMOTE)
            .then((result) => {
                console.log(result)
                setProducts(result.data)
            })
            .catch((err) => {
                console.log(err)
                console.warn("load local api [ data.js ]")
                setProducts(API_LOCAL)
            })
    }

    const product = products.map(item => {

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
