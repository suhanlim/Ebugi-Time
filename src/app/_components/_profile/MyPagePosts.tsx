import styled from "styled-components";
import MyPagePostsModal from "./MyPagePostsModal/MyPagePostsModal";
import React, { EventHandler, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { type User } from "~/app";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";

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

const MyPagePosts = ({
  user,
  userImage,
}: {
  user: string;
  userImage: Pick<User, "userImage">;
}) => {
  const [hover, setHover] = useState(-1);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal == false) setHover(-1);
  }, [modal]);

  const userPostsInfo = useAppSelector((state) => state.user.userPosts);

  if (!userPostsInfo) return;

  const renderModal = () => {
    if (modal == true)
      return (
        <ModalContainer onClick={() => setModal(false)}>
          <MyPagePostsModal
            user={user}
            props={userPostsInfo.at(hover)}
            userImage={userImage}
            setModal={setModal}
          />
        </ModalContainer>
      );
  };

  const renderSection = () => {
    return (
      <div style={{ width: (width + margin) * 3 + 60 }}>
        <h4>{userPostsInfo.length}개의 게시물이 있습니다.</h4>
        <br />
        <PostDiv>
          {userPostsInfo.map((v, i) => (
            <div
              key={i}
              className="contents"
              onMouseEnter={() => setHover(i)}
              onClick={() => setModal(true)}
            >
              <img
                src={v.image}
                style={{
                  position: "absolute",
                  width: width,
                  height: width,
                  boxShadow: "0px 0px 2px #000",
                }}
                className={`${hover == i ? "hover" : "none"}`}
              />
              {hover == i ? (
                <div
                  style={{ position: "relative" }}
                  className={`${hover == i ? "hover" : "none"}`}
                >
                  추천 수 : {v.likeCount}
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
      {renderModal()}
    </>
  );
};

export default MyPagePosts;
