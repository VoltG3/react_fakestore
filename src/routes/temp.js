import React, { Component } from "react"
import * as axios from "axios"
import {
    StyledMessageContainer,
    StyledMessageGreen,
    StyledPageContainer} from "./routes.style.js"

export default class Temp extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }

    render() {
        return (
            <ul>
                { this.state.products.map(product => <li>{product.title}</li>)}
            </ul>
        )
    }
}
