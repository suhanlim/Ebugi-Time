"use client";
import styled from "styled-components";
import React, { useRef, useState, useCallback } from "react";
import { Modal } from "react-daisyui";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { api } from "~/trpc/react";

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
  const userPostsInfo = api.post.getOwnPosts.useQuery({ id: userId });
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleShow = useCallback(() => {
    modalRef.current?.showModal();
  }, [modalRef]);

  if (!userPostsInfo) return;
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
              onClick={handleShow}
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
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click outside to close</Modal.Body>
      </Modal>
    </>
  );
}
