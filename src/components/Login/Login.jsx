import React from 'react'
import classes from "./Login.module.css"
import Logo from "../../assets/JSIcon.png"
import { Formik} from 'formik';


const LoginForm = (props) => {
  const submit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }
  return(
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={submit}
            >
              <form>
                <div>
                  <input className={classes.Input} name={"login"} placeholder={'Телефон или почта'}/>
                </div>
                <div>
                  <input className={classes.Input} name={"password"} placeholder={'Пароль'}/>
                </div>
                <div>
                  <input name={"rememberMe"} type={"checkbox"}/> Запомнить меня
                </div>
                <div>
                  <button className={classes.signBtn}>Войти</button>
                </div>
              </form>
            </Formik>
  )
}

export const Login = (props) => {
  return (
    <div className={classes.LoginForm}>       
        <div className={classes.LoginPanel}>                      
            <div className={classes.logoBlock}>
                <div className={classes.logo}>
                  <img src={Logo} />
                </div>
                <span>Вход в JS net</span>
            </div>
            <LoginForm/>
        </div>
    </div>
  )
}



