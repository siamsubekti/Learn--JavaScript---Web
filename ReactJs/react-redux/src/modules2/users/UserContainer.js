import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

class UserContainer extends React.Component {
  render() {
    return (
        <div>
          <Switch>
            <Route path="/users/:id" component={UserForm} />
            <Route path="/users" component={UserList} />
          </Switch>
        </div>
    );
  }
}

export default UserContainer;
