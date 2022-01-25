import { useState } from 'react';
import '../App.css';

function Login(props) {
  //임시 더미 test 데이타
  const userInfo = { id: 'yunho', password: '1234' };
  //아이디 비밀번호 서버로 전달해주기 위해 state로 관리
  const [loginInfo, setLoginInfo] = useState({ id: '', password: '' });
  //아이디 비번 틀릴경우 메세지

  const [failureLoginMsg, setFailureLoginMsg] = useState(<br></br>);

  const inputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
    //console.log(loginInfo);
    //타이핑을 치면 loginInfo로 정보가 전달
  };

  //! 아이디 비밀번호 둘다 확인시 번거로워짐
  const handleLogin = () => {
    console.log('로그인 버튼 눌러 실행했니?');
    if (!(loginInfo.id, loginInfo.password)) {
      setFailureLoginMsg('아이디와 비밀번호를 입력해 주세요.');
    } else {
      if (
        loginInfo.password !== userInfo.password ||
        loginInfo.id !== userInfo.id
      ) {
        setFailureLoginMsg('입력하신 아이디 또는 비밀번호가 틀립니다.');
      } else {
        setFailureLoginMsg('로그인 성공');
      }
    }
    //axios.post 요청
    //아이디와 비밀번호를 입력을 했다면 서버로 그정보를 보내 db존재하는
    //정보인지 확인(검증 하는 함수 실행)
    //handleLoginSuccess() 함수 실행
  };
  const test777 = () => {
    console.log('회원가입 버튼 눌렀네?');
    props.clickSignup();
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
            <div className="failureLoginMsg">{failureLoginMsg}</div>
          </div>
        </div>
      </div>
      <div>
        <div className="loginBtn" onClick={handleLogin}>
          로그인
        </div>
      </div>
      <div>
        <div className="loginBtn" onClick={test777}>
          회원가입
        </div>
      </div>
    </div>
  );
}

export default Login;
