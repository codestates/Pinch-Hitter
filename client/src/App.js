import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import axios from "axios";
import Header from './Components/Header.js';
import CreatePost from './Pages/CreatePost';
import ReadPost from './Pages/ReadPost';
import EditPost from './Pages/EditPost';
import Mypage from './Pages/Mypage';
import './App.css';

function App() {

  let url = "http://localhost:4000/"

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








  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
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
