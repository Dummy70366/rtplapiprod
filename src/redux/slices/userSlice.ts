import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../interface/user/userInterface";

export interface IuserInitialRedux {
  token: null | string;
  user: User | null;
  reset_pass_token?: string;
}

const initialState = {
  token: null,
  user: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: IuserInitialRedux, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setToken: (
      state: IuserInitialRedux,
      action: PayloadAction<string | null>
    ) => {
      state.token = action.payload;
    },
    removeToken: (state: IuserInitialRedux) => {
      state.token = null;
    },
  },
});

export const userSelector = (state: { user: IuserInitialRedux }) =>
  state.user.user;
export const tokenSelector = (state: { user: IuserInitialRedux }) =>
  state.user.token;
export const resetTokenSelector = (state: { user: IuserInitialRedux }) =>
  state.user.reset_pass_token;

const { actions, reducer } = userSlice;

export const { setUser, setToken, removeToken } = actions;
export const setuser = (data: User | null) => {
  setUser(data);
};
export const settoken = (data: string) => {
  setToken(data);
};
export default reducer;
