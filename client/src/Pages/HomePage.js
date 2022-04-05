import { MainPosts } from './MainPost';
import Header from '../Components/Header';
import { useEffect } from 'react';
import axios from 'axios';

let url = 'https://localhost:4000';

function HomePage({
  hadleLoginVerification,
  isLogin,
  setIsLogin,
  handleLogout,
  postClickNav,
  allPost,
  setAllPost,
  setCurrentPost,
}) {
  return (
    <>
      <Header
        hadleLoginVerification={hadleLoginVerification}
        isLogin={isLogin}
        handleLogout={handleLogout}
        setIsLogin={setIsLogin}
      />
      <MainPosts allPost={allPost} setCurrentPost={setCurrentPost} />
    </>
  );
}

export default HomePage;
