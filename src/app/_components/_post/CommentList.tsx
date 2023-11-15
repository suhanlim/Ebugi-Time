//게시판에 사용자들이 달은 댓글들을 보여주는 컴포넌트
"use client"
import React, { useState } from "react";
import Comment from "./Comment";
import styled from "styled-components";

const CommentInput = styled.textarea`
    width: 100%;
    height: 100px; // 입력 필드의 높이를 늘림
    margin-bottom: 12px; // 버튼과의 간격
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none; // 사용자가 입력 필드의 크기를 조정하지 못하게 함
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
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
interface CommentData {
    userId: string;
    userComment: string;
    commentDate: string | undefined;
    commentedLiked: number;
}

// Props의 타입을 정의합니다.
interface CommentListProps {
    data: CommentData[];
}

//댓글들에 대한 컨테이너 역할을 수행
//추가로 댓글을 달 수도 있는 기능 작성 필요
//댓글을 클릭했을 때, 사용자의 정보를 모달로 띄워주는 창 제작 필요

const CommentList: React.FC<CommentListProps> = ({ data }) => {

    const [comments, setComments] = useState<CommentData[]>(data);
    const [newComment, setNewComment] = useState("");

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(e.target.value);
    };

    const handleSubmit = () => {
        const newCommentData: CommentData = {
            userId: "1", // 현재 사용자의 ID, 로그인 시스템에 따라 변경 필요
            userComment: newComment,
            commentDate: new Date().toISOString().split('T')[0],// 현재 날짜
            commentedLiked: 0, // 초기 좋아요 수는 0
        };

        setComments([...comments, newCommentData]);
        setNewComment(""); // 입력 필드 초기화
    };

    return (
        <>
            <>
                {comments.map((comment,index) => (
                    <Comment 
                        index = {index}
                        userId = {comment.userId}
                        userComment = {comment.userComment}
                        commentDate = {comment.commentDate}
                        commentedLiked = {comment.commentedLiked}/>
                ))}
            </>
            <div>
            <CommentInput
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="댓글을 입력하세요"
                />
                <SubmitButton onClick={handleSubmit}>댓글 달기</SubmitButton>
            </div>
        </>

    );
}

export default CommentList;
