import * as types from "../actions/actionTypes"

const initialState = {
    loading: false,
    error: null,
    username: '', //CHECK IF THIS SHOULD BE '' OR NULL OR WHAT
    success: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_LOADING:
            return ({
                ...state,
                loading: action.loading
            })
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                username: action.payload,
                success: true
            })
        case types.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}