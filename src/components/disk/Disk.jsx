import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { getFiles } from "../../actions/file";
import FileList from "./fileList/FileList";
import './disk.css'

const Disk = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFiles())
    },)

    return (
        <div className="disk">
            <div className="disk__btns">
            </div>
            <FileList/>
        </div>
    )
}

export default Disk