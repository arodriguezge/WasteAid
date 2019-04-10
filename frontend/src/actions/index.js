import axios from 'axios'
import * as types from './actionTypes'

const BACKEND_URI = `http://localhost:5000/api/items/`


export const fetchQuery = (query) => {
    return dispatch => {
        dispatch(queryLoading())
        axios.get(`${BACKEND_URI}`, { params: {
            q: query
        }})
            .then(res => {
                dispatch(fetchQuerySuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchQueryFailure(err.message))
            })
    }
}

export const queryLoading = () => ({
    type: types.QUERY_LOADING,
    loading: true
})

export const fetchQuerySuccess = items => ({
    type: types.FETCH_QUERY_SUCCESS,
    payload: [
        ...items
    ]
})

export const fetchQueryFailure = error => ({
    type: types.FETCH_QUERY_FAILURE,
    payload: [
        error
    ]
})

export const fetchBin = (colorBin) => {
    return dispatch => {
        dispatch(binLoading())
        axios.get(`${BACKEND_URI}`, { params: {
            bin: colorBin
        }})
            .then(res => {
                dispatch(fetchBinSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchBinSuccess(err.message))
            })
    }
}

export const binLoading = () => ({
    type: types.BIN_LOADING,
    loading: true
})

export const fetchBinSuccess = items => ({
    type: types.FETCH_QUERY_SUCCESS,
    payload: [
        ...items
    ]
})

export const fetchBinFailure = error => ({
    type: types.FETCH_QUERY_FAILURE,
    payload: [
        error
    ]
})

export const fetchApprovedItems = () => {
    return dispatch => {
        dispatch(ApprovedItemsLoading())
        axios.get(`${BACKEND_URI}`, { params: {
            approved: true
        }})
            .then(res => {
                console.log(res.data)
                dispatch(fetchApprovedSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchApprovedFailure(err.message))
            })
    }
}

export const ApprovedItemsLoading = () => ({
    type: types.APPROVED_ITEMS_LOADING,
    loading: true
})

export const fetchApprovedSuccess = items => ({
    type: types.FETCH_APPROVED_ITEMS_SUCCESS,
    payload: [
        ...items
    ]
})

export const fetchApprovedFailure = error => ({
    type: types.FETCH_APPROVED_ITEMS_FAILURE,
    payload: [
        error
    ]
})

export const fetchTickets = () => {
    return dispatch => {
        dispatch(ticketsLoading())
        axios.get(`${BACKEND_URI}`, { params: {
            approved: false
        }})
            .then(res => {
                dispatch(fetchTicketsSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchTicketsFailure(err.message))
            })
    }
}

export const ticketsLoading = () => ({
    type: types.TICKETS_LOADING,
    loading: true
})

export const fetchTicketsSuccess = items => ({
    type: types.FETCH_TICKETS_SUCCESS,
    payload: [
        ...items
    ]
})

export const fetchTicketsFailure = error => ({
    type: types.FETCH_TICKETS_FAILURE,
    payload: [
        error
    ]
})

export const addItem = ( name, description, bin ) => {
    return dispatch => {
        dispatch(addItemStarted())
        axios.post(`${BACKEND_URI}`, { name, description, bin, completed: false })
            .then(res => {
                dispatch(addItemSuccess(res.data))
            })
            .catch(err => {
                dispatch(addItemFailure(err.message))
            })
    }
}

export const addItemStarted = () => ({
    type: types.TICKETS_LOADING,
    loading: true
})

export const addItemSuccess = item => ({
    type: types.ADD_ITEM_SUCCESS,
    payload: {
        ...item
    }
})

export const addItemFailure = error => ({
    type: types.FETCH_TICKETS_FAILURE,
    payload: [
        error
    ]
})

export const removeItem = (id) => {
    return dispatch => {
        axios.delete(`${BACKEND_URI}${id}`)
            .then(res => {
                dispatch(removeItemSuccess(res.data))
            })
            .catch(err => {
                dispatch(removeItemFailure(err.message))
            })
    }
}

export const removeItemSuccess = item => ({
    type: types.REMOVE_ITEM_SUCCESS,
    payload: {
        ...item
    }
})

export const removeItemFailure = error => ({
    type: types.ADD_ITEM_FAILURE,
    payload: {
        error
    }
})

export const editItem = (id, name, description, bin, category) => {                 // added category
    return dispatch => {
        dispatch(editItemStarted())
        axios.patch(`${BACKEND_URI}${id}`, { name, description, bin, category })    // added category
            .then(res => {
                dispatch(editItemSuccess(res.data))
            })
            .catch(err => {
                dispatch(editItemFailure(err.message))
            })
    }
}

export const editItemStarted = () => ({
    type: types.EDIT_ITEM_STARTED,
    loading: true
})

export const editItemSuccess = item => ({
    type: types.EDIT_ITEM_SUCCESS,
    payload: {
        ...item
    }
})

export const editItemFailure = error => ({
    type: types.EDIT_ITEM_FAILURE,
    payload: {
        error
    }
})

export const approveTicket = (id) => {
    return dispatch => {
        dispatch(approveTicketStarted())
        axios.patch(`${BACKEND_URI}${id}`, { approved: true })
            .then(res => {
                dispatch(approveTicketSuccess(res.data))
            })
            .catch(err => {
                dispatch(approveTicketFailure(err.message))
            })
    }
}

export const approveTicketStarted = () => ({
    type: types.APPROVE_TICKET_STARTED,
    loading: true
})

export const approveTicketSuccess = item => ({
    type: types.APPROVE_TICKET_SUCCESS,
    payload: {
        ...item
    }
})

export const approveTicketFailure = error => ({
    type: types.APPROVE_TICKET_FAILURE,
    payload: {
        error
    }
})

export const resetItemsState = () => ({
    type: types.RESET_ITEMS,
    loading: false
})