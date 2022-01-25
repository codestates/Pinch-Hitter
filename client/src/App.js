import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './Pages/HomePage';

import React from 'react';
import CreatePost from './Pages/CreatePost';
import ReadPost from './Pages/ReadPost';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  //   const [userinfo, setUserinfo] = useState("")
  //   const [allPost, setAllPost] = useState([])
  //   const [nowPost, setNowPost] = useState("")

  //로그인 성공시 이함수 실행
  const handleIsLogin = () => {
    setIsLogin(!isLogin);
  };
  //로그인페이지에서 요청 성공시 이함수 실행
  const hadleLoginVerification = () => {
    handleIsLogin();
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                hadleLoginVerification={hadleLoginVerification}
                isLogin={isLogin}
              />
            }
          />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/readpost" element={<ReadPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
