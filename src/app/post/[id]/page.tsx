"use client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from "~/app/_components/_common/navigation";
import {MultipurposePanel} from "~/app/_components/_common/multipurposePanel";
import FreePostList from "~/app/_components/_post/FreePostList";
import FreePost from '~/app/_components/_post/FreePost';


export default function Page() {
  return (
    <Router>
      <Navigation/> 
      <Routes>
        <Route path="/" element={<FreePostList />} />
        <Route path="/post/:postId" element={<FreePost />} /> {/* FreePost 컴포넌트로 연결되어야 함 */}
      </Routes>
      <MultipurposePanel/>
    </Router>
  )
}
