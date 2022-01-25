import { useState } from 'react';
import '../App.css';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    mobile: '',
  });
  const inputValue = (key) => (e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };
  const inputValueMobile = (key) => (e) => {
    const { value } = e.target;
    const only = value.replace(/[^0-9]/g, '');
    setSignupInfo({ ...signupInfo, [key]: only });
  };
  const inputValueId = (key) => (e) => {
    const { value } = e.target;
    const only = value.replace(
      /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,
      ''
    );
    setSignupInfo({ ...signupInfo, [key]: only });
  };
  const inputValueName = (key) => (e) => {
    const { value } = e.target;
    const only = value.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '');
    setSignupInfo({ ...signupInfo, [key]: only });
  };
  const inputValueEmail = (key) => (e) => {
    const { value } = e.target;
    const only = value.replace(
      /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/
    );
    setSignupInfo({ ...signupInfo, [key]: only });
  };

  return (
    <div className="signupBox">
      <div>
        <div
          className="signupHeader"
          style={{ fontSize: '25px', marginTop: '10px' }}
        >
          회원가입
        </div>
      </div>
      <div>
        <input
          className="inputBox"
          type="id"
          placeholder="아이디"
          value={signupInfo.id}
          onChange={inputValueId('id')}
        />
        <input
          className="inputBox"
          type="password"
          placeholder="비밀번호"
          onChange={inputValue('password')}
        />
        <input
          className="inputBox"
          type="password"
          placeholder="비밀번호 확인"
          onChange={inputValue('passwordConfirm')}
        />
        <div className="failureLoginMsg">비밀번호를 확인해주세요.</div>
      </div>
      <div>
        <input
          className="inputBox"
          type="text"
          value={signupInfo.name}
          placeholder="이름"
          maxLength="10"
          onChange={inputValueName('name')}
        />
        <input
          className="inputBox"
          maxLength="11"
          type="text"
          placeholder="핸드폰 번호"
          value={signupInfo.mobile}
          onChange={inputValueMobile('mobile')}
        />
        <input
          className="inputBox"
          type="email"
          placeholder="이메일"
          s
          value={signupInfo.email}
          onChange={inputValueEmail('email')}
        />

        {/*핸드폰 하이픈 입력 못하게 정규식 사용*/}
      </div>
      <div className="checkSignupMsg">
        <div>
          <input type="checkbox" className="checkboxSignup" />
          <span>만 15세 이상</span>
        </div>
        <div>
          <input type="checkbox" className="checkboxSignup" />
          <span>서비스 이용약관에 동의</span>
        </div>
        <div>
          <input type="checkbox" className="checkboxSignup" />
          <span>개인정보 수집에 동의</span>
        </div>
      </div>
      <div className="loginBtn signupBtn">가입하기</div>
    </div>
  );
}

export default Signup;
