import classNames from "classnames";
import React from "react";
import classes from "./FromControl.module.css"


export const FormControl = ({field, form, children, ...props}) => {
    return (
        <div>
            {props.children}
        </div>
    )
}


export const Textarea = ({field, form, ...props}) => {
    return (
        <div>
            <textarea {...field} {...props}/>
        </div>
    )
}


export const LoginInput = ({field, form, ...props}) => {
    return (
        <div className={classes.Inputs}>
            <div >
                <input className={classNames(classes.Input, {[classes.ErrorInput]: form.errors.login && form.touched.login})} {...field} {...props}/>
            </div>
            {
                form.touched.login && form.errors.login === "Обязательное поле" && <span>{form.errors.login}</span>
            }
            
        </div>
    )
}

export const PasswordInput = ({field, form, ...props}) => {
      return (
          <div className={classes.Inputs}>
              <div>
                  <input className={classNames(classes.Input, {[classes.ErrorInput]: form.errors.password && form.touched.password})} 
                  {...field} {...props}
                  />
              </div>
              {
                   form.touched.password && form.errors.password === "Обязательное поле" && <span>{form.errors.password}</span>
              }
              
          </div>
      )
  }


  export const MessageInput = ({field, form, ...props}) => {
    return (
        <div className={classes.Inputs}>
            <div>
                <input className={classes.messageInput} 
                {...field} {...props}
                />
            </div>
        </div>
    )
}