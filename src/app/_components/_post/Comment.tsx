//댓글 하나에 대한 컴포넌트
"use client";
import React from "react";
import styled from "styled-components";
import dayjs from "~/utils/dayjs";
import { api } from "~/trpc/react";

// 스타일 컴포넌트 정의
const CommentSection = styled.section`
  padding: 15px 15px 15px 15px;
  border: 1px solid #e3e3e3;
`;

// 댓글의 타입
interface CommentProps {
  index: number;
  userId: string;
  userComment: string;
  commentDate: string | undefined;
  commentedLiked: number;
}

const Comment: React.FC<CommentProps> = ({
  index,
  userId,
  userComment,
  commentDate,
  commentedLiked,
}) => {
  const userInfo = api.user.getProfileInfo.useQuery({ userId: userId });

  return (
    <CommentSection>
      <div key={index}>
        <b>작성자: {userInfo.data?.nickname}</b>
        <p></p>
        <p>{userComment}</p>
        <p>{dayjs(commentDate).format("L LT")} </p>
        <p>좋아요 수: {commentedLiked}</p>
      </div>
    </CommentSection>
  );
};

export default Comment;

