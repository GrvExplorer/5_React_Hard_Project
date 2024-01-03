import { LOGIN_USER, SIGNUP_USER, actionTypes } from "../action/action.type"

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return state
    case SIGNUP_USER:
      return state
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    default:
      return state
  }
}

export default reducer;