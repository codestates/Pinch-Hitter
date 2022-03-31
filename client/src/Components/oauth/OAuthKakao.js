import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OAuthKakao({ setIsLogin }) {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URI}/oauth/kakao`,
        { data: code },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((res) => {
        navigate('/');
        setIsLogin(true);
      })
      .catch((err) => console.log(err, '카카오 로그인err'));
  }, []);
  return <div>카카오 로그인중</div>;
}

export default OAuthKakao;
