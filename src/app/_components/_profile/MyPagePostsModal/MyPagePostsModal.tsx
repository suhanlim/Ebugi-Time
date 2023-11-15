import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, UPDATE_USER,DELETE_USER, deleteUser } from '~/redux/actions';
import MyPagePostsComments from './MyPagePostsComments';

const ModalContents = styled.div`
  width:550px;
  height:80%;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:white;
  border-radius:10%;
  overflow: auto;
  .userImage{
    width:150px;
    height:150px;
    clip-path: circle(40%);
    position: relative;
    justify-content: center;
    align-items: center;
    background-size:100%;
    background-color:#d3d3d3;
  }
  .modalPostTop{
    margin-top:50px;
    width:90%;
    height:250px;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #5050ff;
  }
`


const MyPagePostsModal = ({user,props,userImage,setModal}:any) => {

  const [like, setLike] = useState(false);
  const [scrap, setScrap] = useState(false);
  const [title, setTitle] = useState(props.title)
  const [description, setDescription] = useState(props.description)
  const [editAble, setEditAble] = useState(false);
  const [userPostInfo, setUserPostInfo] = useState(props);

  const handleModalClick = (e:any) => { e.stopPropagation(); };

  const userPostsInfo = useSelector((state:any) => state.user.userPosts);
  const dispatch = useDispatch();
    // 유저 상태를 dispatch 한다. 유저가 삭제 버튼 누르면 실행된다.
  const handleDeleteUser = (e:any) => {
    if(window.confirm("삭제하겠습니까?")){
      const newUserInfo = userPostsInfo.filter((post:any)=>post != props)
      dispatch(deleteUser({action:DELETE_USER, post:newUserInfo})); // 유저 삭제 액션 디스패치
      alert("삭제되었습니다.")
      setModal(false);
    }
  }
  // 유저 상태를 dispatch 한다. 유저가 수정 버튼 누르면 실행된다.
  const handleUpdateUser = () => {
    const newUserInfo = userPostsInfo.map((post:any)=>{
      if(post==props){
        return {
          ...post,
          title:title,
          description:description
        };
      } else return post;
    })
    dispatch(updateUser({action:UPDATE_USER, post:newUserInfo}));
  }
  // 유저 상태를 dispatch 한다. 유저가 좋아요 버튼 누르면 실행된다.
  const likeCountUpdate = () => {
    const newUserInfo = userPostsInfo.map((post:any)=>{
      if(post==props){
        return {
          ...post,
          likeCount:post.likeCount+((like)?1:-1)
        };
      } else return post;
    })
    dispatch(updateUser({action:UPDATE_USER, post:newUserInfo}));
  }
  // 유저 상태를 dispatch 한다. 유저가 스크랩 버튼 누르면 실행된다.
  const scrapCountUpdate = () => {
    const newUserInfo = userPostsInfo.map((post:any)=>{
      if(post==props){
        return {
          ...post,
          scrapCount:post.scrapCount+((scrap)?1:-1)
        };
      } else return post;
    })
    dispatch(updateUser({action:UPDATE_USER, post:newUserInfo}));
  }
  const onChangeTitle = (e:any)=>{
    setTitle(e.target.value)
  }
  const onChangeDescription = (e:any)=>{
    setDescription(e.target.value)
  }

  useEffect(()=>{
    likeCountUpdate();
  },[like])
  useEffect(()=>{
    scrapCountUpdate();
  },[scrap])

  return (
  <ModalContents onClick={handleModalClick}>
      <div className="modalPostTop">

        <button style={{position:'relative', display:'flex', float:'right'}}
          className="btn btn-accent"
          onClick={ (e) => {handleDeleteUser(e);  }}>삭제</button>{' '}
        <button style={{position:'relative', display:'flex', float:'right', marginRight:'10px'}}
          className="btn btn-info"
          onClick={ ()=>{setEditAble(!editAble); handleUpdateUser()}}>수정</button>{' '}
        <div style={{display:'flex', float:'left', margin:'auto'}}>
          <div className="userImage" style={{backgroundImage: `url(${userImage})` }} />
        <div style={{display:'block', float:'left', margin:'auto', width:'300px', height:'200px'}}>
          <h2 style={{fontSize:'20px'}}>{user}</h2> 
          <div style={{fontSize:'12px'}}>{props.date} 작성</div>
          <hr/>
          <br/>
          {
            (editAble) ? 
              <input className="input input-bordered w-full max-w-xs"
                value={title} 
                onChange={onChangeTitle}
                onKeyDown={(e)=>{if(e.key==='Enter') {handleUpdateUser();setEditAble(!editAble)}  }}
              /> : <div style={{fontSize:'25px'}}>{props.title} </div>
          }
          
        </div>
      </div>
      </div>
      <div style={{display:'block', width:'300px',height:'300px',margin:'20px'}}>
        <img src={props.image} style={{width:'90%',height:'90%',display:'block'}}/>
      </div>
      <div style={{display:'block', marginBottom:'30px',marginTop:'30px',fontSize:'18px',width:'90%'}}>
        {(editAble) ? <><input className="input input-bordered w-full max-w-xs"
                                value={description}
                                onChange={onChangeDescription}
                                onKeyDown={(e)=>{if(e.key==='Enter') {handleUpdateUser();setEditAble(!editAble)} }}
                                /><br/></> : <p>{props.description}</p>}
        <br/>
        <button className={(like)?"btn btn-error":"btn btn-outline btn-error"} onClick={() => {setLike(!like)}}>추천 : {props.likeCount}</button>{' '}
        <button className={(scrap)?"btn btn-warning":"btn btn-outline btn-warning"} onClick={() => {setScrap(!scrap)}}>스크랩 : {props.scrapCount}</button>{' '}
      </div>
      <div>댓글 수 : {props.comments.length}</div>
      <hr style={{border:'2px solid', width:'90%'}}/>
      <MyPagePostsComments props={props} setModal={setModal}/>
    </ModalContents>
  )
}

export default MyPagePostsModal;
