import React from 'react'
import classes from "./Menu.module.css"
import { Link, NavLink, Router } from 'react-router-dom'

export const Menu = () => {
  return (
      <div className={classes.nav}>
        <NavLink to={"/profile"} className={({ isActive }) => (isActive ? classes.activeLink : classes.notActiveLink)}>
          <div className={classes.item}>
            Моя страница
          </div>
        </NavLink>
        <NavLink to={"/news"} className={({ isActive }) => (isActive ? classes.activeLink : classes.notActiveLink)}>
          <div className={classes.item}>
            Новости
          </div>
        </NavLink>
        <NavLink to={"/dialogs"} className={({ isActive }) => (isActive ? classes.activeLink : classes.notActiveLink)}>
          <div className={`${classes.item} ${classes.active}`}>
            Сообщения
          </div>
        </NavLink>
        <NavLink to={"/friends"} className={({ isActive }) => (isActive ? classes.activeLink : classes.notActiveLink)}>
          <div className={`${classes.item} ${classes.active}`}>
            Друзья
          </div>
        </NavLink>
        <NavLink to={"/music"} className={({ isActive }) => (isActive ? classes.activeLink : classes.notActiveLink)}>
          <div className={classes.item}>
            Музыка
          </div>
        </NavLink>
        <NavLink to={"/settings"} className={({ isActive }) => (isActive ? classes.activeLink : classes.notActiveLink)}>
          <div className={classes.item}>
            Настройки
          </div>
        </NavLink>
      </div>
  )
}
