  import React from 'react'
import { connect } from 'react-redux';
import { getUsersThunkCreator, 
  ChangeUsersPageThunkCreator,
  FollowThunkCreator
} from '../../redux/usersReducer';
import { Users } from './Users';
import { Preloader } from '../common/preloader/Preloader';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

export class UsersAPIComponent extends React.Component {
  componentDidMount(){
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    /* Перенеcено как Thunk в Reducer
    this.props.setLoader(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {//запрос на сервер
      this.props.setLoader(false)
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount)     
})
*/
  }
  
  
  onPageChanged = (PageNumber) => {
    this.props.ChangeUsersPageThunkCreator(PageNumber, this.props.pageSize)
}
  render() {
    return <>
    {
    this.props.isFetching 
    ? <Preloader/>
     :
      <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize = {this.props.pageSize}
      currentPage = {this.props.currentPage}
      followed={this.props.FollowThunkCreator}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      isFetching={this.props.isFetching}
      isFollowing={this.props.isFollowing}
      />     
      }
      </>
  }
}

const mapStateToProps = (state) => {//Тут для отрисовки возвращаемый обьект сравнивается со старым объектом, после connect
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
    isFollowing: state.UsersPage.followingInProgress,
  }
}

export let UsersContainer = compose(
  connect(mapStateToProps, {
    getUsersThunkCreator,
    ChangeUsersPageThunkCreator,
    FollowThunkCreator
  }),
  withAuthNavigate
)(UsersAPIComponent)


