import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, UPDATE_USER, DELETE_USER, deleteUser } from '~/redux/actions';
import Link from "next/link";

const CommentsDiv = styled.div`
  postiion : relative;
  width:400px;
  .userImg{
    width:50px;
    height:50px;
    float:left;
    clip-path: circle(40%);
    background-size:100%;
    background-color:#d3d3d3;
    margin-right:20px;
  }
  .editBtn{
    float:right;
    font-size:9px;
    border:2px solid gray;
    padding:5px;
    margin:2px;
  }
  .deleteBtn{
    float:right;
    font-size:9px;
    border:2px solid gray;
    padding:5px;
    margin:2px;
  }
`
const AppendCommentDiv = styled.div`
  margin-top:50px;
  margin-bottom:50px;
`

const MyPagePostsComments = ({props, setModal}) => {

  const userPostsInfo = useSelector((state) => state.user.userPosts);
  const dispatch = useDispatch();


  const [inputComment,setInputComment] = useState("");
  const [commentList,setCommentList] = useState(props.comments)
  const comments = props.comments;

  console.log(commentList);

  const appendComment = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var hours = today.getHours();
    var minutes = today.getMinutes();

    const newComment = {
      "userId":1,
      "name":"유저1",
      "userImage":"",
      "contents":inputComment,
      "date":year+'-'+month+'-'+day+' '+hours+':'+minutes+" "
    }
    setInputComment("")
    setCommentList([
      ...commentList,
      newComment,
    ])
  }

  // 댓글 입력/수정/삭제 시 json에 업데이트
  useEffect(()=>{
    const newUserInfo = userPostsInfo.map((post)=>{
      if(post==props){
        return {
          ...post,
          comments:commentList,
        };
      } else return post;
    })
    console.log(newUserInfo)
    dispatch(updateUser({action:UPDATE_USER, post:newUserInfo})); // 유저 업데이트 액션 디스패치
  },[commentList])

  return (
    <>
      {commentList.map((v,i)=>{
        return (
          <CommentsDiv key={i}>
            <div className="userImg">{v.userImage}</div>
            {/* <div className="deleteBtn">삭제</div>
            <div className="editBtn" >수정</div> */}

            <Link href={'/profile/'+v.userId} onClick={()=>{window.scrollTo({top:0, left:0, behavior:'auto'});setModal(false);}}>{v.name}</Link>
            <p>{v.contents}</p>
            <div style={{fontSize:10}}>{v.date} 작성</div>
            <hr/>

          </CommentsDiv>
        )
      })}
      <AppendCommentDiv>
        <label>댓글 입력:</label>
        <input value={inputComment} onChange={e => setInputComment(e.target.value)} />
        <button onClick={appendComment}>작성</button>
      </AppendCommentDiv>
    </>
  )

  

}

export default MyPagePostsComments;
