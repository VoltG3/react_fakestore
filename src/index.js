import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import * as redux from 'redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { reducer } from './redux/reducer.js'

import App from './App.js'
import Home from './routes/home.js'
import Products from './routes/products.js'
import Cart from './routes/cart.js'
import LogIn from './routes/login.js'
import IsNull from './routes/isNull.js'
import Temp from './routes/temp.js'

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
                    <Route path="temp" element={<Temp />} />
                    <Route path="*" element={<IsNull />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)