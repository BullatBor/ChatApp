import React from 'react'
import classes from './Modal.module.css'


export const Modal = ({ active, setActive, children, ...props }) => {

  return (
    <div className={active ? classes.modalForm + " " + classes.active : classes.modalForm} onClick={() => setActive(false)}>
      <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>

  )
}
