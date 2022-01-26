import axios from 'axios';
import { useState } from 'react';
import '../App.css';

function Signup({ openModal }) {
  const [signupInfo, setSignupInfo] = useState({
    user_id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    mobile: '',
  });
  //정보 유효성 검사
  const [PasswordMsg, setPasswordMsg] = useState('');
  const [isPasswordMsg, setIsPasswordMsg] = useState(false);
  const [nameMsg, setNameMsg] = useState('');
  const [isNameMsg, setIsNameMsg] = useState(false);
  const [mobileMsg, setMobileMsg] = useState('');
  const [isMobileMsg, setIsMobileMsg] = useState(false);
  const [emailMsg, setEmailMsg] = useState('');
  const [isEmailMsg, setIsEmailMsg] = useState(false);
  //정보 입력 함수
  const inputValuePasswordC = (key) => (e) => {
    const { value } = e.target;
    if (
      (signupInfo.password !== value && signupInfo.passwordConfirm !== value) ||
      value.length === 0
    ) {
      setPasswordMsg('비밀번호를 확인해주세요.');
      setIsPasswordMsg(false);
    } else if (
      signupInfo.password === value ||
      signupInfo.passwordConfirm === value
    ) {
      setPasswordMsg('비밀번호가 일치합니다.');
      setIsPasswordMsg(true);
    }
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };
  const inputValueName = (key) => (e) => {
    const { value } = e.target;
    const only = value.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '');
    if (value.length < 2) {
      setNameMsg('두글자 이상 작성해주세요.');
      setIsNameMsg(false);
    } else {
      setNameMsg('올바른 이름 형식입니다.');
      setIsNameMsg(true);
    }
    setSignupInfo({ ...signupInfo, [key]: only });
  };

  const inputValueMobile = (key) => (e) => {
    const { value } = e.target;
    const only = value.replace(/[^0-9]/g, '');
    if (value.length < 8) {
      setIsMobileMsg(false);
      setMobileMsg('핸드폰 번호 8글자를 입력해주세요.');
    } else {
      setIsMobileMsg(true);
      setMobileMsg('올바른 핸드폰 번호 형식입니다.');
    }
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
  const inputValueEmail = (key) => (e) => {
    const emailReplace =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const email = e.target.value;

    setSignupInfo({ ...signupInfo, [key]: e.target.value });
    if (!emailReplace.test(email)) {
      setEmailMsg('이메일 형식이 틀렸습니다.');
      setIsEmailMsg(false);
    } else {
      setEmailMsg('올바른 이메일 형식입니다.');
      setIsEmailMsg(true);
    }
  };
  //체크박스 여부
  const [isC_15, setIsC_15] = useState(false);
  const [isC_S, setIsC_S] = useState(false);
  const [isC_Info, setIsC_Info] = useState(false);
  const check15 = () => {
    setIsC_15(!isC_15);
  };
  const checkS = () => {
    setIsC_S(!isC_S);
  };
  const checkInfo = () => {
    setIsC_Info(!isC_Info);
  };
  //회원가입 검증
  const handleSignupRequest = () => {
    if (
      !isPasswordMsg ||
      !isNameMsg ||
      !isMobileMsg ||
      !isEmailMsg ||
      !isC_15 ||
      !isC_S ||
      !isC_Info
    ) {
      setIsSignupModal(true);
    } else {
      axios
        .post('https://localhost:4000/signup', signupInfo, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then((res) => {
          setIsSignupModal(false);
          serverSuccessSignup();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const [isSignupModal, setIsSignupModal] = useState(false);
  const signupRequestModal = () => {
    setIsSignupModal(!isSignupModal);
  };
  const [isServerSuccessSignup, setServerSuccessSignup] = useState(false);
  const serverSuccessSignup = () => {
    setServerSuccessSignup(!isServerSuccessSignup);
  };

  const handleSuccessSignup = () => {
    setIsSignupModal(false);
    setServerSuccessSignup(false);
    openModal();
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
          value={signupInfo.user_id}
          onChange={inputValueId('user_id')}
        />
        <input
          className="inputBox"
          type="password"
          placeholder="비밀번호"
          value={signupInfo.password}
          onChange={inputValuePasswordC('password')}
        />

        <input
          className="inputBox"
          type="password"
          placeholder="비밀번호 확인"
          value={signupInfo.passwordConfirm}
          onChange={inputValuePasswordC('passwordConfirm')}
        />
        <div className={isPasswordMsg ? 'successMsg' : 'faileMsg'}>
          {PasswordMsg}
        </div>
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
        <div className={isNameMsg ? 'successMsg' : 'faileMsg'}>{nameMsg}</div>
        <div className="mobileAllBox">
          <input
            className="mobile010box"
            type="text"
            placeholder="010"
            disabled
          />
          <input
            className="mobileBodyBox"
            maxLength="8"
            type="text"
            placeholder="핸드폰 번호"
            value={signupInfo.mobile}
            onChange={inputValueMobile('mobile')}
          />
        </div>
        <div className={isMobileMsg ? 'successMsg' : 'faileMsg'}>
          {mobileMsg}
        </div>
        <input
          className="inputBox"
          type="email"
          placeholder="이메일"
          value={signupInfo.email}
          onChange={inputValueEmail('email')}
        />
        <div className={isEmailMsg ? 'successMsg' : 'faileMsg'}>{emailMsg}</div>
      </div>
      <div className="checkSignupMsg">
        <div>
          <input
            type="checkbox"
            className="checkboxSignup"
            onChange={check15}
          />
          <span>만 15세 이상</span>
        </div>
        <div>
          <input type="checkbox" className="checkboxSignup" onChange={checkS} />
          <span>서비스 이용약관에 동의</span>
        </div>
        <div>
          <input
            type="checkbox"
            className="checkboxSignup"
            onChange={checkInfo}
          />
          <span>개인정보 수집에 동의</span>
        </div>
      </div>
      <div className="loginBtn signupBtn" onClick={handleSignupRequest}>
        가입하기
      </div>
      {isSignupModal ? (
        <div className="faileModalBack">
          <div className="faileModal">
            <div className="faileModalMsg">
              정보입력 및 체크박스를 확인해주세요.
            </div>
            <span
              className="close-SignupFailemodal"
              onClick={signupRequestModal}
            >
              확인
            </span>
          </div>
        </div>
      ) : null}
      {isServerSuccessSignup ? (
        <div className="faileModalBack">
          <div className="faileModal">
            <div className="faileModalMsg">회원가입 완료</div>
            <div>로그인을 해주세요.</div>
            <span
              className="close-SignupFailemodal"
              onClick={handleSuccessSignup}
            >
              확인
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Signup;
