import { createAction } from "@reduxjs/toolkit";
import type { User } from "~/app";

// 액션 생성자 함수
// https://redux-toolkit.js.org/api/createAction#usage-with-createreducer
export const user_actions = {
  setUser: createAction<{ user?: User }>("user/set"),
  updateUser: createAction<User>("user/update"),
  deleteUser: createAction<User>("user/delete"),
};
