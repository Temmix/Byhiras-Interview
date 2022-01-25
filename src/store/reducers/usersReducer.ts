import { ActionTypes } from "../actions/types";
import { IUser, IFetchUsersAction } from "../interface-types";

export const usersReducer = (
  state: IUser[] = [],
  action: IFetchUsersAction
) => {
  switch (action.type) {
    case ActionTypes.fetchUsers:
      return action.payload;

    default:
      return state;
  }
};
