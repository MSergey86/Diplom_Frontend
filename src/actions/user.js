import axios from 'axios'
import {setUser} from "../reducers/userReducer";
// import { createAsyncThunk } from '@reduxjs/toolkit';

export const registration = async (username, password) => {
    try {
        const response = await axios.post(`http://localhost:8000/register/`, {
            username,
            password
        })
        alert(`${response.statusText} ${username}`)
    } catch (e) {

        alert(e.response.data.message)
    }
}


//////////////////////////////////////////////////////////////////
export const login_action =  (username, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:8000/login/`, {
                username,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.user.token)
            localStorage.setItem('id', Number(response.data.user.id))
            alert(`${response.statusText} ${username}`)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:8000/api/users/${sessionStorage.getItem('id')}/`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.user.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}

////////////////////////////////////////////////////////////////////////
export const user_logout =  () => {
    return async dispatch => {
        try {
            await axios.get(`http://localhost:8000/logout/`, {
            })
            sessionStorage.clear();
            alert("очистили сессию")
        } catch (e) {
            throw new Error('Logout failed');
        }
    }
}


