
export const defaultState = {
    targetProductCategory : "All products",
    countOfProduct : 0,
    productsTotalCount : 0,
    arrID : [],
    temporary : 0
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "TARGET_PRODUCT_CATEGORY_BUTTON":
            return {...state, targetProductCategory: state.targetProductCategory = action.payload}

        case "CART_ADD_PRODUCT_TOTAL_COUNT" :
            return {...state, productsTotalCount: state.productsTotalCount + 1}

        case "CART_REM_PRODUCT_TOTAL_COUNT" :
            return {...state, productsTotalCount: state.productsTotalCount - 1}

        case "CART_ADD_PRODUCT_ID" :
            return {...state, arrID: [...state.arrID, action.payload] }

        case "CART_REM_PRODUCT_ID" :
            return {...state, arrID: [...state.arrID, state.arrID = action.payload]  }

        case "ADD_THIS_PRODUCT_COUNT":
            return {...state, countOfProduct: state.countOfProduct + 1}

        case "REM_THIS_PRODUCT_COUNT":
            return {...state, countOfProduct: state.countOfProduct - 1}

        case "NULL_THIS_PRODUCT_COUNT":
            return {...state, countOfProduct: state.countOfProduct = 0}

        case "TEMPORARY_TRUE" :
            return {...state, temporary: state.temporary + 1 }

        case "TEMPORARY_FALSE" :
            return {...state, temporary: state.temporary - 1 }

        case "TEMPORARY_REMOVE" :
            return {...state, temporary: state.temporary = 1 }

        default:
            return state
    }
}
