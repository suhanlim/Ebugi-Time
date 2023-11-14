"use client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from "~/app/_components/_common/navigation";
import {MultipurposePanel} from "~/app/_components/_common/multipurposePanel";
import FreePostList from "~/app/_components/_post/FreePostList";



export default function Page() {
  return (
    <Router>
      <Navigation/> 
      <FreePostList/>
      <MultipurposePanel/>
    </Router>
  )
}
