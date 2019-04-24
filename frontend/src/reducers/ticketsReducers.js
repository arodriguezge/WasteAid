import * as types from "../actions/actionTypes"

const initialState = {
    loading: false,
    error: null,
    data: [],
    success: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.APPROVED_ITEMS_LOADING:
            return ({
                ...state,
                loading: action.loading
            })
        case types.FETCH_APPROVED_ITEMS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                data: action.payload,
                success: true
            })
        case types.FETCH_APPROVED_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case types.TICKETS_LOADING:
            return ({
                ...state,
                loading: action.loading
            })
        case types.FETCH_TICKETS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                data: action.payload,
                success: true
            })
        case types.FETCH_TICKETS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case types.REMOVE_ITEM_SUCCESS:
            return Object.assign({}, state, {
                data: state.data.filter(item => item._id !== action.payload.item._id),
                success: true
            })
        case types.REMOVE_ITEM_FAILURE:
            return {
                error: action.payload.error
            }
        case types.EDIT_ITEM_STARTED:
            return {
                ...state,
                loading: true
            }
        case types.EDIT_ITEM_SUCCESS:
            let updatedData = []
            state.data.map(item => {
                if(item._id === action.payload.item._id){
                    item = action.payload.item
                }
                updatedData.push(item)
                return updatedData
            })
            return Object.assign({}, state, {
                data: updatedData,
                success: true,
                loading: false
            })
        case types.EDIT_ITEM_FAILURE:
            return {
                error: action.payload.error
            }
        case types.APPROVE_TICKET_STARTED:
            return {
                ...state,
                loading: true
            }
        case types.APPROVE_TICKET_SUCCESS:
            return Object.assign({}, state, {
                data: state.data.filter(item => item._id !== action.payload.item._id),
                success: true,
                loading: false
            })
        case types.APPROVE_TICKET_FAILURE:
            return {
                error: action.payload.error
            }
        default:
            return state 
    }
}