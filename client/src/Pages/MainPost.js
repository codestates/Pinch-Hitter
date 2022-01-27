import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import styled from 'styled-components';

export const PostBackground = styled.div`
  margin: 30px;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const Post = styled.div`
width: 260px;
  height: 350px;

  margin: 15px;
  border: 1px solid #ffc0cb;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    border: 3px solid #006fff;
  }
`;

export const PostContents = styled.div`
  width: 95%;
  height: 150px;
  background-color: white;
`;
export const MainPosts = ({ allPost, setNowPost }) => {
  // 함수, 직종 = 맞는 직종 이미지
  // 게시판아이디 직종 제목
    const navigate = useNavigate();
    const handelPost = (post) => {
      
      console.log(post)
      setNowPost(post)
      navigate("/readpost")
    };

  return (
    <>
      <PostBackground >
        {allPost.map((post) => {
          
        return(
          <Post onClick={() => handelPost(post)} key={post.id} >
            <img
              className="work_img"
              src={`img/img_work/${post.occupation}.jpeg`}
            />
            <PostContents>{post.title}</PostContents>
          </Post>
        ) 
        })}
      </PostBackground>
    </>
  );
};
