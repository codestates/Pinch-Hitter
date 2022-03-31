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
import OAuthKakao from './Components/oauth/OAuthKakao';
import OAuthGoogle from './Components/oauth/OAuthGoogle';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState({
    id: 0,
    user_id: '',
    name: '',
    email: '',
    mobile: '',
  });
  const [allPost, setAllPost] = useState([]);
  const [nowPost, setNowPost] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isLogin={isLogin}
              setUserinfo={setUserinfo}
              allPost={allPost}
              setNowPost={setNowPost}
              setAllPost={setAllPost}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route
          path="/createpost"
          element={<CreatePost userinfo={userinfo} isLogin={isLogin} />}
        />
        <Route
          path="/readpost"
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
        <Route
          path="/oauth/kakao"
          element={<OAuthKakao setIsLogin={setIsLogin} />}
        />
        <Route
          path="/oauth/google"
          element={<OAuthGoogle setIsLogin={setIsLogin} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
