import { ORDER_REQUEST,ORDER_SUCCESS,ORDER_FAILURE,ADD_ORDER} from "./actionTypes"
import axios from "axios"
const orderRequest = (uname, pass) => {
    return {
        type: ORDER_REQUEST,
        payload: {
            username: uname,
            password: pass
        }
    }
}
const orderSuccess = (payload) => {
    return {
        type: ORDER_SUCCESS,
        payload: payload
    }
}

const orderFailure = (error) => {
    return {
        type: ORDER_FAILURE,
        payload: error
    }
}




    export const Paymentreq = (payload) => (dispatch) => {
        console.log("as",payload)
       const config = {
           method: 'POST',
           url: "http://localhost:8001/orders",
           data: {
               amount:payload.amount,
               userData:payload.userData,
               billnum:payload.billnum,
               cart:payload.cart
           }
       };
       return axios(config).then((res) => {
           console.log(res)
           return res }).catch((res) => {
           console.log("error", res)
           return res           
       })
   }
   
   export const orderAdd= (payload) => (dispatch) => {
    console.log("as",payload)
   const config = {
       method: 'POST',
       url: "http://localhost:8001/addorder",
       data: {
           amount:payload.amount,
           userData:payload.userData,
           billnum:payload.billnum,
           cart:payload.cart
       }
   };
   return axios(config).then((res) => {
       console.log(res)
       return res }).catch((res) => {
       console.log("error", res)
       return res           
   })
}

