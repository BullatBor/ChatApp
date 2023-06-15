import React from 'react'
import { connect } from 'react-redux';
import {
  getUsersThunkCreator,
  ChangeUsersPageThunkCreator,
  FollowThunkCreator
} from '../../redux/usersReducer';
import { Users } from './Users';
import { Preloader } from '../common/preloader/Preloader';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';

export class UsersAPIComponent extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsersThunkCreator(currentPage, pageSize)
  }


  onPageChanged = (PageNumber) => {
    const {pageSize} = this.props;
    this.props.ChangeUsersPageThunkCreator(PageNumber, this.props.pageSize)
  }
  render() {
    return <>
      {
        this.props.isFetching
          ? <Preloader />
          :
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
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

/*const mapStateToProps = (state) => {//Тут для отрисовки возвращаемый обьект сравнивается со старым объектом, после connect
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
    isFollowing: state.UsersPage.followingInProgress,
  }
}*/


const mapStateToProps = (state) => {//Тут для отрисовки возвращаемый обьект сравнивается со старым объектом, после connect
  return {
    users: getUsers(state),//селекторы для выборки из state
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowing: getFollowingInProgress(state),
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


