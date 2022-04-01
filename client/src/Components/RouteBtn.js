<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import axios from "axios";
=======
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4

export const MenuListBack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;
export const MenuList = styled.div`
  font-size: 13px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Line = styled.div`
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  height: 16px;
`;

export const RouteBtn = ({ handleLogout, setIsLogin }) => {
  let navigate = useNavigate();

  function handleGoMypage() {
    navigate('/mypage');
  }

  function handleGoCreatePost() {
    navigate("/createpost");
  }

  //로그아웃
  const handleLogoutBtnClick = () => {
<<<<<<< HEAD
    axios.post(`${process.env.PinchHitterUrl}/signout`).then((res) => {
      handleLogout();
    });
=======
    axios
      .get(`${process.env.REACT_APP_SERVER_URI}/logout`)
      .then((res) => {
        window.localStorage.removeItem('IsRefresh');
        setIsLogin(false);
        navigate('/');
      })
      .catch((err) => console.log(err, '로그아웃 err'));
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
  };

  return (
    <MenuListBack>
      <MenuList onClick={handleGoMypage}>마이페이지</MenuList>
      <Line></Line>
      <MenuList onClick={handleGoCreatePost}>게시글작성</MenuList>
      <Line></Line>
      <MenuList onClick={handleLogoutBtnClick}>로그아웃</MenuList>
    </MenuListBack>
  );
};
