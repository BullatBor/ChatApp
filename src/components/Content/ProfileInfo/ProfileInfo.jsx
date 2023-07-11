import React, { useState } from 'react'
import classes from './ProfileInfo.module.css'
import moreIcon from '../../../assets/down.png'
import closeModal from '../../../assets/close.png'
import User from '../../../assets/userIcon.png'
import defaultPhoto from "../../../assets/ava.png"
import { NavLink } from 'react-router-dom'
import { Modal } from './Modal/Modal'

export const ProfileInfo = ({ profile, status, ...props }) => {
  const [modalActive, setModalActive] = useState(false)
  const [editPhotoActive, setEditPhotoActive] = useState(false)

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  const editPhotoActiveModal = () => {
    if (props.isOwner) {
      if (editPhotoActive) setEditPhotoActive(false)
      else setEditPhotoActive(true)
    }
  }
  return (
    <div className={classes.Profile}>
      <div className={classes.mainImage}>

      </div>
      <div className={classes.descriptionBlock}>
        <div className={classes.avatarBack} onMouseLeave={editPhotoActiveModal} >
          <img src={profile.photos.large || defaultPhoto} onMouseEnter={editPhotoActiveModal} />
          {
            editPhotoActive &&
            <div className={classes.editPhoto}>
              <input type={"file"} onChange={mainPhotoSelected} className={classes.custom_file_input} />
            </div>
          }
        </div>
        <div className={classes.ProfileInfo}>
          <h2 className={classes.ProfileInfo_Name}>{profile.fullName}</h2>
          <div className={classes.status}>
            <span>{status || "No status"}</span>
          </div>
          <div className={classes.contacts}>
            <span onClick={() => setModalActive(true)}>Подробнее</span>
          </div>
        </div>
        <div className={classes.panelBtns}>
          {
            props.isOwner
              ?
              <div className={classes.editPanel}>
                <NavLink to={"/edit"} className={classes.editNavlink}>
                  <div className={classes.editBtn}>
                    <span>Редактировать профиль</span>
                  </div>
                </NavLink>
                <div className={classes.moreBtn}>
                  <p>Ещё</p>
                  <img src={moreIcon} />
                </div>
              </div>
              :
              <div className={classes.editPanel}>
                <div className={classes.messageBtn}>
                  <a><span>Сообщение</span></a>
                </div>
                <div className={classes.friendBtn}>
                  <img src={User} />
                </div>
                <div className={classes.moreBtn}>
                  <p>Ещё</p>
                  <img src={moreIcon} />
                </div>
              </div>
          }
        </div>
      </div>
      {
        <Modal active={modalActive} setActive={setModalActive}>
          <AdditionalInfoModal profile={profile} status={status} setActive={setModalActive} />
        </Modal>

      }
    </div>

  )
}


const AdditionalInfoModal = ({ profile, status, setActive, ...props }) => {
  return (
    <div className={classes.AdditionalInfoModal}>
      <div className={classes.headerInfo}>
        <div className={classes.headerTitle}>
          Подробная информация
        </div>
        <div className={classes.close} onClick={() => setActive(false)}>
          <img src={closeModal} />
        </div>
      </div>
      <div className={classes.fullInfo}>
        <div className={classes.infoBlocks}>
          {
            <div>
              {
                <div className={classes.statusBlock}>
                  {status}
                </div>

              }
              {
                <div className={classes.idBlock}>
                  Id: <NavLink onClick={() => setActive(false)}>
                    id{profile.userId}
                  </NavLink>
                </div>
              }
            </div>

          }
        </div>
        <div className={classes.personalInfo}>
          <div className={classes.infoBlocks}>
            <div className={classes.contactsLabel}>
              <h3>Личная информация</h3>
            </div>
            {
              <div>
                <div className={classes.statusBlock}>
                  Обо мне: <span>{profile.aboutMe}</span>
                </div>
                <div className={classes.statusBlock}>
                  Ищу работу: {profile.lookingForAJob ? <span>Да</span> : <span>Нет</span>}
                </div>
                {
                  profile.lookingForAJob &&
                  <div className={classes.statusBlock}>
                    Описание работы: {profile.lookingForAJobDescription}
                  </div>
                }
              </div>
            }
          </div>
        </div>
        <div>
          <div className={classes.contactsInfo}>
            <div className={classes.contactsLabel}>
              <h3>Контакты</h3>
            </div>
            {
              <div>
                {Object.keys(profile.contacts).map(key => {
                  return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.statusBlock}>
      {contactTitle} :  {" "}
      <a href={contactValue}><span>{contactValue}</span></a>
    </div>
  )
}