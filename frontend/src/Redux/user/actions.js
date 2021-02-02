import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  LOCATION_SUCCESS,
  LOCATION_FAILURE,
  SET_REGISTER,
} from "./actionTypes";
import axios from "axios";
const loginRequest = (uname, pass) => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      username: uname,
      password: pass,
    },
  };
};
const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload: payload,
  };
};

const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};
const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload: payload,
  };
};

const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    payload: error,
  };
};

const locationSuccess = (payload) => {
  return {
    type: LOCATION_SUCCESS,
    payload: payload,
  };
};
const locationFailure = (error) => {
  return {
    type: LOCATION_FAILURE,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const setRegister = (payload) => {
  return {
    type: SET_REGISTER,
    payload: payload,
  };
};

export const Loginreq = (email, pass) => (dispatch) => {
  dispatch(loginRequest(email, pass));
  const config = {
    method: "POST",
    url: "http://localhost:8001/api/login",
    data: {
      email: email,
      password: pass,
    },
  };

  return axios(config)
    .then((res) => {
      console.log(res.data.accesstoken);
      return axios({
        method: "GET",
        url: "http://localhost:8001/api/users",
        headers: {
          authorization: `Bearer ${res.data.accesstoken}`,
        },
      })
        .then((res) => {
          console.log("logged in", res.data[0]);
          dispatch(loginSuccess(res.data[0]));
          return true;
        })
        .catch((res) => {
          console.log("error", res.response.data);
          dispatch(loginFailure(res.response.data));
        });
    })
    .catch((res) => {
      console.log("error", res.response.data);
      dispatch(loginFailure(res.response.data));
    });
};

export const Regreq = (payload) => (dispatch) => {
  dispatch(registerRequest());
  const config = {
    method: "post",
    url: "http://localhost:8001/api/users",
    data: payload,
  };

  return axios(config)
    .then((res) => {
      console.log(res);
      dispatch(setRegister(true));
      dispatch(registerSuccess(res.data.user));
      return true;
    })
    .catch((res) => {
      console.log("error", res.response.data);
      dispatch(registerFailure(res.response.data));
    });
};

export const locationRequest = (lat, lon) => (dispatch) => {
  const config = {
    method: "get",
    url: `http://api.positionstack.com/v1/reverse?access_key=f96b3362dc68e6e5593e173333a49d96&query=${lat},${lon}`,
  };
  console.log("1231", lat, lon);
  return axios(config)
    .then((res) => {
      console.log("loc", res.data.data);
      dispatch(locationSuccess(res.data.data[0]));
      return true;
    })
    .catch((err) => {
      console.log("error", err);
      dispatch(locationFailure(err));
    });
};

export const addOrder = (id, payload) => (dispatch) => {
  const config = {
    method: "put",
    url: `http://localhost:8001/api/users/orderAdd/${id}`,
    data: payload,
  };

  return axios(config)
    .then((res) => {
      console.log("Order Add Success");
      return true;
    })
    .catch((res) => {
      console.log("error", res.response.data);
    });
};
