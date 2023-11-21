//게시판에 사용자들이 달은 댓글들을 보여주는 컴포넌트
"use client";
import React, { useState } from "react";
import Comment from "./Comment";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";

const CommentInput = styled.textarea`
  width: 100%;
  height: 50px; // 입력 필드의 높이
  margin-bottom: 12px; // 버튼과의 간격
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none; // 사용자가 입력 필드의 크기를 조정하지 못하게 함
`;

const SubmitButton = styled.button`
  height: 50px; // 버튼의 높이를 입력창과 동일하게 설정
  padding: 5px 10px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// Comment 데이터 타입 정의
export interface CommentData {
  userId: string;
  userComment: string;
  commentDate: string | undefined;
  commentedLiked: number;
}

// Props의 타입을 정의합니다.
interface CommentListProps {
  data?: CommentData[];
}

const CommentInputContainer = styled.div`
  display: flex;
  align-items: stretch; // 요소들이 컨테이너 높이에 맞게 늘어나도록 설정
  gap: 0px; // 버튼과 입력 필드 사이의 간격 제거
`;

//댓글들에 대한 컨테이너 역할을 수행
//추가로 댓글을 달 수도 있는 기능 작성 필요
//댓글을 클릭했을 때, 사용자의 정보를 모달로 띄워주는 창 제작 필요

const CommentList: React.FC<CommentListProps> = ({ data }) => {
  const [comments, setComments] = useState(data);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = () => {
    const newCommentData: CommentData = {
      userId: "1", // 현재 사용자의 ID, 로그인 시스템에 따라 변경 필요
      userComment: newComment,
      commentDate: new Date().toISOString().split("T")[0], // 현재 날짜
      commentedLiked: 0, // 초기 좋아요 수는 0
    };

    setComments(comments?.concat(newCommentData));
    setNewComment(""); // 입력 필드 초기화
  };

  return (
    <>
      {comments?.map((comment, index) => (
        <Comment
          key={index}
          index={index}
          userId={comment.userId}
          userComment={comment.userComment}
          commentDate={comment.commentDate}
          commentedLiked={comment.commentedLiked}
        />
      ))}
      <CommentInputContainer>
        <CommentInput
          value={newComment}
          onChange={handleCommentChange}
          placeholder="댓글을 입력하세요"
        />
        <SubmitButton onClick={handleSubmit}>
          <IoMdSend size="20px" /> {/* 아이콘 사용 */}
        </SubmitButton>
      </CommentInputContainer>
    </>
  );
};

export default CommentList;
