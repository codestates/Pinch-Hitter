import { Modal } from './modal';

function Header() {
  return (
    <div>
      <div className="main_header">
        <img className="header_logo" src="img/pinchLog_remove.png" />

        {/*로그인 상태에 따라 modal(로그인 버튼),마이페지와 로그아웃 표시 삼항 연산자 사용*/}

        <Modal />
      </div>
    </div>
  );
}

export default Header;
