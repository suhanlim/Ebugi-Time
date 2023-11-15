 

import React, { useEffect, useState } from 'react';
import { usePathname  } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import MyPagePosts from './MyPagePosts'
//import MyPagePosts from './MyPagePosts';
//import MyPageComments from './MyPageComments';
//import MyPageFriends from './MyPageFriends';
//import Button from 'react-bootstrap/Button';


import {setUser} from '~/redux/actions'


const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  pre {
    background-color: #f9f9f9;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-width: 400px;
  }
`;

const MyPageHeader = styled.div`
  margin-bottom: 44px;
  
  display: flex;
  align-items: stretch;
  flex-direction: row;
  position: relative;
  border-bottom-width: 1px;

  div {
    margin-right: 44px;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    flex-direction: column;
    display: flex;
    flex-shrink: 0;
    
    button {
      border: 0;
      cursor: pointer;
      height: 150px;
      padding: 0;
      width: 150px;
    }
    .clip-path {
      clip-path: circle(50%);
    }
  }

  section {
    background-color: #f9f9f9;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-width: 400px;
  }
`;
const MyPageContents = styled.div`
  width:800px;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  border-bottom-width: 1px;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;

  border-top-width: 1px;
  border-top-color: #A0A0C8;
  border-top-style: solid;
  button{
    width:100px;
    padding:10px;
  }

  .selected{
    border-top-width: 2px;
    border-top-color: #000fff;
    border-bottom:0px;
    border-left:0px;
    border-right:0px;
    background-color: white;
    font-size:20px;
  }
`;
function MyPage() {
  // URL에서 유저 이름을 추출
  const path:string = usePathname();
  const user = "user" + path.split("/")[2]
  //console.log(user.push(`/`));

  // 유저 정보
  const [userData, setUserData]:any = useState();

  // 유저 이미지
  //const [userImage, setUserImage] = useState();
  const [userImage, setUserImage] = useState();
  
  // 게시물, 댓글, 스토리 몇 번째 인덱스인지 저장
  const [selecteIndex, setSelectedIndex] = useState(0);

  const dispatch = useDispatch();
  const data = useSelector((state:any) => state.user);

  
  const handleFileChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      // 이미지 파일을 미리보기로 표시하기 위해 URL.createObjectURL 사용
      const imageUrl:any = URL.createObjectURL(file);
      setUserImage(imageUrl);
      
    }
  };

  // 파일 선택 input 엘리먼트를 참조하기 위한 함수
  const openFileInput = () => {
    document.getElementById('fileInput')?.click();
  };

  useEffect(() => {
    // JSON 파일 읽어오기
    axios.get(`/users/${user}.json`)
      .then((response) => {
        setUserData(response.data);

        // 유저 데이터를 설정하고 스토어에 디스패치
        const userData = response.data;
        dispatch(setUser(userData));

        setUserImage(userData.userImage)
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
    // 유저 이미지 읽어오기
    // 음..
  }, [user]);

  if (!userData) {
    return <div>데이터를 로딩 중입니다...</div>;
  }
  if(!data) return;

  console.log(user);
  return <>
    <MyPageContainer>
      <MyPageHeader>
        <div >
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style = {{display:'none', }}
            onChange={handleFileChange}
          />
        <button
          onClick={openFileInput}
          className="clip-path"
          style={{ backgroundImage: `url(${userImage})` }}>
          {(userImage)?"" : "이미지 업로드"} 
        </button>
        </div>
        <section>
        <h2>{userData.name}   <button className="btn btn-neutral">프로필 편집</button> <button className="btn btn-neutral">친구 추가</button>
        </h2>
      <hr/>
      이름 : {userData.name} <br/>
      학과 학년 : {userData.grade} <br/>
      소개글 : {userData.introduce} <br/>
      이메일 : {userData.email}
        </section>
      </MyPageHeader>
      <MyPageContents>
        <button onClick={()=>setSelectedIndex(0)} className={selecteIndex==0 ? "selected" : ""}>게시물</button>
        <button onClick={()=>setSelectedIndex(1)} className={selecteIndex==1 ? "selected" : ""}>댓글</button>
        <button onClick={()=>setSelectedIndex(2)} className={selecteIndex==2 ? "selected" : ""}>친구</button>

      </MyPageContents>
      <br/>
        {(selecteIndex==0) ? <MyPagePosts user={user} userImage={userImage}/> : <></>}
        {/* {(selecteIndex==1) ? <MyPageComments user={user} userImage={userImage}/> : <></>}
        {(selecteIndex==2) ? <MyPageFriends user={user} userImage={userImage}/> : <></>} */}
    </MyPageContainer>
  </>
}

export default MyPage;