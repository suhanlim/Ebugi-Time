"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface PostData {
    postTitle: string;
    postId: number;
    postUserId: string;
    postedDate: string | undefined;
    postContent: string;
    likedCount: number;
}

interface PostsResponse {
    posts: PostData[];
}

const Post: React.FC = () => {
    // const { postId } = useParams<{ postId: string }>();
    // const [post, setPost] = useState<PostData | null>(null);

    const { postId } = useParams<{ postId?: string }>();
    const numericPostId = postId ? parseInt(postId, 10) : null;
    const [post, setPost] = useState<PostData | null>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('/posts/FreePost.json'); 
    //             const postArray: PostData[] = response.data.posts
    //             // postId와 일치하는 게시글 찾기
    //             const post = postArray.find(p => p.postId.toString() === postId) ?? null;
    //             setPost(post || null)
    //             console.log(postArray);
    //             console.log(post)

    //         } catch (error) {
    //             console.error('데이터를 가져오는 중 오류 발생:', error);
    //         }
    //     };

    //     fetchData();
    // }, [postId]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<PostsResponse>('/posts/FreePost.json'); 
                const postArray = response.data.posts;
                const foundPost = postArray.find(p => p.postId === numericPostId);
                setPost(foundPost ?? null);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchData();
    }, [numericPostId]);

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
            </p>
        </>
    );
};

export default Post;