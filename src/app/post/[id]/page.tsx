// use client
import { Navigation } from "~/app/_components/_common/navigation"
import {MultipurposePanel} from "~/app/_components/_common/multipurposePanel"
import FreePost from "../FreePost"


export default function Page() {
  return (
    <>
      <Navigation/> 

      <FreePost/>

      <MultipurposePanel/>
    </>
  )
}
