import React from 'react'
import classes from "./Login.module.css"

export const Login = (props) => {
  return (
    <div className={classes.LoginForm}>       
        <div className={classes.LoginPanel}>                      
            <div className={classes.logoBlock}>
                <div className={classes.logo}>
                    <h1>JS</h1>
                </div>
                <span>Вход в JS net</span>
            </div>
            <input className={classes.Input} placeholder='Телефон или почта'></input>
            <button className={classes.signBtn}>Войти</button>
        </div>
    </div>
  )
}
