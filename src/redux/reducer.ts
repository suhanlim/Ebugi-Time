import { createReducer } from "@reduxjs/toolkit";
import { user_actions } from "./actions";
import { type User } from "~/app";

// 초기 상태 정의
const initialState: User = {};

// 리듀서 함수
const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(user_actions.setUser, (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    })
    .addCase(user_actions.updateUser, (state, action) => {
      return {
        ...state.userPosts,
        userPosts: action.payload.userPosts,
      };
    })
    .addCase(user_actions.deleteUser, (state, action) => {
      return {
        ...state.userPosts,
        userPosts: action.payload.userPosts,
      };
    });
});

export default userReducer;

