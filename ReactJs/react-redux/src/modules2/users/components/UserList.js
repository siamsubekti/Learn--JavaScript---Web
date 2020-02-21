import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as UserService from '../service/UserService';

class UserList extends React.Component {
  loadUsers() {
    const { dispatch } = this.props;

    dispatch({type: 'FETCH_USERS'});
    UserService.list()
      .then((response) => {
        const { data: users } = response;
        dispatch({type: 'FETCH_USERS_DONE', loading: false, users });
      })
      .catch((error) => {
        dispatch({type: 'FETCH_USERS_DONE', loading: false, users: [] });
      });
  }

  componentDidMount() {
    console.log('CDM loading:', this.props.loading);
    this.loadUsers();
  }

  renderUserRows(users) {
    return users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{ user.id }</td>
          <td><img src={ `http://localhost:3001/${user.avatar}` } alt={`(${user.fullname})`} height={64} /></td>
          <td>{ user.email }</td>
          <td>{ user.fullname }</td>
          <td><Link to={`/users/${user.id}`}>Edit User</Link></td>
        </tr>
      );
    });
  }

  render() {
    console.log('RENDER USERS');
    const { users, loading } = this.props;
    let rows = (<tr><td colSpan={5}>LOADING...</td></tr>);

    if (!loading) {
      rows = this.renderUserRows(users);
    }

    return (
      <div>
        <h2>User List</h2>
        <div className="AddCounter">
          <button className="button" onClick={() => this.loadUsers()}>Reload</button>
          <button className="button">
            <Link to={`/users/new`}>New User</Link>
          </button>
        </div>
        <div className="AddCounter">
          Number of counter cards:
          <ul>
            { this.props.counters.map((counter, index) => {
              return (
                <li>Tamkur Card { (index + 1) } value { counter }</li>
              );
            })}
          </ul>
        </div>
        <div>
          <table className="table" border={1} cellPadding={5} width="100%">
            <thead>
              <tr>
                <th>id</th>
                <th>avatar</th>
                <th>email</th>
                <th>fullname</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              { rows }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.user, ...state.counter };
}

export default connect(mapStateToProps)(UserList);
