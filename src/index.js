import React from 'react'
import ReactDOM from 'react-dom/client'
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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} >
                <Route path="home" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="cart" element={<Cart />} />
                <Route path="login" element={<LogIn />} />
                <Route path="*" element={<Empty />} />
            </Route>
        </Routes>
    </BrowserRouter>
)