import { LOGIN_REQUEST } from "../actionType";

const initialvalue = {
  loading: true,
};

export const authReducer = (prevState = initialvalue, action) => {
  
  const { type, payload } = action
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: !prevState,
      };

    default:
      prevState;
  }
};
