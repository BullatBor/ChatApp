  import React from 'react'
import { connect } from 'react-redux';
import { follow, setCurrentPage, setLoader, setTotalCount, setUsers, unfollow, setFollowButton } from '../../redux/usersReducer';
import { Users } from './Users';
import { Preloader } from '../common/preloader/Preloader';
import { usersAPI } from '../../api/api';

export class UsersAPIComponent extends React.Component {
  componentDidMount(){
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {//запрос на сервер
      this.props.setLoader(false)
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount)     
})
  }

  onPageChanged = (PageNumber) => {
    this.props.setCurrentPage(PageNumber);
    this.props.setLoader(true)
    usersAPI.getUsers(PageNumber, this.props.pageSize).then(data => {
      this.props.setLoader(false)
      this.props.setUsers(data.items);
  })
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
      followed={this.props.follow}
      unfollowed={this.props.unfollow}
      setUsers={this.props.setUsers}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      isFetching={this.props.isFetching}
      isFollowing={this.props.isFollowing}
      setFollowButton={this.props.setFollowButton}
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
    isFollowing: state.UsersPage.followingInProgress
  }
}
/*
const mapDispatchToProps = (dispatch) => {
  return {
    followed: (id) => {
      dispatch(followAC(id));
    },
    unfollowed: (id) => {
      dispatch(unfollowAC(id))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    },
    setTotalCount: (count) => {
      dispatch(setTotalCountAC(count))
    },
    setLoader: (load) => {
      dispatch(setLoaderAC(load))
    }
  }
}
*/
export let UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setLoader,
  setFollowButton
})(UsersAPIComponent);//есть свой отрисовщик у connect

