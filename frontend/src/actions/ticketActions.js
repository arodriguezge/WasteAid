import axios from 'axios'
import * as types from './actionTypes'

const BACKEND_URI = `http://localhost:5000/api/admin/tickets/`

export const fetchApprovedItems = (token, history) => {
    return dispatch => {
        dispatch(ApprovedItemsLoading())
        if(!token) {
            history.push('/admin/login')
        }
        axios.get(`${BACKEND_URI}`, {
            headers: { Authorization: `Bearer ${token}` }
        }, { 
            params: { approved: true }
        })
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

export const fetchTickets = (token, history) => {
    return dispatch => {
        dispatch(ticketsLoading())
        if(!token) {
            history.push('/admin/login')
        }
        axios.get(`${BACKEND_URI}`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { approved: false }
        })
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
    type: types.REMOVE_ITEM_FAILURE,
    payload: {
        error
    }
})

export const editItem = (id, name, description, bin, category) => {
    return dispatch => {
        dispatch(editItemStarted())
        axios.patch(`${BACKEND_URI}${id}`, { name, description, bin, category })
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