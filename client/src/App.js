import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import axios from "axios";
import HomePage from './Pages/HomePage'
import CreatePost from './Pages/CreatePost';
import ReadPost from './Pages/ReadPost';
import EditPost from './Pages/EditPost';
import Mypage from './Pages/Mypage';




function App() {
  
//   let url = "http://localhost:4000/"
  
 const [isLogin, setIsLogin] = useState(false)
 const [userinfo, setUserinfo] = useState("")
 const [allPost, setAllpost] = useState([])
 const [nowPost, setNowPost] = useState({
                                  user_id: 'kimcoding',
                                  occupation: '편의점',
                                  title:'GS편의점 대타 구합니다',
                                  wage:'10,000원 이상',
                                  work_date:'2022-01-01',
                                  work_place:'강북',
                                  content:'1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'                       
                                })
  
  
 
  
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
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/readpost" 
               element={<ReadPost
                          isLogin={isLogin}
                          userinfo={userinfo}
                          nowPost={nowPost}/>} />
        <Route path="/editpost" 
               element={<EditPost
                          isLogin={isLogin}
                          userinfo={userinfo}
                          nowPost={nowPost}/>} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>   
    </BrowserRouter>
   );
}


export default App;