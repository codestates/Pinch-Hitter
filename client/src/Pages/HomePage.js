import { MainPosts } from './MainPost';
import Header from '../Components/Header';
import { useEffect } from 'react';
import axios from 'axios';

function HomePage({
  hadleLoginVerification,
  isLogin,
  handleLogout,
  postClickNav,
  allPost,
  setAllpost,
}) {
  useEffect(() => {
    axios
      .get('url + notice_board', {
        withCredentials: true,
      })
      .then((res) => {
        setAllpost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Header
        hadleLoginVerification={hadleLoginVerification}
        isLogin={isLogin}
        handleLogout={handleLogout}
      />
      <MainPosts postClickNav={postClickNav} allPost={allPost} />
    </>
  );
}

export default HomePage;
