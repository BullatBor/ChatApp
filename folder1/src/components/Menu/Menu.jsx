import React from 'react'
import  classes from "./Menu.module.css"

export const Menu = () => {
  return (
    <div className={classes.nav}>
        <div className={classes.item}>
          <a href='#'>Профиль</a>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <a >Сообщения</a>
        </div>
        <div className={classes.item}>
          <a href='#'>Новости</a>
        </div>
        <div className={classes.item}>
          <a href='#'>Музыка</a>
        </div>
        <div className={classes.item}>
          <a href='#'>Настройки</a>
        </div>
      </div>
  )
}
