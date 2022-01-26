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


let url = "https://localhost:4000/"

function App() {
  
 const [isLogin, setIsLogin] = useState(false)
 const [userinfo, setUserinfo] = useState("")
 const [allPost, setAllpost] = useState([])
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
        <Route path="/createpost" 
               element={<CreatePost
                          hadleLoginVerification={hadleLoginVerification} />} />
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
