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


export const resetItemsState = () => ({
    type: types.RESET_ITEMS,
    loading: false
})