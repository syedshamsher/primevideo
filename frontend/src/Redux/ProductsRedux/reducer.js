import {
    FETCH_ALL_PRODUCTS_REQUEST, FETCH_ALL_PRODUCTS_SUCCESS, FETCH_ALL_PRODUCTS_FAILURE,
    SEARCH_SUCCESS, SEARCH_REQUEST, SEARCH_FAILURE, ADD_TO_CART, REMOVE_FROM_CART,
    CLEAR_CART, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_REQUEST
} from "./actionTypes"

const initialState = {
    isLoading: false,
    error: null,
    products: [],
    bestoffers: [],
    moreoffers: [],
    categories: [],
    cart: [],
    currimage: "",
    currproduct: null
}

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_ALL_PRODUCTS_SUCCESS:
            var cat = []
            const products2 = [...payload].sort((a, b) => b.vote_average - a.vote_average)
            const products3 = [...products2]
            products2.length = 10
            products3.length = 24

            return {
                ...state,
                products: payload,
                bestoffers: products2,
                moreoffers: products3,
                
                isLoading: false
            }
        case FETCH_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                error: true,
                isLoading: false
            }
        case ADD_TO_CART: {
            const cart = state.cart
            console.log(payload)
            var flag = false
            if (cart.length == 0) {
                console.log("1")
                payload.quantity = 1
                flag = true
                return {
                    ...state,
                    cart: [payload]
                }

            }
            else {
                for (var i = 0; i < state.cart.length; i++) {
                    console.log("2")
                    if (payload._id == state.cart[i]._id) {
                        flag = true
                        cart[i].quantity++
                        return {
                            ...state,
                            cart: [...cart]
                        }
                    }
                }
                if (flag == false) {
                    console.log("3")
                    payload.quantity = 1
                    return {
                        ...state,
                        cart: [...cart, payload]
                    }
                }
            }
            console.log(cart)
        }
        case REMOVE_FROM_CART:
            const cart = state.cart
            for (var i = 0; i < cart.length; i++) {
                if (payload == cart[i]._id) {
                    cart[i].quantity--
                    if (cart[i].quantity == 0) cart.splice(i, 1)
                }
            }
            return {
                ...state,
                cart: [...cart],
                error: true,
                isLoading: false
            }

        case CLEAR_CART: {
            console.log("object54564")
            return {
                ...state,
                cart: []
            }
        }

        case FETCH_PRODUCT_REQUEST: {
console.log("request")
            return {
                ...state,
                isLoading: true,
                currimage:null
            }
        }

        case FETCH_PRODUCT_SUCCESS: {
            console.log("object54564")
            payload.image = payload.image.split(",")
            payload.offer = Math.floor(Number(payload.offer))
            payload.category = payload.category.split(",")
            setTimeout(function () {
                return {
                    ...state,
                    currproduct: payload,
                    currimage: payload.image[0],
                    isLoading: false
                }
            }, 3000);

        }

        default: return state
    }
}
