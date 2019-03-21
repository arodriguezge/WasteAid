import {
    QUERY_LOADING,
    FETCH_QUERY_SUCCESS,
    FETCH_QUERY_FAILURE,
    BIN_LOADING,
    FETCH_BIN_SUCCESS,
    FETCH_BIN_FAILURE,
    APPROVED_ITEMS_LOADING,
    FETCH_APPROVED_ITEMS_SUCCESS,
    FETCH_APPROVED_ITEMS_FAILURE,
    TICKETS_LOADING,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAILURE,
    ADD_ITEM_STARTED,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    REMOVE_ITEM_SUCCESS,
    REMOVE_ITEM_FAILURE,
    EDIT_ITEM_STARTED,
    EDIT_ITEM_SUCCESS,
    EDIT_ITEM_FAILURE,
    APPROVE_TICKET_STARTED,
    APPROVE_TICKET_SUCCESS,
    APPROVE_TICKET_FAILURE
} from "../actions/index"


const initialState = {
    loading: false,
    error: null,
    data: [],
    success: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case QUERY_LOADING:
            return ({
                ...state,
                loading: action.loading
            })
        case FETCH_QUERY_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                data: action.payload
            })
        case FETCH_QUERY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case BIN_LOADING:
            return ({
                ...state,
                loading: action.loading
            })
        case FETCH_BIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                data: action.payload
            })
        case FETCH_BIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case APPROVED_ITEMS_LOADING:
            return ({
                ...state,
                loading: action.loading
            })
        case FETCH_APPROVED_ITEMS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                data: action.payload
            })
        case FETCH_APPROVED_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case TICKETS_LOADING:
            return ({
                ...state,
                loading: action.loading
            })
        case FETCH_TICKETS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                data: action.payload
            })
        case FETCH_TICKETS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case ADD_ITEM_STARTED:
            return {
                ...state,
                loading: true
            }
        case ADD_ITEM_SUCCESS:
            //CHECK THIS ONE
            return {
                ...state,
                loading: false,
                error: null,
                success: true
            }
        case ADD_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case REMOVE_ITEM_SUCCESS:
            return Object.assign({}, state, {
                data: state.data.filter(item => item._id !== action.payload.item._id),
                success: true
            })
        case REMOVE_ITEM_FAILURE:
            return {
                error: action.payload.error
            }
        case EDIT_ITEM_STARTED:
            return {
                ...state,
                loading: true
            }
        case EDIT_ITEM_SUCCESS:
            let updatedData = []
            state.data.map(item => {
                if(item._id === action.payload.item._id){
                    item = action.payload.item
                }
                updatedData.push(item)
            })
            return Object.assign({}, state, {
                data: updatedData,
                success: true
            })
        case EDIT_ITEM_FAILURE:
            return {
                error: action.payload.error
            }
        case APPROVE_TICKET_STARTED:
            return {
                ...state,
                loading: true
            }
        case APPROVE_TICKET_SUCCESS:
            return Object.assign({}, state, {
                data: state.data.filter(item => item._id !== action.payload.item._id),
                success: true
            })
        case APPROVE_TICKET_FAILURE:
            return {
                error: action.payload.error
            }
        default:
            return state
    }
}