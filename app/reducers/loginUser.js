const loginUser = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.loginUser
    default:
      return state
    }
  }

export default loginUser
