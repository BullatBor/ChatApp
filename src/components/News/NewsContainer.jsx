import React from 'react'
import { connect } from 'react-redux'
import { News } from './News'
import { AddNews } from '../../redux/newsReducers'
import { withAuthNavigate } from '../../hoc/withAuthNavigate'
import { compose } from 'redux'

class NewsContainerClass extends React.Component {
  render(){
    return <News {...this.props}/>
  }
}


let mapStateToProps = (state) => ({
  
})

export let NewsContainer = compose(connect(mapStateToProps, {AddNews}),
withAuthNavigate
)(NewsContainerClass)