import axios from 'axios';
import { useState } from 'react';
import '../App.css';

function Login({ hadleLoginVerification, clickSignup, openModal }) {
  const [loginInfo, setLoginInfo] = useState({ user_id: '', password: '' });
  //아이디 비번 틀릴경우 메세지

  const [failureLoginMsg, setFailureLoginMsg] = useState(<br></br>);

  const inputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });

    //타이핑을 치면 loginInfo로 정보가 전달
  };

  const handleLogin = () => {
    if (!(loginInfo.user_id, loginInfo.password)) {
      setFailureLoginMsg('아이디와 비밀번호를 입력해 주세요.');
    } else {
      axios
        .post('https://localhost:4000/login', loginInfo, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then((res) => {
          hadleLoginVerification();
          openModal();
        })
        .catch((err) => {
          setFailureLoginMsg('입력하신 아이디 또는 비밀번호가 틀립니다.');
          console.log('로그인 중 err');
        });
    }
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
              onChange={inputValue('user_id')}
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
