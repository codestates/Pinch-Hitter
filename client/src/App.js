import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import HomePage from "./Pages/HomePage";
import CreatePost from "./Pages/CreatePost";
import ReadPost from "./Pages/ReadPost";
import EditPost from "./Pages/EditPost";
import Mypage from "./Pages/Mypage";
import OAuthKakao from "./Components/oauth/OAuthKakao";
import OAuthGoogle from "./Components/oauth/OAuthGoogle";

let url = "https://localhost:4000";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: 1,
    user_id: "kimcoding1",
    name: "김코딩",
    email: "kimcoding1@naver.com",
    mobile: "01012341234",
  });
  const [currentPost, setCurrentPost] = useState("");

  // 로그인 성공 후 유저정보 불러오기
  const getUserInfo = () => {
    axios
      .get(url + "/users", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        //유저 데이타
        console.log(res.data);
        setUserInfo(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              getUserInfo={getUserInfo}
              isLogin={isLogin}
              setCurrentPost={setCurrentPost}
            />
          }
        />
        <Route
          path="/createpost"
          element={
            <CreatePost
              getUserInfo={getUserInfo}
              userInfo={userInfo}
              isLogin={isLogin}
            />
          }
        />
        <Route
          path="/readpost"
          element={
            <ReadPost
              getUserInfo={getUserInfo}
              isLogin={isLogin}
              userInfo={userInfo}
              currentPost={currentPost}
            />
          }
        />
        <Route
          path="/editpost"
          element={
            <EditPost
              getUserInfo={getUserInfo}
              isLogin={isLogin}
              userInfo={userInfo}
              currentPost={currentPost}
            />
          }
        />
        <Route
          path="/mypage"
          element={
            <Mypage
              getUserInfo={getUserInfo}
              isLogin={isLogin}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              currentPost={currentPost}
              setCurrentPost={setCurrentPost}
            />
          }
        />
        <Route
          path="/oauth/kakao"
          element={
            <OAuthKakao getUserInfo={getUserInfo} setIsLogin={setIsLogin} />
          }
        />
        <Route
          path="/oauth/google"
          element={
            <OAuthGoogle getUserInfo={getUserInfo} setIsLogin={setIsLogin} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
