import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
<<<<<<< HEAD
} from "react-router-dom";
import axios from "axios";
import HomePage from "./Pages/HomePage";
import CreatePost from "./Pages/CreatePost";
import ReadPost from "./Pages/ReadPost";
import EditPost from "./Pages/EditPost";
import Mypage from "./Pages/Mypage";

let url = "https://localhost:4000";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState({
    id: 0,
    user_id: "",
    name: "",
    email: "",
    mobile: "",
  });
  const [allPost, setAllPost] = useState([]);
  const [nowPost, setNowPost] = useState("");

  //로그인 성공시 이함수 실행
  const handleIsLogin = () => {
    console.log("로그인?");
    setIsLogin(!isLogin);
    console.log(userinfo);
  };
  //로그인페이지에서 요청 성공시 이함수 실행
  const hadleLoginVerification = () => {
    axios
      .get(`${process.env.PinchHitterUrl}/auth`, {
        headers: { "Content-Type": "application/json" },
=======
} from 'react-router-dom';
import axios from 'axios';
import HomePage from './Pages/HomePage';
import CreatePost from './Pages/CreatePost';
import ReadPost from './Pages/ReadPost';
import EditPost from './Pages/EditPost';
import Mypage from './Pages/Mypage';
import OAuthKakao from './Components/oauth/OAuthKakao';
import OAuthGoogle from './Components/oauth/OAuthGoogle';

let url = 'https://localhost:4000';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [userInfo, setUserInfo] = useState({
    id: 1,
    user_id: 'kimcoding1',
    name: '김코딩',
    email: 'kimcoding1@naver.com',
    mobile: '01012341234',
  });
  const [currentPost, setCurrentPost] = useState('');

  // 로그인 성공 후 유저정보 불러오기
  const getUserInfo = () => {
    axios
      .get(url + '/users', {
        headers: { 'Content-Type': 'application/json' },
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
        withCredentials: true,
      })
      .then((res) => {
        //유저 데이타
<<<<<<< HEAD
        console.log(res.data.data.userInfo);
        setUserinfo(res.data.data.userInfo);
        handleIsLogin();
=======
        console.log(res.data);
        setUserInfo(res.data);
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
      })
      .catch((err) => console.log(err));
  };

<<<<<<< HEAD
  const handleLogout = () => {
    axios
      .post(`${process.env.PinchHitterUrl}/logout`)
      .then((res) => {
        setIsLogin(!isLogin);
        setUserinfo("");
      })
      .catch((err) => console.log("err"));
  };

=======
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
<<<<<<< HEAD
              hadleLoginVerification={hadleLoginVerification}
=======
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
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
              isLogin={isLogin}
            />
          }
        />
        <Route
<<<<<<< HEAD
          path="/createpost"
          element={
            <CreatePost
              hadleLoginVerification={hadleLoginVerification}
              userinfo={userinfo}
              isLogin={isLogin}
=======
          path="/readpost"
          element={
            <ReadPost
              getUserInfo={getUserInfo}
              isLogin={isLogin}
              userInfo={userInfo}
              currentPost={currentPost}
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
            />
          }
        />
        <Route
<<<<<<< HEAD
          path="/readpost"
          element={
            <ReadPost
              hadleLoginVerification={hadleLoginVerification}
              isLogin={isLogin}
              userinfo={userinfo}
              nowPost={nowPost}
=======
          path="/editpost"
          element={
            <EditPost
              getUserInfo={getUserInfo}
              isLogin={isLogin}
              userInfo={userInfo}
              currentPost={currentPost}
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
            />
          }
        />
        <Route
<<<<<<< HEAD
          path="/editpost"
          element={
            <EditPost
              hadleLoginVerification={hadleLoginVerification}
              isLogin={isLogin}
              userinfo={userinfo}
              nowPost={nowPost}
            />
          }
        />
        <Route path="/mypage" element={<Mypage />} />
=======
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
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
      </Routes>
    </BrowserRouter>
  );
}

export default App;
<<<<<<< HEAD

/**
 * {
    user_id: 1,
    occupation: '편의점',
    title:'GS편의점 대타 구합니다',
    wage:'10,000원 이상',
    work_date:'2022-01-01',
    work_place:'강북',
    content:'1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
  },
  {
    user_id: 2,
    occupation: '편의점',
    title:'CU편의점 대타 구합니다',
    wage:'10,000원 이상',
    work_date:'2022-01-02',
    work_place:'강북',
    content:'1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
  }
 */
=======
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
