"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { api } from "~/trpc/react";
import { MyPagePosts } from "./MyPagePosts";

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
  width: 800px;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  border-bottom-width: 1px;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;

  border-top-width: 1px;
  border-top-color: #a0a0c8;
  border-top-style: solid;
  button {
    width: 100px;
    padding: 10px;
  }

  .selected {
    border-top-width: 2px;
    border-top-color: #000fff;
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
    background-color: white;
    font-size: 20px;
  }
`;

function MyPage() {
  // URL에서 유저 이름을 추출
  const path: string = usePathname();
  const id: string = path.split("/")[2] ?? " ";
  const [btnIndex, setBtnIndex] = useState(0);

  const profileInfo = api.user.getProfileInfo.useQuery({ userId: id });

  return (
    <MyPageContainer>
      <MyPageHeader>
        <div>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
          <button
            className="clip-path"
            style={{ backgroundImage: `url(${profileInfo.data?.image_url})` }}
          >
            {profileInfo.data?.image_url ? "" : "이미지 업로드"}
          </button>
        </div>
        <section>
          <h2>
            {profileInfo.data?.nickname}{" "}
            <button className="btn btn-neutral">프로필 편집</button>{" "}
            <button className="btn btn-neutral">친구 추가</button>
          </h2>
          <hr />
          이름 : {profileInfo.data?.name} <br />
          학번 : {profileInfo.data?.grade} <br />
          소개글 : {profileInfo.data?.introduction} <br />
          이메일 : {profileInfo.data?.email}
        </section>
      </MyPageHeader>
      <MyPageContents>
        <button
          onClick={() => setBtnIndex(0)}
          className={btnIndex == 0 ? "selected" : ""}
        >
          게시물
        </button>
        <button>댓글</button>
        <button>친구</button>
      </MyPageContents>
      <br />
      <MyPagePosts userId={id} />
      {/* {(selecteIndex==1) ? <MyPageComments user={user} userImage={userImage}/> : <></>}
        {(selecteIndex==2) ? <MyPageFriends user={user} userImage={userImage}/> : <></>} */}
    </MyPageContainer>
  );
}

export default MyPage;
