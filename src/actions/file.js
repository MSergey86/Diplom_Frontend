import axios from 'axios'
import {setFiles} from "../reducers/fileReducer";


export function getFiles() {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:8000/api/files/`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setFiles(response.data))
            console.log(`Data: ${response.data}`)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}