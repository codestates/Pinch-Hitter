<<<<<<< HEAD
import axios from "axios";
import React from "react";
=======
import axios from 'axios';
import React from 'react';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
<<<<<<< HEAD
} from "react-router-dom";
import Header from "../Components/header";
=======
} from 'react-router-dom';
import Header from '../Components/Header';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
import {
  WrapperDiv,
  Head,
  Body,
  SectorWrapper,
  TitleDiv,
  RTitleInput,
  IndexDiv,
  RContentTextarea,
  CompleteButton,
<<<<<<< HEAD
} from "../Components/CreatePostComponents";
=======
} from '../Components/CreatePostComponents';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
import {
  RModal,
  FixButton,
  IdDiv,
  DeleteButton,
  ButtonDiv,
  TitleWrapper,
<<<<<<< HEAD
} from "../Components/ReadPostComponents";
// import { Modal } from "../Components/Modal";
=======
} from '../Components/ReadPostComponents';
import { Modal } from '../Components/Modal';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4

let url = 'https://localhost:4000';

export const ReadPost = (props) => {
  const navigate = useNavigate();

  // 지원하기 버튼 누르면 지원자 정보 post요청
  const applyButton = () => {
<<<<<<< HEAD
    console.log("지원하기 버튼 클릭");
=======
    console.log('지원하기 버튼 클릭');
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4

    axios({
      url: `${process.env.REACT_APP_SERVER_URI}/applicants`,
      method: 'post',
      data: {
        boards_id: props.currentPost.id,
      },
      withCredentials: true,
    })
      .then(() => {
<<<<<<< HEAD
        alert("지원을 완료하셨습니다.");
        navigate("/");
=======
        alert('지원을 완료하셨습니다.');
        navigate('/');
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
      })
      .catch((err) => console.log(err));
  };

  // 게시물 수정페이지로 이동
  const fixPostButton = () => {
    console.log('수정 버튼 클릭');

    navigate('/editpost');
  };

<<<<<<< HEAD
    navigate("/editpost");
  };

  // 게시물 삭제 요청
  const deletePostButton = () => {
    console.log("삭제 버튼 클릭");

    axios({
      url: url + "/notice_board",
      method: "delete",
      data: { title: props.nowPost.title },
=======
  // 게시물 삭제 요청
  const deletePostButton = () => {
    console.log('삭제 버튼 클릭');

    axios({
      url: `${process.env.REACT_APP_SERVER_URI}/boards/${props.currentPost.id}`,
      method: 'delete',
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
      withCredentials: true,
    })
      .then((res) => {
        alert(res.data);
<<<<<<< HEAD
        navigate("/");
=======
        navigate('/');
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
      })
      .catch((err) => console.log(err));
  };

<<<<<<< HEAD
  // console.log(props.userinfo)
  // console.log(String(props.nowPost.user_id))
=======
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
  return (
    <>
      <Header
        hadleLoginVerification={props.hadleLoginVerification}
        isLogin={props.isLogin}
      />
      <WrapperDiv>
        <Body>
          <TitleWrapper>
            <TitleDiv>게시글 보기</TitleDiv>
            <IdDiv float="right">
              작성자 닉네임: {props.currentPost.nickname}
            </IdDiv>
          </TitleWrapper>
          <SectorWrapper>
            <IndexDiv>제목</IndexDiv>
<<<<<<< HEAD
            <RTitleInput readOnly value={props.nowPost.title} />
            <IndexDiv>지역</IndexDiv>
            <RTitleInput readOnly value={props.nowPost.work_place} />
            <IndexDiv>날짜</IndexDiv>
            <RTitleInput readOnly value={props.nowPost.work_date} />
            <IndexDiv>직종</IndexDiv>
            <RTitleInput readOnly value={props.nowPost.occupation} />
            <IndexDiv>시급</IndexDiv>
            <RTitleInput readOnly value={props.nowPost.wage} />
          </SectorWrapper>
          <IndexDiv>내용</IndexDiv>
          <RContentTextarea readOnly value={props.nowPost.content} />
          {/* 로그인 상태인 경우(내가 작성한 글인지 여부), 로그아웃 상태인 경우 3가지 경우 */}
          {props.isLogin === true ? (
            <>
              {(props.userinfo.user_id === String(props.nowPost.user_id)) ===
=======
            <RTitleInput readOnly value={props.currentPost.title} />
            <IndexDiv>지역</IndexDiv>
            <RTitleInput readOnly value={props.currentPost.work_place} />
            <IndexDiv>날짜</IndexDiv>
            <RTitleInput readOnly value={props.currentPost.work_date} />
            <IndexDiv>직종</IndexDiv>
            <RTitleInput readOnly value={props.currentPost.occupation} />
            <IndexDiv>시급</IndexDiv>
            <RTitleInput readOnly value={props.currentPost.wage} />
          </SectorWrapper>
          <IndexDiv>내용</IndexDiv>
          <RContentTextarea readOnly value={props.currentPost.content} />
          {/* 로그인 상태인 경우(내가 작성한 글인지 여부), 로그아웃 상태인 경우 3가지 경우 */}
          {props.isLogin === true ? (
            <>
              {(props.userInfo.nickname ===
                String(props.currentPost.nickname)) ===
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
              true ? (
                <ButtonDiv>
                  <FixButton onClick={fixPostButton}>수정</FixButton>
                  <DeleteButton onClick={deletePostButton}>삭제</DeleteButton>
                </ButtonDiv>
              ) : (
                <CompleteButton onClick={applyButton}>
                  지 원 하 기
                </CompleteButton>
              )}
            </>
          ) : (
            <RModal
              hadleLoginVerification={props.hadleLoginVerification}
              isLogin={props.isLogin}
            />
          )}
        </Body>
      </WrapperDiv>
    </>
  );
};

export default ReadPost;
