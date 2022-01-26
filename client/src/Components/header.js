import { Modal } from './Modal';
import { useNavigate } from 'react-router-dom';

function Header({ hadleLoginVerification, isLogin, handleLogout }) {
  let navigate = useNavigate();

  function handleGoHom() {
    navigate('/');
  }

  return (
    <div>
      <div className="main_header">
        <img
          className="header_logo"
          src="img/pinchLog_remove.png"
          onClick={handleGoHom}
        />

        <Modal
          hadleLoginVerification={hadleLoginVerification}
          isLogin={isLogin}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
}

export default Header;
