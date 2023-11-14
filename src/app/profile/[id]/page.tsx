"use client"

import MyPage from "~/app/_components/_profile/myPage";

import store from '~/redux/store'
import { Provider } from 'react-redux'

export default function Page() {
  return  <Provider store={store}>
    <MyPage/>
  </Provider>
}
