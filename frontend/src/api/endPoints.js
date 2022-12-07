export const URL = "http://127.0.0.1:3001";

const endPoint = {
    LOGIN_C: `${URL}/login/c`,
    LOGIN_W: `${URL}/login/w`,
    SIGNUP_C: `${URL}/signup/c`,
    SIGNUP_W: `${URL}/signup/w`,
    UPDATE_PROFILE_C: `${URL}/update-profile/c`,
    UPDATE_PROFILE_W: `${URL}/update-profile/w`,
    DELETE_PROFILE_C: `${URL}/delete-profile/c`,
    DELETE_PROFILE_W: `${URL}/delete-profile/w`,
    SEARCH_WORKER: `${URL}/order/search`,
    PLACE_ORDER: `${URL}/place-order`,
    UPDATE_REQUEST_STATUS: `${URL}/update-request-status`,
    UPDATE_STATUS: `${URL}/update-status`,
    GET_ORDER_C: `${URL}/order/get-c`,
    GET_ORDER_W: `${URL}/order/get-w`
}

export default endPoint;