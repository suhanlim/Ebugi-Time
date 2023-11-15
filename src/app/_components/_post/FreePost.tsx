"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';
import CommentList from './CommentList'; //댓글 리스트
import axios from 'axios';
import styled from 'styled-components';

const FreePostTitle = styled.section`
    font-size: 24px;
    color: #333;
    max-width: 800px;
    margin: auto;
    background: #fff;
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid #e3e3e3;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
    max-width: 800px;
    margin: auto;
    background: #fff;
    padding: 20px;
    border: 1px solid #e3e3e3;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CommentSection = styled.div`
    background: #f9f9f9;
    padding: 10px 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
`;

const CommentTitle = styled.h3`
    font-size: 20px;
    color: #333;
    margin-bottom: 15px;
`;

//어떤 유저가 작성한, 어떤 글인지 얻어와야함
//포스트 아이디(글 아이디)
//포스트 json파일 작성 필요
//포스트에 들어갈 내용
//포스트 아이디, 작성자 아이디, 작성 일자, 좋아요 수, 댓글 배열, 
//(스크랩 기능은 삭제)
//댓글 배열 => 댓글 객체
//댓글 객체에 들어갈 정보
//댓글 작성자, 작성 일자, 좋아요 수


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


const FreePost = () => {
    const { postId } = useParams(); // URL로부터 글 아이디 얻어오기

    const [postData, setPostData] = useState<PostData | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 전체 게시글 데이터 불러오기
                const response = await axios.get('/posts/FreePost.json'); 
                const postArray: PostData[] = response.data.posts
                const post = postArray.find(p => p.postId.toString() === postId); // URL의 postId와 일치하는 게시글 찾기
                if (post) {
                    setPostData(post);
                } else {
                    setPostData(null); // post가 undefined인 경우 null로 설정
                }
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchData(); // 비동기 처리
    }, [postId]);

    if (!postData) {
        return <div>데이터를 로딩 중입니다... by FreePost</div>;
    }

    return (
        <div>
                <FreePostTitle>
                    <b>자유 게시판</b>
                </FreePostTitle>
                <Section>
                    <Post
                        postTitle={postData.postTitle}
                        postId={postData.postId} 
                        postUserId={postData.postUserId}
                        postedDate={postData.postedDate}
                        postContent={postData.postContent}
                        likedCount={postData.likedCount}
                    />
                </Section>
                
                <Section>
                    <CommentList data={postData.comment}/>
                </Section>
        </div>
    );
}

export default FreePost;

