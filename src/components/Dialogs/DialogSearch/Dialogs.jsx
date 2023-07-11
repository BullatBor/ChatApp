import React from 'react'
import classes from '../Dialogs.module.css'


export const DialogsSearch = () => {
  return(
    <div className={classes.searchBlock}>
      <input className={classes.SearchInput} placeholder='Поиск'></input>
    </div>
  )
}

