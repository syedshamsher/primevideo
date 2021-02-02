import axios from "axios";
import { FETCH_ALL_PRODUCTS_REQUEST, FETCH_ALL_PRODUCTS_SUCCESS, FETCH_ALL_PRODUCTS_FAILURE,
     SEARCH_SUCCESS, SEARCH_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE,FETCH_PRODUCT_REQUEST,
     SEARCH_FAILURE,ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART } from "./actionTypes";

const fetchAllProductsRequest = () => ({
    type: FETCH_ALL_PRODUCTS_REQUEST
})

const fetchAllProductsSuccess = (payload) => ({
    type: FETCH_ALL_PRODUCTS_SUCCESS,
    payload
})

const fetchAllProductsFailure = (error) => ({
    type: FETCH_ALL_PRODUCTS_FAILURE,
    payload: error
})

const fetchProductRequest = () => ({
    type: FETCH_PRODUCT_REQUEST
    
})

const fetchProductSuccess = (payload) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload
})

const fetchProductFailure = (payload) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload
})

export const AddtoCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
})

export const RemovefromCart = (UID) => ({
    type: REMOVE_FROM_CART,
    payload: UID
})

export const clearCart = () => ({
    type: CLEAR_CART
})



export const fetchAllProducts = () => dispatch => {
    dispatch(fetchAllProductsRequest())
    const config = {
        method: 'get',
        url: `http://localhost:8001/api/medias`
    }
    return axios(config)
        .then((res) => {
            console.log(res.data)
            dispatch(fetchAllProductsSuccess(res.data))
            return true
        }).catch((err) => {
            dispatch(fetchAllProductsFailure(err))
        });
}

export const fetchProduct = (id) => dispatch => {
    dispatch(fetchProductRequest())
    console.log("req",id)
    const config = {
        method: 'get',
        url: `http://localhost:8001/api/products/product/${id}`
    }
    return axios(config)
        .then((res) => {
            console.log(res.data)
            dispatch(fetchProductSuccess(res.data))
            return true
        }).catch((err) => {
            console.log(err)
        });
}

export const updateProduct = (id,payload) => (dispatch) => {
    console.log(payload)
    const config = {
        method: 'put',
        url: `http://localhost:8001/api/products/${id}`,
        data:payload 
    }

    return axios(config).then((res)=>{
        console.log(res)
        return true
    }).catch((err)=>{
        console.log(err)
        return false
    })
}


export const deleteProduct = (id) => (dispatch) => {
    const config = {
        method: 'delete',
        url: `http://localhost:8001/api/products/${id}`,

    }

    return axios(config).then((res)=>{return true}).catch((err)=>{return false})
}



// export const searchReq = (payload) => (dispatch) => {
//     console.log("Initiating Search")
//     const config = {
//         method: 'get',
//         url: `https://pentagon-shine.herokuapp.com/jobs?q=${payload.query}`,
//     };

//     return axios(config).then((res) => {
//         console.log("result", res)
//         dispatch(fetchAllJobsSuccess(res.data))
//     })
// }
