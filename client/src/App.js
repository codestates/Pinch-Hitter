import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import HomePage from './Pages/HomePage';
import CreatePost from './Pages/CreatePost';
import ReadPost from './Pages/ReadPost';
import EditPost from './Pages/EditPost';
import Mypage from './Pages/Mypage';

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
  const [allPost, setAllPost] = useState([
    {
      id: 1,
      user_id: 'kimcoding1',
      occupation: '편의점',
      title: 'GS편의점 대타 구합니다!',
      wage: '10,000원 이상',
      work_date: '2022-02-15',
      work_place: '강북',
      content:
        '1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.',
    },
    {
      id: 2,
      user_id: 'kimcoding2',
      occupation: '패스트푸드점',
      title: '햄버거 패스트 푸드점 대타 구합니다!',
      wage: '10,000원 이상',
      work_date: '2022-02-03',
      work_place: '강북',
      content:
        '1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.',
    },
    {
      id: 3,
      user_id: 'kimcoding3',
      occupation: '카페',
      title: '동네 카페에서 대타 구합니다!',
      wage: '10,000원 이상',
      work_date: '2022-02-08',
      work_place: '강북',
      content:
        '1월 3일 도봉구 방학동에서 아침 9시에서 저녁 6시까지 pc방 대타 구합니다.',
    },
  ]);
  const [currentPost, setCurrentPost] = useState('');

  //로그인 성공시 이함수 실행
  const handleIsLogin = () => {
    console.log('로그인?');
    setIsLogin(!isLogin);
    console.log(userInfo);
  };

  //로그인페이지에서 요청 성공시 이함수 실행
  const hadleLoginVerification = () => {
    axios
      .get(url + '/auth', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then((res) => {
        //유저 데이타
        console.log(res.data.data.userInfo);
        setUserInfo(res.data.data.userInfo);
        handleIsLogin();
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    axios
      .post(url + '/logout')
      .then((res) => {
        setIsLogin(!isLogin);
        setUserInfo('');
      })
      .catch((err) => console.log('err'));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              hadleLoginVerification={hadleLoginVerification}
              isLogin={isLogin}
              handleLogout={handleLogout}
              allPost={allPost}
              setCurrentPost={setCurrentPost}
              setAllPost={setAllPost}
            />
          }
        />
        <Route
          path="/createpost"
          element={
            <CreatePost
              hadleLoginVerification={hadleLoginVerification}
              userInfo={userInfo}
              isLogin={isLogin}
            />
          }
        />
        <Route
          path="/readpost"
          element={
            <ReadPost
              hadleLoginVerification={hadleLoginVerification}
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
              hadleLoginVerification={hadleLoginVerification}
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
              hadleLoginVerification={hadleLoginVerification}
              isLogin={isLogin}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              currentPost={currentPost}
              setCurrentPost={setCurrentPost}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 아래는 allPost 더미데이터

// {
//   id: 1,
//   user_id: 'kimcoding1',
//   occupation: '편의점',
//   title: 'GS편의점 대타 구합니다!',
//   wage: '10,000원 이상',
//   work_date: '2022-02-15',
//   work_place: '강북',
//   content:
//     '1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.',
// },
// {
//   id: 2,
//   user_id: 'kimcoding2',
//   occupation: '패스트푸드점',
//   title: '햄버거 패스트 푸드점 대타 구합니다!',
//   wage: '10,000원 이상',
//   work_date: '2022-02-03',
//   work_place: '강북',
//   content:
//     '1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.',
// },
// {
//   id: 3,
//   user_id: 'kimcoding3',
//   occupation: '카페',
//   title: '동네 카페에서 대타 구합니다!',
//   wage: '10,000원 이상',
//   work_date: '2022-02-08',
//   work_place: '강북',
//   content:
//     '1월 3일 도봉구 방학동에서 아침 9시에서 저녁 6시까지 pc방 대타 구합니다.',
// },
