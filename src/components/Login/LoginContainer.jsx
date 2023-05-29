import React from 'react'
import classes from "./Login.module.css"
import classname from "classnames"
import Logo from "../../assets/JSIcon.png"
import { Formik, Form, Field} from 'formik';
import { LoginThunkCreator, AuthThunkCreator } from '../../redux/authReducer';
import { requiredField } from '../../utils/validators';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';


const LoginForm = (props) => {
  const submit = (values, { setSubmitting }) => {
    props.LoginThunk(values.login, values.password, values.rememberMe, true)
    /*
    authAPI.login(values.login, values.password, values.rememberMe, true).then(data => {
      debugger
      if(data.resultCode === 0) {
        let {id, email, login} = data.data;
      }     
  })*/
    setTimeout(() => {
      <Navigate to={"/profile"}/>
      setSubmitting(false);
    }, 400);
  }

  const ValidateValues = (values) => {
    const errors = {};
    /*
    if(!values.password){
      errors.password = 'Required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(values.password)
    ) {
      errors.password = 'Invalid password';
    }*/
    if (!values.login) {
      errors.email = 'Required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(values.login)
    ) {
      errors.login = 'Invalid email address';
    }
    return errors;
  }

  return(
            <Formik
              initialValues={{ login: '', password: '', rememberMe: false }}
              onSubmit={submit}
              validate={ValidateValues}
            >
              {({errors, touched}) => (
                <Form>
                <div>
                  <Field validate={[requiredField]} className={classname(classes.Input, {[classes.ErrorInput]: errors.login && touched.login})} name={"login"} placeholder={'Телефон или почта'}/>
                </div>
                <div>
                  <Field validate={[requiredField]} className={classname(classes.Input, {[classes.ErrorInputPass]: errors.password && touched.password})} name={"password"} placeholder={'Пароль'}/>
                </div>
                <div>
                  <Field name={"rememberMe"} type={"checkbox"}/> Запомнить меня
                </div>
                <div>
                  <button className={classes.signBtn} type="submit">Войти</button>
                </div>
              </Form>
              )}             
            </Formik>
  )
}

export class LoginContainer extends React.Component {
  render() {
    return (
      <div className={classes.LoginForm}>       
          <div className={classes.LoginPanel}>                      
              <div className={classes.logoBlock}>
                  <div className={classes.logo}>
                    <img src={Logo} />
                  </div>
                  <span>Вход в JS net</span>
              </div>
              <LoginForm LoginThunk={this.props.LoginThunkCreator}/>
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




