import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { IUser, IFetchUsersAction } from "../interface-types";

const url = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<IUser[]>(url);

    dispatch<IFetchUsersAction>({
      type: ActionTypes.fetchUsers,
      payload: response.data
    });
  };
};
