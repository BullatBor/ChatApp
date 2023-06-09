import React, { useEffect, useState } from 'react'
import classes from './ProfileInfo.module.css'


export const ProfileStatusWithHooks = (props) => {
    let [isStatusShow, setStatusShow] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setStatusShow(true)
    }

    const deactivateEditMode = () => {
        setStatusShow(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={classes.status}>
            { !isStatusShow &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
                </div>
            }
            { isStatusShow &&
                <div className={classes.Input}>
                    <input onChange={onStatusChange} autoFocus={true} value={status}
                    onBlur={deactivateEditMode} ></input>
                </div>
            }
        </div>
    )
}

