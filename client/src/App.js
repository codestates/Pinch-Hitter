import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import axios from "axios";
import HomePage from './Pages/HomePage'
import CreatePost from './Pages/CreatePost';
import ReadPost from './Pages/ReadPost';
import EditPost from './Pages/EditPost';
import Mypage from './Pages/Mypage';


let url = "https://localhost:4000/"

function App() {
  
 const [isLogin, setIsLogin] = useState(false)
 const [userinfo, setUserinfo] = useState("")
 const [allPost, setAllpost] = useState([])
 const [nowPost, setNowPost] = useState("")
  
  
 
  
  //로그인 성공시 이함수 실행
  const handleIsLogin = () => {
    setIsLogin(!isLogin);
  };
  //로그인페이지에서 요청 성공시 이함수 실행
  const hadleLoginVerification = () => {
    handleIsLogin();
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