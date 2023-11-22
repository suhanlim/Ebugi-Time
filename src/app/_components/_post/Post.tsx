"use client";
import { type Scrap } from "@prisma/client";
import Image from "next/image";
import { Avatar, Divider } from "react-daisyui";
import styled from "styled-components";
import dayjs from "~/utils/dayjs";

const ModalContents = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .modalPostTop {
    justify-content: center;
  }
`;

interface PostData {
  postTitle: string;
  postId: number;
  postUserId: string;
  postedDate: string | undefined;
  postContent: string;
}

const Post = (props: {
  post: {
    postUserImage_url: string | undefined;
    postImage_url: string;
    postUserNickname: string;
    postedDate: Date;
    postTitle: string;
    postContent: string;
    postLikes: number;
    postScrap: Scrap[];
  };
}) => {
  const post = props.post;

  return (
    <ModalContents>
      <div className="modalPostTop">
        {false ? (
          <input
            className="input input-bordered w-full max-w-xs"
            value={post.postTitle}
            onChange={() => console.log("onChangeTitle")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
              }
            }}
          />
        ) : (
          <div className="text- font-bold">{post.postTitle} </div>
        )}
        <div style={{ fontSize: "12px" }}>
          {dayjs(post.postedDate).format("L LT")} 작성
        </div>
        <Divider />
      </div>
      <div className="container">
        <img src={post.postImage_url} className="h-fit w-fit" />
      </div>
      <div
        style={{
          display: "block",
          marginBottom: "30px",
          marginTop: "30px",
          fontSize: "18px",
          width: "90%",
        }}
      >
        {false ? (
          <input
            className="input input-bordered w-full max-w-xs"
            value={post.postContent}
            onChange={() => console.log("onChangeDescription")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
              }
            }}
          />
        ) : (
          <p>{post.postContent}</p>
        )}
        <Divider />
        <div className="mb-4 flex flex-row items-center pb-2">
          <Avatar
            size="sm"
            className="py-2 pl-4 pr-2"
            border
            borderColor="secondary"
            shape="circle"
            src={post.postUserImage_url}
          />
          <em className="flex-1 text-xl">{post.postUserNickname}</em>
        </div>
        <div className="flex flex-row items-center justify-center gap-3 py-2">
          <button
            className={false ? "btn btn-error" : "btn btn-error btn-outline"}
          >
            추천 : {post.postLikes}
          </button>
          <button
            className={
              false ? "btn btn-warning" : "btn btn-warning btn-outline"
            }
          >
            스크랩 : {post.postScrap.length}
          </button>
        </div>
      </div>
    </ModalContents>
  );
};

export default Post;
