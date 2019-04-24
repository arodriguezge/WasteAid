import * as types from "../actions/actionTypes"

const initialState = {
    loading: false,
    error: null,
    data: [],
    success: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.RESET_ITEMS: 
            return initialState
        case types.QUERY_LOADING:
            return ({
                ...state,
                loading: action.loading
            })
        case types.FETCH_QUERY_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                data: action.payload,
                success: true
            })
        case types.FETCH_QUERY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case types.BIN_LOADING:
            return ({
                ...state,
                loading: action.loading
            })
        case types.FETCH_BIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                data: action.payload,
                success: true
            })
        case types.FETCH_BIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case types.ADD_ITEM_STARTED:
            return {
                ...state,
                loading: true
            }
        case types.ADD_ITEM_SUCCESS:
            //CHECK THIS ONE
            return {
                ...state,
                loading: false,
                error: null,
                success: true
            }
        case types.ADD_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}