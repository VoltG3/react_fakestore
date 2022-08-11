import {
    TARGET_PRODUCT_CATEGORY_BUTTON,
    CART_ADD_PRODUCT_TOTAL_COUNT,
    CART_REM_PRODUCT_TOTAL_COUNT,
    CART_ADD_PRODUCT_ID,
    CART_REM_PRODUCT_ID,
    TEMPORARY_TRUE,
    TEMPORARY_FALSE,
    TEMPORARY_REMOVE,
    ADD_THIS_PRODUCT_COUNT
     } from './actionTypes.js'

export function f_TARGET_PRODUCT_CATEGORY_BUTTON(target) {
    return {
        type: TARGET_PRODUCT_CATEGORY_BUTTON,
        payload: target
    }
}

export function f_CART_ADD_PRODUCT_TOTAL_COUNT() {
    return {
        type: CART_ADD_PRODUCT_TOTAL_COUNT
    }
}

export function f_CART_REM_PRODUCT_TOTAL_COUNT() {
    return {
        type: CART_REM_PRODUCT_TOTAL_COUNT
    }
}

export function f_CART_ADD_PRODUCT_ID(target) {
    return {
        type: CART_ADD_PRODUCT_ID,
        payload: { target }
    }
}

export function f_CART_REM_PRODUCT_ID(target) {
    return {
        type: CART_REM_PRODUCT_ID,
        payload: { target }
    }
}

// f_ADD_THIS_PRODUCT_COUNT()
// f_REM_THIS_PRODUCT_COUNT()
// f_NULL_THIS_PRODUCT_COUNT()

export function f_TEMPORARY_TRUE() {
   return {
       type: TEMPORARY_TRUE
   }
}

export function f_TEMPORARY_FALSE() {
    return {
        type: TEMPORARY_FALSE
    }
}

export function f_TEMPORARY_REMOVE(target) {
    return {
        type: TEMPORARY_REMOVE
    }
}
