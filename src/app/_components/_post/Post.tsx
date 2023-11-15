"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const PostContainer = styled.div`
    background: #f9f9f9;
    padding: 1rem;
    border-radius: 4px;
`;

const PostTitle = styled.h2`
    margin: 0;
    color: #333;
`;

interface PostData {
    postTitle: string;
    postId: number;
    postUserId: string;
    postedDate: string | undefined;
    postContent: string;
    likedCount: number;
}

const Post: React.FC<PostData> = () => {
    const { postId } = useParams<{ postId: string }>();
    const [post, setPost] = useState<PostData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/posts/FreePost.json'); 
                const postArray: PostData[] = response.data.posts
                // postId와 일치하는 게시글 찾기
                const post = postArray.find(p => p.postId.toString() === postId); 
                setPost(post || null)
                console.log(postArray);
                console.log(post)

            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchData();
    }, [postId]);

    if (!post) {
        return <div>데이터를 로딩 중입니다...by Post</div>;
    }

    return (
        <>
            <p>작성자 ID: {post.postUserId}</p>
            <p><time dateTime={post.postedDate}>{post.postedDate}</time></p>
            <p className='text-2xl'>{post.postTitle}</p>
            <p>
                {post.postContent}
                {post.postContent}
                {post.postContent}
                {post.postContent}
            </p>
        </>
    );
};

export default Post;