import { useState } from 'react';
import styled from 'styled-components';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

export const ModalBack = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const SideBarModal = styled.div`
  text-align: center;
  margin: right;
`;
//모달 로그인 버튼
export const ModalButton = styled.button`
  margin-right: 10px;
  margin-top: 60px;
  background-color: #7c99ac;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: grab;
  width: 100px;
  height: 30px;
  box-shadow: 2px 1px 3px 1px #dadce0;
`;

//Login 모달창 open 시
export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  border-radius: 3px;
  background-color: #ffffff;
  width: 400px;
  height: 440px;
  box-shadow: 1px 1px 1px 1px #dadce0;
  position: relative;

  > span.close-modal {
    position: absolute;
    top: 0px;
    right: 5px;
    cursor: pointer;
    font-size: 30px;
    color: rgb(150, 150, 150);
  }

  > div.login {
    margin-top: 25px;
  }
`;

//Signup 모달창 open 시
export const ModalSignupView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  border-radius: 3px;
  background-color: #ffffff;
  width: 400px;
  height: 540px;
  box-shadow: 1px 1px 1px 1px #dadce0;
  position: relative;

  > span.close-modal {
    position: absolute;
    top: 0px;
    right: 5px;
    cursor: pointer;
    font-size: 30px;
    color: rgb(150, 150, 150);
  }

  > div.login {
    margin-top: 25px;
  }
`;

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
    setIsModal(false);
  };

  const [isModal, setIsModal] = useState(false);

  const clickSignup = () => {
    setShowModal(false);
    setIsModal(!isModal);
  };
  return (
    <>
      {isModal ? (
        <SideBarModal>
          <ModalButton>로그인</ModalButton>
          <ModalBack>
            <ModalSignupView>
              <span onClick={clickSignup} className="close-modal">
                &times;
              </span>
              <Signup />
            </ModalSignupView>
          </ModalBack>
        </SideBarModal>
      ) : (
        <SideBarModal>
          <ModalButton onClick={openModal}>로그인</ModalButton>
          {showModal === true ? (
            <ModalBack onClick={openModal}>
              <ModalView onClick={(e) => e.stopPropagation()}>
                <span onClick={openModal} className="close-modal">
                  &times;
                </span>

                <Login clickSignup={clickSignup} />
              </ModalView>
            </ModalBack>
          ) : null}
        </SideBarModal>
      )}
    </>
  );
};