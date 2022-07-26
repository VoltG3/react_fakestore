import ProductItem from './components/ProductsItem.js'
import { useSelector } from "react-redux"
import { Rate } from '../../utils/JsonRate.js'
import { Count } from '../../utils/JsonCount.js'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import data from '../../utils/local.api/data.js'

export default function ProductsList() {
    const targetProductCategory = useSelector(state => state.targetProductCategory)
    console.log(targetProductCategory.toLowerCase())

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((result) => {
                console.log(result)
                setProducts(result.data)
            })
            .catch((err) => {
                console.log(err)
                console.warn("load local api [ data.js ]")
                setProducts(data)
            })
    }

    const productItem = products.map(item => {

        if(item.category === targetProductCategory.toLowerCase()
            || targetProductCategory === 'All products'){
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
