import { createSlice } from "@reduxjs/toolkit";

const home = createSlice({
  name: "home",
  initialState: {
    isShow: false,
    isLoading: true,
    userCurrent: {},
  },
  reducers: {
    login: (state, action) => {
      state.userCurrent = action.payload;
      state.isShow=true;
      const { accessToken, picture,name } = action.payload;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("img", picture);
      localStorage.setItem("name", name);
    },
    getCurrent: (state, action) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.isShow = true;
        state.isLoading = false;
      } else {
        state.isShow = false;
      }
    },
    logout:(state, action) => {
      state.isShow=false;
      state.userCurrent={};
      localStorage.removeItem("token");
      localStorage.removeItem("img");
      localStorage.removeItem("name");
    }
  },
});

const { reducer, actions } = home;

export const { login, getCurrent,logout } = actions;

export default reducer;
