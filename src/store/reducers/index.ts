import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { IStoreState } from "../interface-types";

export const reducers = combineReducers<IStoreState>({
  users: usersReducer
});
