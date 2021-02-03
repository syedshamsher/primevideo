import {
    FETCH_ALL_MEDIAS_REQUEST, FETCH_ALL_MEDIAS_SUCCESS, FETCH_ALL_MEDIAS_FAILURE,
    FETCH_MEDIA_SUCCESS, FETCH_MEDIA_SUCCESS2, FETCH_MEDIA_SUCCESS3,FETCH_MEDIA_REQUEST, FETCH_MEDIA_FAILURE,
    SEARCH_SUCCESS, SEARCH_REQUEST, SEARCH_FAILURE,
     ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST,CLEAR_WISHLIST} from "./actionTypes"

const initialState = {
    isLoading: false,
    error: null,
    medias: [],
    media1: [],
    media2: [],
    genre: [],
    currmedia: "",
    cast:[],
    crew:[]
}

export const mediasReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_MEDIAS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_ALL_MEDIAS_SUCCESS:
            const media1 = [...payload].sort((a, b) => b.vote_average - a.vote_average)
            const media2 = [...media1]
            media1.length = 20
            media2.length = 24

            return {
                ...state,
                medias: payload,
                media1: media1,
                media2: media2,
                isLoading: false
            }

        case FETCH_ALL_MEDIAS_FAILURE:
            return {
                ...state,
                error: true,
                isLoading: false
            }


        case FETCH_MEDIA_REQUEST: {
            console.log("request")
            return {
                ...state,
                isLoading: true,
                error: null
            }
        }

        case FETCH_MEDIA_SUCCESS: {
            console.log(payload)

            return {
                ...state,
                currmedia: payload
            }
        }

        case FETCH_MEDIA_SUCCESS2: {
            console.log(payload)

            return {
                ...state,
                cast: payload.cast,
                crew:payload.crew,
                isLoading: false
            }
        }

        case FETCH_MEDIA_FAILURE:
            return {
                ...state,
                error: true,
                isLoading: false
            }

        // case ADD_TO_CART: {
        //     const cart = state.cart
        //     console.log(payload)
        //     var flag = false
        //     if (cart.length == 0) {
        //         console.log("1")
        //         payload.quantity = 1
        //         flag = true
        //         return {
        //             ...state,
        //             cart: [payload]
        //         }

        //     }
        //     else {
        //         for (var i = 0; i < state.cart.length; i++) {
        //             console.log("2")
        //             if (payload._id == state.cart[i]._id) {
        //                 flag = true
        //                 cart[i].quantity++
        //                 return {
        //                     ...state,
        //                     cart: [...cart]
        //                 }
        //             }
        //         }
        //         if (flag == false) {
        //             console.log("3")
        //             payload.quantity = 1
        //             return {
        //                 ...state,
        //                 cart: [...cart, payload]
        //             }
        //         }
        //     }
        //     console.log(cart)
        // }
        // case REMOVE_FROM_CART:
        //     const cart = state.cart
        //     for (var i = 0; i < cart.length; i++) {
        //         if (payload == cart[i]._id) {
        //             cart[i].quantity--
        //             if (cart[i].quantity == 0) cart.splice(i, 1)
        //         }
        //     }
        //     return {
        //         ...state,
        //         cart: [...cart],
        //         error: true,
        //         isLoading: false
        //     }

        // case CLEAR_CART: {
        //     console.log("object54564")
        //     return {
        //         ...state,
        //         cart: []
        //     }
        // }



        default: return state
    }
}
