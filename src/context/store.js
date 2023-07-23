import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const UserContext = createContext();

const initialState = {
  allUsers: [],
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
