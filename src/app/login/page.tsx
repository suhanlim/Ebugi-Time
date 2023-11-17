"use client"

import Login from "~/app/_components/_login/login"
import Register from "~/app/_components/_login/register"
import store from '~/redux/store'
import { Provider } from "react-redux"

export default function Page() {
  return <Provider store = {store}>
    <Login />
  </Provider>
}


