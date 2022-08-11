import axios from 'axios'
import { API_LOCAL, API_REMOTE } from '../env.js'
import React, {useEffect, useState} from 'react'


export function FetchData() {
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

    return products
}

