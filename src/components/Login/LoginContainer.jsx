import React from 'react'
import classes from "./Login.module.css"
import Logo from "../../assets/JSIcon.png"
import { Formik, Form } from 'formik';
import { LoginThunkCreator, AuthThunkCreator } from '../../redux/authReducer';
import { requiredField, ValidateEmail, ValidatePassword } from '../../utils/validators';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { CreateField, LoginInput, PasswordInput } from '../common/preloader/FormControl/FormControl';


const LoginForm = ({ LoginThunk }) => {
  const submit = (values, { setSubmitting, setStatus }) => {
    LoginThunk(values.login, values.password, values.rememberMe, true, setStatus)
    setTimeout(() => {
      <Navigate to={"/profile"} />
      setSubmitting(false);
    }, 400);
  }


  return (
    <Formik
      initialValues={{ login: '', password: '', rememberMe: false }}
      onSubmit={submit}
    >
      {({ errors, touched, isSubmitting, status }) => (
        <Form>
          {
            CreateField('Телефон или почта', "login", requiredField, LoginInput)
          }
          {
            CreateField('Пароль', "password", requiredField, PasswordInput, { type: "password" })
          }
          {
            CreateField(null, "rememberMe", requiredField, null, { type: "checkbox" }, "remember me")
          }
          <div className={classes.btn}>
            <button className={classes.signBtn}
              type="submit" disabled={isSubmitting}>
              Войти
            </button>
            {
              status && <span>{status.error}</span>
            }
          </div>
        </Form>
      )}
    </Formik>
  )
}

export class LoginContainer extends React.Component {

  render() {
    if (this.props.isAuth) {
      return <Navigate to={"/profile"} />
    }
    return (
      <div className={classes.LoginForm}>
        <div className={classes.LoginPanel}>
          <div className={classes.logoBlock}>
            <div className={classes.logo}>
              <img src={Logo} />
            </div>
            <span>Вход в JS net</span>
          </div>
          <LoginForm LoginThunk={this.props.LoginThunkCreator} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.AuthPage.isAuth,
    login: state.AuthPage.login,
    isFetching: state.AuthPage.isFetching,
    avatar: state.ProfilePage.AvatarImg
  }
}

export let Login = compose(
  connect(mapStateToProps, {
    LoginThunkCreator,
    AuthThunkCreator
  })
)(LoginContainer)




