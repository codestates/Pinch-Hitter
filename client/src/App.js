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

function App() {
  //   let url = "http://localhost:4000/"

  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState('');
  const [allPost, setAllpost] = useState([
    {
      id: 1,
      title: '개꿀알바 사람 잘 안오는 편의점 대타 구해요!!',
      occupation: '편의점',
    },
    {
      id: 2,
      title: '주유소 대타 구해요 시급 만원!!',
      occupation: '주유소',
    },
    {
      id: 3,
      title: '시급 15,000원 선착순 1명!!',
      occupation: '일반식당',
    },
    {
      id: 4,
      title: '제발 하루만 대타좀 해주세요!',
      occupation: '전단지',
    },
    {
      id: 5,
      title: '개꿀알바 사람 잘 안오는 편의점 대타 구해요!!',
      occupation: '편의점',
    },
    {
      id: 6,
      title: '개꿀알바 사람 잘 안오는 편의점 대타 구해요!!',
      occupation: '운전',
    },
    {
      id: 7,
      title: '개꿀알바 사람 잘 안오는 편의점 대타 구해요!!',
      occupation: '편의점',
    },
    {
      id: 8,
      title: '개꿀알바 사람 잘 안오는 편의점 대타 구해요!!',
      occupation: '편의점',
    },
    {
      id: 9,
      title: 'ㄹㅇ 개꿀',
      occupation: '편의점',
    },
  ]);
  const [nowPost, setNowPost] = useState({
    user_id: 'kimcoding',
    occupation: '편의점',
    title: 'GS편의점 대타 구합니다',
    wage: '10,000원 이상',
    work_date: '2022-01-01',
    work_place: '강북',
    content:
      '1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.',
  });

  //로그인 성공시 이함수 실행
  const handleIsLogin = () => {
    console.log('로그인?');
    setIsLogin(!isLogin);
  };
  //로그인페이지에서 요청 성공시 이함수 실행
  const hadleLoginVerification = () => {
    axios
      .get('https://localhost:4000/auth', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then((res) => {
        //유저 데이타
        setUserinfo(res.data);
        handleIsLogin();
      })
      .catch((err) => console.log('err'));
  };

  const handleLogout = () => {
    axios
      .post('https://localhost:4000/logout')
      .then((res) => {
        setIsLogin(!isLogin);
        setUserinfo('');
      })
      .catch((err) => console.log('err'));
  };
  //!let navigate = useNavigate();

  const postClickNav = (post) => {
    //!setNowPost(post);
    console.log(post);
    //!navigate('/readpost');
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
              postClickNav={postClickNav}
              allPost={allPost}
            />
          }
        />
        <Route path="/createpost" element={<CreatePost />} />
        <Route
          path={`/readpost`}
          element={
            <ReadPost isLogin={isLogin} userinfo={userinfo} nowPost={nowPost} />
          }
        />
        <Route
          path="/editpost"
          element={
            <EditPost isLogin={isLogin} userinfo={userinfo} nowPost={nowPost} />
          }
        />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
