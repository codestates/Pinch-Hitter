import { MainPosts } from './MainPost';
import Header from '../Components/Header';
import { useEffect } from 'react';
import axios from 'axios';

let url = 'https://localhost:4000';

function HomePage({
  hadleLoginVerification,
  isLogin,
  handleLogout,
  postClickNav,
  allPost,
  setAllPost,
  setNowPost,
}) {
  useEffect(() => {
    console.log('hompage 20번줄');
    axios
      .get('https://localhost:4000/notice_board', {
        withCredentials: true,
      })
      .then(function (res) {
        setAllPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header
        hadleLoginVerification={hadleLoginVerification}
        isLogin={isLogin}
        handleLogout={handleLogout}
      />
      <MainPosts allPost={allPost} setNowPost={setNowPost} />
    </>
  );
}

export default HomePage;
