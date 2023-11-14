"use client"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface PostData{
    postId: number;
    postUserId: string;
    postedDate: string | undefined;
    likedCount: number;
    postContent: string;
    comment: CommentData[];
}

// Comment 데이터 타입 정의
interface CommentData {
    userId: string;
    userComment: string;
    commentDate: string | undefined;
    commentedLiked: number;
}


const FreePostList = () => {
    const [postsData, setPostsData] = useState<PostData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("데이터 로딩중")
                // 모든 게시글을 포함하는 JSON 파일
                const response = await axios.get('/posts/FreePost.json'); 
                const postArray: PostData[] = response.data.posts
                setPostsData(postArray);
                console.log(response.data.posts);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchData();
    }, []);

    if (!postsData.length) {
        return <div>데이터를 로딩 중입니다...</div>;
    }

    return (
        <section>
            <h1>자유 게시판 목록</h1>
            <ul>
                {postsData.map((post) => (
                    <li key={post.postId}>
                        <Link to={`/post/${post.postId}`}>
                            {`게시글 번호: ${post.postId}`}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FreePostList;
