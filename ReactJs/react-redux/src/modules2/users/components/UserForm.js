import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as UserService from '../service/UserService';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitUser = this.submitUser.bind(this);
    this.loadUser = this.loadUser.bind(this);
    this.avatarInput = React.createRef();
  }

  submitUser(data) {
    const { formType, dispatch, history } = this.props;
    console.log('user to submit:', data, ', formType:' , formType);

    this.props.dispatch({type: 'SUBMIT_USER', loading: true });
    UserService.save(data, formType)
      .then((user) => {
        console.log('user after submit:', user);
        dispatch({type: 'FETCH_A_USER_DONE', loading: false, user, formType });
        history.push('/users');
      })
      .catch((error) => {
        dispatch({type: 'FETCH_A_USER_DONE', loading: false, user: data, formType });
      });
  }

  loadUser(id) {
    const { dispatch } = this.props;

    dispatch({type: 'FETCH_A_USER', loading: true});
    console.log('loadUser:', id);
    UserService.get(id)
      .then((response) => {
        const { data: user } = response;
        dispatch({type: 'FETCH_A_USER_DONE', loading: false, user, formType: 'PUT' });
      })
      .catch((error) => {
        dispatch({type: 'FETCH_A_USER_DONE', loading: false, user: null, formType: 'PUT' });
      });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.props.dispatch({type: 'STORE_FORM_DATA', user: { ...this.props.user, [name]: value } })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user: data } = this.props;
    const avatarFile = this.avatarInput.current.files[0];

    console.log('file:', avatarFile)
    data.avatar = avatarFile || data.avatar;

    this.submitUser(data);
  }

  componentDidMount() {
    const { dispatch, match: { params }} = this.props;
    if (params.id === 'new') {
      const user = {
        username: '',
        email: '',
        fullname: '',
        avatar: undefined,
      }

      dispatch({type: 'FETCH_A_USER_DONE', loading: false, user, formType: 'POST' });
    }
    else
      this.loadUser(params.id);
  }

  render() {
    const { user, loading } = this.props;
    let userForm = (<p>Getting User Data</p>);
    if (!loading && user) {
      let avatarImg = '';
      let userId = '';

      if (user.avatar) {
        avatarImg = <img src={`http://localhost:3001/${user.avatar}`} alt={user.fullname} width={72} />
      }

      if (user.id) {
        userId = <input type="hidden" name="id" value={user.id} />
      }

      orderF = (
        <form className="Form Card raised-2" onSubmit={this.handleSubmit} >
          { userId }
          <div>
            <label>Username</label>
            <input name="username" value={user.username} placeholder="username"
              onChange={this.handleChange} />
          </div>
          <div>
            <label>Email</label>
            <input name="email" value={user.email} placeholder="email"
              onChange={this.handleChange} />
          </div>
          <div>
            <label>Fullname</label>
            <input name="fullname" value={user.fullname} placeholder="fullname"
              onChange={this.handleChange} />
          </div>
          <div>
            <label>Avatar</label>
            <input type="file" name="avatar" ref={this.avatarInput} />
          </div>
          <div>
            {avatarImg}
          </div>
          <div>
            <button>Submit</button>
            <Link to="/users">RETURN</Link>
          </div>
        </form>
      );
    }

    return (
      <div>
        <h2>User Form</h2>
        <div>
          {userForm}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.user, ...state.counter };
}

export default connect(mapStateToProps)(UserForm);
