import axios from 'axios';
import { useState } from 'react';
import '../App.css';

function Login({ hadleLoginVerification, clickSignup }) {
  //임시 더미 test 데이타
  const dummy = {
    user_id: 'test1',
    password: '1234abc',
    name: 'kimcoding1',
    email: 'test1@codingjoa.com',
    mobile: '01012345678',
  };

  const [loginInfo, setLoginInfo] = useState({ id: '', password: '' });
  //아이디 비번 틀릴경우 메세지

  const [failureLoginMsg, setFailureLoginMsg] = useState(<br></br>);

  const inputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });

    //타이핑을 치면 loginInfo로 정보가 전달
  };

  const handleLogin = () => {
    if (!(loginInfo.id, loginInfo.password)) {
      setFailureLoginMsg('아이디와 비밀번호를 입력해 주세요.');
    } else if (
      dummy.user_id === loginInfo.id &&
      dummy.password === loginInfo.password
    ) {
      // 성공 시 axios 해서 성공 답변 올때
      hadleLoginVerification();
    } else {
      /*
      axios.post('https://localhost:80/login', loginInfo, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then((res) => {
        // hadleLoginVerification() 유저정보가 있으면 검증 함수 실행
      }).catch((err) =>{
      setFailureLoginMsg('입력하신 아이디 또는 비밀번호가 틀립니다.')
      console.log('로그인 중 err')});
      */
      // if (
      //   loginInfo.password !== userInfo.password ||
      //   loginInfo.id !== userInfo.id
      // ) {
      // } else {
      //   setFailureLoginMsg('로그인 성공');
      // }
    }

    //axios.post 요청
    //아이디와 비밀번호를 입력을 했다면 서버로 그정보를 보내 db존재하는
    //정보인지 확인(검증 하는 함수 실행)
    //handleLoginSuccess() 함수 실행
  };
  const handleSignupPage = () => {
    clickSignup();
  };

  return (
    <div>
      <div>
        <img src="img/pinchLog.png" width="250px" height="130px" />
      </div>
      <div className="loginLogo">로그인</div>
      <div>
        <div>
          <div className="loginId">
            <input
              className="inputBox"
              type="id"
              placeholder="아이디"
              onChange={inputValue('id')}
            />
          </div>
          <div className="loginPassword">
            <input
              className="inputBox"
              type="password"
              placeholder="비밀번호"
              onChange={inputValue('password')}
            />
            <div className="faileMsg">{failureLoginMsg}</div>
          </div>
        </div>
      </div>
      <div>
        <div className="loginBtn" onClick={handleLogin}>
          로그인
        </div>
      </div>
      <div>
        <div className="loginBtn" onClick={handleSignupPage}>
          회원가입
        </div>
      </div>
    </div>
  );
}

export default Login;
