import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Edit.module.css'

export const EditMenu = () => {
    return (
        <div className={classes.editMenu}>
            <div className={classes.personalInfoMenu}>
                Личные данные
            </div>
            <div className={classes.editLine}></div>
            <div className={classes.editPageList}>
                <NavLink to={'/edit/profileEdit'}>
                    Профиль
                </NavLink>
                <NavLink to={'/edit/contactsEdit'}>
                    Контакты
                </NavLink>
            </div>
        </div>
    )
}
