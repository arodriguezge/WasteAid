import axios from 'axios'
import decode from "jwt-decode";
import * as types from './actionTypes'

const BACKEND_URI = `http://localhost:5000/api/users/`

export const login = (username, password, history) => {
    return dispatch => {
        dispatch(loginLoading())
        axios.post(`${BACKEND_URI}login`, { params: {
            username,
            password
        }})
            .then(res => {
                localStorage.setItem('token', res.data.token)
                let decoded = decode(res.data.token)
                history.push('/admin/frame')
                dispatch(loginSuccess(decoded.user))
            })
            .catch(err => {
                dispatch(loginFailure(err.message))
            })
    }
}

export const loginLoading = () => ({
    type: types.LOGIN_LOADING,
    loading: true
})

export const loginSuccess = user => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})

export const loginFailure = error => ({
    type: types.LOGIN_FAILURE,
    payload: [
        error
    ]
})