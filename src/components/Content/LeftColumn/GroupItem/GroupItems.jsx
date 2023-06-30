import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './GroupItems.module.css'
import classNames from 'classnames'

export const GroupItems = (props) => {
  const [isActive, setIsActive] = useState("music");
  return (
    <div className={classes.Layer}>
      <div className={classes.header}>
        <div className={classNames(classes.headerItem, isActive == "music" ? classes.headerItemActive : classes.headerItemNotActive)}
          onClick={() => isActive != "music" && setIsActive("music")}
        >
          <span>Музыка</span>
        </div>
        <div className={classNames(classes.headerItem, isActive == "photo" ? classes.headerItemActive : classes.headerItemNotActive)}
          onClick={() => isActive != "photo" && setIsActive("photo")}
        >
          <span>Фото</span>
        </div>
        <div className={classNames(classes.headerItem, isActive == "clips" ? classes.headerItemActive : classes.headerItemNotActive)}
          onClick={() => isActive != "clips" && setIsActive("clips")}
        >
          <span>Клипы</span>
        </div>
        <div className={classNames(classes.headerItem, isActive == "article" ? classes.headerItemActive : classes.headerItemNotActive)}
          onClick={() => isActive != "article" && setIsActive("article")}
        >
          <span>Статьи</span>
        </div>
        <div className={classNames(classes.headerItem, isActive == "NFT" ? classes.headerItemActive : classes.headerItemNotActive)}
          onClick={() => isActive != "NFT" && setIsActive("NFT")}
        >
          <span>NFT</span>
        </div>
      </div>
      <div className={classes.groupContact}>
        {
          isActive == "photo" && <PhotoAlbum album={props.album} addPhoto={props.addPhoto} />
        }
        {isActive == "music" && <div className={classes.NotPresencs}>
          Вы ещё не добавили музыку
        </div>
        }
        {isActive == "clips" && <div className={classes.NotPresencs}>
          Вы ещё не добавили клипы
        </div>
        }
        {isActive == "article" && <div className={classes.NotPresencs}>
          Вы ещё не добавили статьи
        </div>
        }
        {isActive == "NFT" && <div className={classes.NotPresencs}>
          Вы ещё не добавили NFT
        </div>
        }
        
      </div>
    </div>

  )
}

const PhotoAlbum = (props) => {
  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      let image = URL.createObjectURL(e.target.files[0]);
      props.addPhoto(image)
    }
  }
  return (
    <div>
      <div className={classes.groupPhoto}>
        <div>
          {
            props.album.map(photo => {
              return <img src={photo.img} key={photo.id} />
            })
          }
        </div>
      </div>
      <div className={classes.footerBtn}>
        <input id="image" type={"file"} title={"Загрузить фото"} onChange={mainPhotoSelected} />
        <div className={classes.photoBtn}>
          <span>Загрузить фото</span>
        </div>
      </div>
    </div>
  )
}

const Content = ({ group, ...props }) => {
  return (
    <div>
      {group == "music" && <span>Вы ещё не добавили музыку</span>}
      {group == "photo" &&
        <div className={classes.groupPhoto}>
          <div>
            <img src={props.avatar} />
          </div>
          <div className={classes.footerBtn}>
            <button>fsnfl</button>

          </div>
        </div>
      }
      {group == "clips" && <span>Вы ещё не добавили клипы</span>}
      {group == "article" && <span>Вы ещё не добавили статью</span>}
      {group == "NFT" && <span>Вы ещё не добавили NFT</span>}
    </div>
  )
}
