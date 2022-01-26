import { useNavigate } from 'react-router-dom';

export const RouteBtn = () => {
  let navigate = useNavigate();

  function handleGoCreatePost() {
    navigate('/createpost');
  }

  return (
    <div className="headerBtns">
      <div>
        <div className="headerBtn">마이페이지</div>
        <div className="headerBtn" onClick={handleGoCreatePost}>게시글작성</div>
      </div>
      <div>
        <div className="headerBtn headerBtnLogout">로그아웃</div>
      </div>
    </div>
  );
};
