import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CreateField, EditDefaultInput, LoginInput, MessageInput, SearchInput, StatusEditField, Textarea } from '../common/preloader/FormControl/FormControl';
import classes from './Edit.module.css';



const EditProfile = (props) => {
  useEffect(() => {
    props.getProfileStatus(props.userId)
  }, [])
  return (
    <div >
      <MainInfoEdit profile={props.profile} photo={props.defaultPhoto} />
      <AdditionalyInfoEdit status={props.status} profile={props.profile} saveProfile={props.saveProfile} updateStatus={props.updateStatus}/>
    </div>
  )
}




const MainInfoEdit = (props) => {
  return (
    <div className={classes.pageProfileEdit}>
      <div className={classes.header}>
        Профиль
      </div>
      <div className={classes.imageCover}>
      </div>
      <div className={classes.editAvatarPanel}>
        <div className={classes.editAvatar}>
          <img src={props.photo} />
        </div>
        <div className={classes.editName}>
          <div>
            {
              props.profile.fullName
            }
          </div>
          <div>
            <NavLink>Изменить в VK ID</NavLink>
          </div>
        </div>
      </div>
      <div className={classes.editNickname}>
        <div className={classes.editNicknameLabel}>
          Никнейм
        </div>
        <div className={classes.editNicknameTool}>
          <div>
            {
              "id: " + props.profile.userId
            }
          </div>
          <div className={classes.editNickNameHref}>
            <NavLink>Изменить</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}



const AdditionalyInfoEdit = ({profile, status, ...props}) => {
  const contacts = profile.contacts;
  const submit = (values, { setSubmitting, setStatus }) => {
    props.saveProfile(values, setStatus)
    props.updateStatus(values.status)
    //LoginThunk(values.login, values.password, values.rememberMe, true, setStatus)
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  }
  return (
    <div className={classes.addInfo}>
      <Formik
        initialValues={{ 
          status: status, 
          AboutMe: profile.aboutMe, lookingForAJob: profile.lookingForAJob, 
          lookingForAJobDescription: profile.lookingForAJobDescription, fullName: profile.fullName,
          contacts: {
            facebook: contacts.facebook, github: contacts.github, vk: contacts.vk, instagram: contacts.instagram,
            twitter: contacts.twitter, website: contacts.website, youtube: contacts.youtube, mainLink: contacts.mainLink,
          },
        }}
        onSubmit={submit}
        enableReinitialize= "true"
      >{({ status, values }) => (
        <Form>
          {
            status && status.success
              &&
              <div className={classes.submitSuccess}>
                <span>{status.success}</span>
                <p>Новые данные будут отражены на вашей странице.</p>
              </div>           
          }
          {
            status && status.error
              &&
              <div className={classes.submitUnsuccess}>
                <span>{status.error}</span>
                <p>Не корректные данные</p>
              </div>           
          }
          {
            <FieldCreator description={"Полное имя"}>{CreateField('', "fullName", null, EditDefaultInput)}</FieldCreator>
          }
          {
            <FieldCreator description={"Статус"}>{CreateField('', "status", null, StatusEditField)}</FieldCreator>
          }
          {
            <FieldCreator description={"Обо мне"}>{CreateField('', "AboutMe", null, StatusEditField)}</FieldCreator>
          }
          {
            <FieldCreator description={"Ищу работу"}>{CreateField(null, "lookingForAJob", null, null, { type: "checkbox" })}</FieldCreator>
          }
          {
            values.lookingForAJob &&
            <FieldCreator description={"Умения"}>{CreateField('', "lookingForAJobDescription", null, StatusEditField)}</FieldCreator>
          }
          <div className={classes.editProfileLine}></div>
          <div className={classes.formSubmitBtn}>
            <button type='submit'>Сохранить</button>
          </div>
        </Form>
      )}
      </Formik>
    </div>
  )
}

const FieldCreator = ({ description, children }) => {
  return <div className={classes.briefInfo}>
    <div className={classes.briefInfoLabel}>
      {description}:
    </div>
    {children}
  </div>
}

export default EditProfile;
