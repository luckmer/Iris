import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: "das",
};

const LoginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export const actions = LoginReducer.actions;
export default LoginReducer.reducer;
