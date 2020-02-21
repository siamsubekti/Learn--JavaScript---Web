const initialState = {
  formType: 'new',
  loading: true,
  user: null,
  users: [],
}

function UserReducer(state = initialState, action) {
  const { type, users, user, formType, loading } = action;

  // console.log(action);
  switch (type) {
    case 'STORE_FORM_DATA':
      return {...state, user };
    case 'SUBMIT_USER':
      return { ...state, loading: true };
    case 'FETCH_A_USER':
      return { ...state, loading: true, formType };
    case 'FETCH_A_USER_DONE':
      return { ...state, loading, user, formType };
    case 'FETCH_USERS':
      return { ...state, loading: true, users: [] };
    case 'FETCH_USERS_DONE':
      return { ...state, loading, users };
    default:
      return state;
  }
}

export default UserReducer;
