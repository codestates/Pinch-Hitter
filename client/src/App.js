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



let url = "https://localhost:4000"

function App() {
  

  const [isLogin, setIsLogin] = useState(false)
  const [userinfo, setUserinfo] = useState({
    id:0,
    user_id:'',
    name:'',
    email:'',
    mobile:''
  })
  const [allPost, setAllPost] = useState([])
  const [nowPost, setNowPost] = useState("")

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
        console.log(res.data.data.userInfo)
        setUserinfo(res.data.data.userInfo);
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
              setNowPost={setNowPost}
              setAllPost={setAllPost}
            />
            }
          />
        <Route path="/createpost" 
               element={<CreatePost
                          userinfo={userinfo} />} />
        <Route path="/readpost" 
               element={<ReadPost
                          hadleLoginVerification={hadleLoginVerification}
                          isLogin={isLogin}
                          userinfo={userinfo}
                          nowPost={nowPost}/>} />
        <Route path="/editpost" 
               element={<EditPost
                          hadleLoginVerification={hadleLoginVerification}
                          isLogin={isLogin}
                          userinfo={userinfo}
                          nowPost={nowPost}/>} />
        <Route path="/mypage" element={<Mypage />} />
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