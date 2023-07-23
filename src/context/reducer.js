import { ActionType } from "./actionType";

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.USER:
      return { ...state, userLoginName: action.payload };

    case ActionType.USERS: {
      return { ...state, allUsers: action.payload };
    }

    case ActionType.CLEAR_USER: {
      return { ...state, allUsers: [] };
    }

    default:
      return state;
  }
};

export default reducer;
