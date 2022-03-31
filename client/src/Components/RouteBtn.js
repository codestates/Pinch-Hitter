import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RouteBtn = ({ handleLogout }) => {
  let navigate = useNavigate();

  function handleGoCreatePost() {
    navigate("/createpost");
  }

  const handleLogoutBtnClick = () => {
    axios.post(`${process.env.PinchHitterUrl}/signout`).then((res) => {
      handleLogout();
    });
  };

  return (
    <div className="headerBtns">
      <div>
        <div className="headerBtn">마이페이지</div>
        <div className="headerBtn" onClick={handleGoCreatePost}>
          게시글작성
        </div>
      </div>
      <div>
        <div
          className="headerBtn headerBtnLogout"
          onClick={handleLogoutBtnClick}
        >
          로그아웃
        </div>
      </div>
    </div>
  );
};
