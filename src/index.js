import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import * as redux from 'redux'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App.js'
import Home from './routes/home.js'
import Products from "./routes/products.js";
import Cart from "./routes/cart.js";
import LogIn from "./routes/login.js";
import Empty from "./routes/empty.js"
import Temp from "./routes/temp.js"

const defaultState = {
    targetProductCategory : "All products",
    countOfProduct : 0
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "TARGET_PRODUCT_CATEGORY_BUTTON":
            return {...state, targetProductCategory: state.targetProductCategory = action.payload}

        case "INCREMENT_PRODUCT_COUNT":
            return {...state, countOfProduct: state.countOfProduct + 1}

        case "DECREMENT_PRODUCT_COUNT":
            return {...state, countOfProduct: state.countOfProduct - 1}

        case "NULL_PRODUCT_COUNT":
            return {...state, countOfProduct: state.countOfProduct = 0}

        default:
            return state
    }
}

const store = redux.createStore(reducer)
      store.subscribe(() => {

})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} >
                    <Route path="home" element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="login" element={<LogIn />} />
                    <Route path="*" element={<Empty />} />
                    <Route path="temp" element={<Temp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)