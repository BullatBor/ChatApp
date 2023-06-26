import React from 'react'
import { connect } from 'react-redux'
import { News } from './News'
import { AddNews, TextChange, AddLike, setVisibleComment } from '../../redux/newsReducers'
import { withAuthNavigate } from '../../hoc/withAuthNavigate'
import { compose } from 'redux'

class NewsContainerClass extends React.Component {
  render(){
    return <News {...this.props}/>
  }
}


let mapStateToProps = (state) => ({
  news: state.NewsPage.news,
  defaultPhoto: state.ProfilePage.AvatarImg,
})

export let NewsContainer = compose(connect(mapStateToProps, {AddNews, TextChange, AddLike, setVisibleComment}),
withAuthNavigate
)(NewsContainerClass)