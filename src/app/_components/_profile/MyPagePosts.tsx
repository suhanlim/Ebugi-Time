"use client";
import styled from "styled-components";
import React, { useRef, useState, useCallback } from "react";
import { Modal } from "react-daisyui";
import { api } from "~/trpc/react";
import Post from "../_post/Post";
import CommentList, { type CommentData } from "../_post/CommentList";

const width = 150;
const margin = 20;

const PostDiv = styled.div`
  .contents {
    position: relative;
    width: ${width + 20}px;
    height: ${width}px;
    float: left;
    margin: ${margin / 2}px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .hover {
    position: absolute;
    text-align: center;
    align-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 0, 0, 0.3);
    color: white;
    cursor: pointer;
    animation-duration: 1s;
    animation: sizeup 1s forwards;
  }
  .modal-container {
  }
  @keyframes sizeup {
    0% {
      width: ${width}px;
      height: ${width}px;
    }

    100% {
      width: ${width + 20}px;
      height: ${width + 20}px;
    }
  }
`;
const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export function MyPagePosts({ userId }: { userId: string }) {
  const [hover, setHover] = useState(-1);
  const myInfo = api.user.getProfileInfo.useQuery({ userId: userId }).data;
  const userPostsInfo = api.post.getOwnPosts.useQuery({ id: userId });
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selectedPost, setSelectedPost] = useState(0);
  const modalPost = userPostsInfo.data?.at(selectedPost);

  const handleShow = useCallback(() => {
    modalRef.current?.showModal();
  }, [modalRef]);

  if (!userPostsInfo || !myInfo) return;
  const renderSection = () => {
    return (
      <div style={{ width: (width + margin) * 3 + 60 }}>
        <h4>{userPostsInfo.data?.length}개의 게시물이 있습니다.</h4>
        <br />
        <PostDiv>
          {userPostsInfo.data?.map((v, i) => (
            <div
              key={i}
              className="contents"
              onMouseEnter={() => setHover(i)}
              onClick={() => {
                setSelectedPost(i);
                handleShow();
              }}
            >
              <img
                src={v.image_url ?? "../../../../public/assets/logo.png"}
                style={{
                  position: "absolute",
                  width: width,
                  height: width,
                  boxShadow: "0px 0px 2px #000",
                }}
                alt="post picture"
                className={`${hover == i ? "hover" : "none"}`}
              />
              {hover == i ? (
                <div
                  style={{ position: "relative" }}
                  className={`${hover == i ? "hover" : "none"}`}
                >
                  추천 수 : {v.likes}
                  <br />
                  댓글 : {v.comments.length}
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </PostDiv>
      </div>
    );
  };

  return (
    <>
      <div style={{ margin: "50px" }}>
        <h1>
          <b>게시글 목록</b>
        </h1>
      </div>
      {renderSection()}
      <Modal ref={modalRef} backdrop>
        <Modal.Header className="font-bold">
          {modalPost?.category ?? ""}
        </Modal.Header>
        <Modal.Body>
          {modalPost ? (
            <Post
              post={{
                postUserImage_url: myInfo.image_url,
                postImage_url: modalPost.image_url,
                postUserNickname: myInfo.nickname,
                postedDate: modalPost.updatedAt,
                postTitle: modalPost.title,
                postContent: modalPost.contents,
                postLikes: modalPost.likes,
                postScrap: modalPost.scraps,
              }}
            />
          ) : undefined}
          <CommentList
            data={modalPost?.comments.map<CommentData>((v) => {
              return {
                userId: v.user_id,
                commentDate: v.createdAt.toString(),
                userComment: v.contents,
                commentedLiked: v.likes,
              };
            })}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
