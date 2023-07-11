import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './GroupItems.module.css'
import classNames from 'classnames'

export const GroupItems = (props) => {
  const [isActive, setIsActive] = useState("music");
  return (
    <div className={classes.Layer}>
      <div className={classes.header}>
        <GroupItemDefault name={"Музыка"} item={"music"} isActive={isActive} setIsActive={setIsActive} />
        <GroupItemDefault name={"Фото"} item={"photo"} isActive={isActive} setIsActive={setIsActive} />
        <GroupItemDefault name={"Клипы"} item={"clips"} isActive={isActive} setIsActive={setIsActive} />
        <GroupItemDefault name={"Статьи"} item={"article"} isActive={isActive} setIsActive={setIsActive} />
        <GroupItemDefault name={"NFT"} item={"NFT"} isActive={isActive} setIsActive={setIsActive} />
      </div>
      <div className={classes.groupContact}>
        {
          isActive == "photo" && <PhotoAlbum album={props.album} addPhoto={props.addPhoto} isOwner={props.isOwner} />
        }
        {isActive == "music" && <div className={classes.NotPresencs}>
          {
            props.isOwner ? <span>Вы ещё не добавили музыку</span> : <span>Нет музыки</span>
          }
        </div>
        }
        {isActive == "clips" && <div className={classes.NotPresencs}>
          {
            props.isOwner ? <span>Вы ещё не добавили клипы</span> : <span>Нет клипов</span>
          }
        </div>
        }
        {isActive == "article" && <div className={classes.NotPresencs}>
          {
            props.isOwner ? <span>Вы ещё не добавили статьи</span> : <span>Нет статей</span>
          }
        </div>
        }
        {isActive == "NFT" && <div className={classes.NotPresencs}>
          {
            props.isOwner ? <span>Вы ещё не добавили NFT</span> : <span>Нет NFT</span>
          }
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
              return photo.img != null ? <img src={photo.img} key={photo.id} />
                :
                props.isOwner ?
                  <div className={classes.NotPresencs}>
                    <span>Вы ещё не добавили фото</span>
                  </div>
                  :
                  <div className={classes.NotPresencs}>
                    <span>Альбом пуст</span>
                  </div>
            })
          }
        </div>
      </div>
      {
        props.isOwner &&
        <div className={classes.footerBtn}>
          <input id="image" type={"file"} title={"Загрузить фото"} onChange={mainPhotoSelected} />
          <div className={classes.photoBtn}>
            <span>Загрузить фото</span>
          </div>
        </div>
      }
    </div>
  )
}

const Content = ({ group, ...props }) => {
  return (
    <div>
      {group === "music" && <span>Вы ещё не добавили музыку</span>}
      {group === "photo" &&
        <div className={classes.groupPhoto}>
          <div>
            <img src={props.avatar} />
          </div>

        </div>
      }
      {group === "clips" && <span>Вы ещё не добавили клипы</span>}
      {group === "article" && <span>Вы ещё не добавили статью</span>}
      {group === "NFT" && <span>Вы ещё не добавили NFT</span>}
    </div>
  )
}

const GroupItemDefault = (props) => {
  return (
    <div className={classNames(classes.headerItem, props.isActive === props.item ? classes.headerItemActive : classes.headerItemNotActive)}
      onClick={() => props.isActive != props.item && props.setIsActive(props.item)}
    >
      <span>{props.name}</span>
    </div>
  )
}
