import axios from 'axios'

const BACKEND_URI = `http://localhost:5000/api/items/`

export const QUERY_LOADING = 'QUERY_LOADING'
export const FETCH_QUERY_SUCCESS = 'FETCH_QUERY_SUCCESS'
export const FETCH_QUERY_FAILURE = 'FETCH_QUERY_FAILURE'

export const BIN_LOADING = 'BIN_LOADING'
export const FETCH_BIN_SUCCESS = 'FETCH_BIN_SUCCESS'
export const FETCH_BIN_FAILURE = 'FETCH_BIN_FAILURE'

export const APPROVED_ITEMS_LOADING = 'APPROVED_ITEMS_LOADING'
export const FETCH_APPROVED_ITEMS_SUCCESS = 'FETCH_APPROVED_ITEMS_SUCCESS'
export const FETCH_APPROVED_ITEMS_FAILURE = 'FETCH_APPROVED_ITEMS_FAILURE'

export const TICKETS_LOADING = 'TICKETS_LOADING'
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS'
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE'

export const ADD_ITEM_STARTED = 'ADD_ITEM_STARTED'
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE'

export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS'
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_SUCCESS'

export const EDIT_ITEM_STARTED = 'EDIT_ITEM_STARTED'
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS'
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE'

export const APPROVE_TICKET_STARTED = 'APPROVE_TICKET_STARTED'
export const APPROVE_TICKET_SUCCESS = 'APPROVE_TICKET_SUCCESS'
export const APPROVE_TICKET_FAILURE = 'APPROVE_TICKET_FAILURE'


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
    type: QUERY_LOADING,
    loading: true
})

export const fetchQuerySuccess = items => ({
    type: FETCH_QUERY_SUCCESS,
    payload: [
        ...items
    ]
})

export const fetchQueryFailure = error => ({
    type: FETCH_QUERY_FAILURE,
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
    type: BIN_LOADING,
    loading: true
})

export const fetchBinSuccess = items => ({
    type: FETCH_QUERY_SUCCESS,
    payload: [
        ...items
    ]
})

export const fetchBinFailure = error => ({
    type: FETCH_QUERY_FAILURE,
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
    type: APPROVED_ITEMS_LOADING,
    loading: true
})

export const fetchApprovedSuccess = items => ({
    type: FETCH_APPROVED_ITEMS_SUCCESS,
    payload: [
        ...items
    ]
})

export const fetchApprovedFailure = error => ({
    type: FETCH_APPROVED_ITEMS_FAILURE,
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
    type: TICKETS_LOADING,
    loading: true
})

export const fetchTicketsSuccess = items => ({
    type: FETCH_TICKETS_SUCCESS,
    payload: [
        ...items
    ]
})

export const fetchTicketsFailure = error => ({
    type: FETCH_TICKETS_FAILURE,
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


//CREATE LOADING WHILE FETCHING DATA

export const addItemStarted = () => ({
    type: TICKETS_LOADING,
    loading: true
})

export const addItemSuccess = item => ({
    type: ADD_ITEM_SUCCESS,
    payload: {
        ...item
    }
})

export const addItemFailure = error => ({
    type: FETCH_TICKETS_FAILURE,
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
    type: REMOVE_ITEM_SUCCESS,
    payload: {
        ...item
    }
})

export const removeItemFailure = error => ({
    type: ADD_ITEM_FAILURE,
    payload: {
        error
    }
})

export const editItem = (id, name, description, bin) => {
    return dispatch => {
        dispatch(editItemStarted())
        axios.patch(`${BACKEND_URI}${id}`, { name, description, bin })
            .then(res => {
                dispatch(editItemSuccess(res.data))
            })
            .catch(err => {
                dispatch(editItemFailure(err.message))
            })
    }
}

export const editItemStarted = () => ({
    type: EDIT_ITEM_STARTED,
    loading: true
})

export const editItemSuccess = item => ({
    type: EDIT_ITEM_SUCCESS,
    payload: {
        ...item
    }
})

export const editItemFailure = error => ({
    type: EDIT_ITEM_FAILURE,
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
    type: APPROVE_TICKET_STARTED,
    loading: true
})

export const approveTicketSuccess = item => ({
    type: APPROVE_TICKET_SUCCESS,
    payload: {
        ...item
    }
})

export const approveTicketFailure = error => ({
    type: APPROVE_TICKET_FAILURE,
    payload: {
        error
    }
})
