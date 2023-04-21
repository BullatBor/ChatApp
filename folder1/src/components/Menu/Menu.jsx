import React from 'react'
import  classes from "./Menu.module.css"
import {Link, NavLink, Router} from 'react-router-dom'

export const Menu = () => {
  return (
    <div className={classes.nav}>
        <div className={classes.item}>
          <NavLink to={"/profile"} className={({ isActive }) => (isActive && classes.activeLink)}>Профиль</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to={"/dialogs"} className={({ isActive }) => (isActive && classes.activeLink)}>Сообщения</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to={"/news"} className={({ isActive }) => (isActive && classes.activeLink)}>Новости</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to={"/music"} className={({ isActive }) => (isActive && classes.activeLink)}>Музыка</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to={"/settings"} className={({ isActive }) => (isActive && classes.activeLink)}>Настройки</NavLink>
        </div>
      </div>
  )
}
