"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { api } from "~/trpc/react";

interface PostData {
  postTitle: string;
  postId: number;
  postUserId: string;
  postedDate: string | undefined;
  likedCount: number;
  postContent: string;
  comment: CommentData[];
}

interface PostsResponse {
  posts: PostData[];
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

const Section = styled.section`
  max-width: 800px;
  background: #fff;
  padding: 20px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FreePostList = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("open");
  const userId = "0613ffcf-cee3-490b-8642-65d206d7bed6";
  // State for error messages
  const [error, setError] = useState("");
  const handlePosting = () => {
    // Check if title, content, or category is empty
    if (title.trim() === "" || content.trim() === "" || category === "") {
      alert("정확히 입력되었는지 다시 확인해주세요.");
    } else {
      // Your code for successful submission

      api.post.create.useMutation({});
      alert("Posting 성공");
    }
  };

  const [postsData, setPostsData] = useState<PostData[]>([]);
  const categoryInfo = api.category.getAllCategory.useQuery({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("데이터 로딩중");
        // 모든 게시글을 포함하는 JSON 파일
        // const response = await axios.get('/posts/FreePost.json');
        // const postArray: PostData[] = response.data.posts
        // setPostsData(postArray);
        // console.log(response.data.posts);
        const response = await axios.get<PostsResponse>("/posts/FreePost.json");
        setPostsData(response.data.posts);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData().catch(console.error);
  }, []);

  if (!postsData.length) {
    return <div>데이터를 로딩 중입니다...by FreePostList</div>;
  }

  return (
    <section>
      <TitleContainer>
        <strong className="pr-10">자유 게시판</strong>
        {/* The button to open modal */}
        <label htmlFor="my_modal_6" className="btn">
          New Post
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="pb-2 text-lg font-bold">New Posting!</h3>

            <div>
              {error && <div className="error-message">{error}</div>}
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select select-info mt-1 w-full rounded border p-2"
              >
                <option disabled selected>
                  Choose Category
                </option>
                {categoryInfo.data?.map((data, index) => (
                  <option value={data.name} key={index}>
                    {data.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Title"
                id="title"
                className="input input-bordered input-primary w-full max-w-xs"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Content"
                id="textarea"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <p className="py-4"> Image random generate</p>
            <div className="modal-action">
              <button className="btn" onClick={handlePosting}>
                Posting
              </button>
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
      </TitleContainer>
      <ul>
        {postsData.map((post) => (
          <Section key={post.postId}>
            <li>
              <Link to={`/post/${post.postId}`}>
                <p className="font-bold">{post.postTitle}</p>
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
