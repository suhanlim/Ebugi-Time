"use client"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';


const PostSection = styled.section`
    padding: 15px 15px 15px 15px;
    border: 1px solid #e3e3e3;
`;

interface PostData{
    postTitle: string;
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


const TitleContainer = styled.div`
    padding: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
`;


const PostContainer = styled.div`
    display: flex;
    padding: 16px 24px;
    justify-content: space-between;
    align-items: center;
`;

const Section = styled.section`
    max-width: 800px;
    background: #fff;
    padding: 20px;
    border: 1px solid #e3e3e3;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


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
        return <div>데이터를 로딩 중입니다...by FreePostList</div>;
    }

    return (
        <section>
            <TitleContainer>
                <strong>자유 게시판</strong>
            </TitleContainer>
            <ul>
                {postsData.map((post) => (
                    <Section>
                        <li key={post.postId}>
                            <Link to={`/post/${post.postId}`}>
                                <p className='font-bold'>{post.postTitle}</p>
                                <p>{post.postContent}</p>
                                <p>{post.postedDate}</p>
                            </Link>
                        </li>
                    </Section>
                    
                ))}
            </ul>
        </section>
    );
};

export default FreePostList;
