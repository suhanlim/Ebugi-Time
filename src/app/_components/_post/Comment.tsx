//댓글 하나에 대한 컴포넌트
"use client"
import React from "react";


// Props의 타입을 정의합니다.
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
commentedLiked
}) => {
    return(
    <li key={index}>
        <p>작성자 ID: {userId}</p>
        <p>{userComment}</p>
        <time dateTime={commentDate}>{commentDate}</time>
        <p>좋아요 수: {commentedLiked}</p>
    </li>)
}

export default Comment