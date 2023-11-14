//작성된 글에 대한 화면
// use client
import styled from 'styled-components';

const PostContainer = styled.div`
    background: #f9f9f9;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
`;

const PostTitle = styled.h2`
    margin: 0;
    color: #333;
`;


//Post의 매개변수 타입 정의
interface PostProps {
    postId: number; //글 아이디
    postUserId: string; //작성자 아이디
    postedDate: string | undefined; //글 작성 시간
    postContent: string; //글 내용
    likedCount: number; //좋아요 수
}


const Post: React.FC<PostProps> = ({
    postId,
    postUserId,
    postedDate,
    postContent,
    likedCount
}) => (
    <>
        <PostTitle>
            <h2>게시글 번호: {postId}</h2>
        </PostTitle>

        <PostContainer>
            <p>작성자 ID: {postUserId}</p>
            <p>글 내용 : {postContent}</p>
            <time dateTime={postedDate}>{postedDate}</time>
            <p>좋아요 수: {likedCount}</p>
        </PostContainer>
    </>
    
)
export default Post