import { MainPosts } from './MainPost';
import { useEffect } from 'react';
import axios from 'axios';

import Header from '../Components/Headers';

let url = 'https://localhost:4000';

function HomePage({
  setIsLogin,
  isLogin,
  postClickNav,
  setUserinfo,
  allPost,
  setAllPost,
  setNowPost,
}) {
  useEffect(() => {
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
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <MainPosts allPost={allPost} setNowPost={setNowPost} />
    </>
  );
}

export default HomePage;
