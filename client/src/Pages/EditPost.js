<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState, useEffect } from 'react';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
<<<<<<< HEAD
} from "react-router-dom";
import axios from "axios";
=======
} from 'react-router-dom';
import axios from 'axios';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
import {
  SelectBoxLocation,
  SelectBoxJob,
  SelectBoxPay,
  Calenda,
  WrapperDiv,
  Body,
  SectorWrapper,
  TitleDiv,
  TitleInput,
  IndexDiv,
  ContentTextarea,
  CompleteButton,
<<<<<<< HEAD
} from "../Components/CreatePostComponents";
import Header from "../Components/header";

let url = "https://localhost:4000";
=======
} from '../Components/CreatePostComponents';
import Header from '../Components/Header';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4

export const EidtPost = (props) => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const [inputTitle, setInputTitle] = useState("");
  const [selectLocation, setSelectLocation] = useState("");
  const [pickerDate, setPickerDate] = useState("");
  const [selectJob, setSelectJob] = useState("");
  const [selectPay, setSelectPay] = useState("");
  const [textareaContent, setTextareaContent] = useState("");
=======
  const [inputTitle, setInputTitle] = useState('');
  const [selectLocation, setSelectLocation] = useState('');
  const [pickerDate, setPickerDate] = useState('');
  const [selectJob, setSelectJob] = useState('');
  const [selectPay, setSelectPay] = useState('');
  const [textareaContent, setTextareaContent] = useState('');
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4

  // 기존 게시물 내용이 수정 페이지에서 보일 수 있게
  // 셀렉트 박스랑 달력은 구현이 안됨!!(공부필요)
  useEffect(() => {
<<<<<<< HEAD
    setInputTitle(props.nowPost.title);
    setSelectLocation(props.nowPost.work_place);
    setPickerDate(props.nowPost.work_date);
    setSelectJob(props.nowPost.occupation);
    setSelectPay(props.nowPost.selectPay);
    setTextareaContent(props.nowPost.content);
=======
    setInputTitle(props.currentPost.title);
    setSelectLocation(props.currentPost.work_place);
    setPickerDate(props.currentPost.work_date);
    setSelectJob(props.currentPost.occupation);
    setSelectPay(props.currentPost.selectPay);
    setTextareaContent(props.currentPost.content);
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
  }, []);

  // 입력되는 제목, 지역, 날짜, 직종, 급여, 내용
  const handleInputValue = (e) => {
    setInputTitle(e.target.value);
  };

  const handleSelectValue = (e) => {
<<<<<<< HEAD
    if (e.target.name === "location") {
      setSelectLocation(e.target.value);
    } else if (e.target.name === "job") {
      setSelectJob(e.target.value);
    } else if (e.target.name === "pay") {
=======
    if (e.target.name === 'location') {
      setSelectLocation(e.target.value);
    } else if (e.target.name === 'job') {
      setSelectJob(e.target.value);
    } else if (e.target.name === 'pay') {
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
      setSelectPay(e.target.value);
    }
  };

  const handlePikerValue = (date) => {
    setPickerDate(date);
  };

  const handleTextareaValue = (e) => {
    setTextareaContent(e.target.value);
  };

  // 수정 완료 버튼
  // 수정한 게시물 정보 -> 서버로
  const postCompleteButton = () => {
<<<<<<< HEAD
    console.log("작성완료 버튼 클릭");

    if (inputTitle.length > 0 && textareaContent.length > 0) {
      axios({
        url: `${process.env.PinchHitterUrl}/notice_board`,
        method: "patch",
        data: {
          user_id: props.userinfo.user_id,
=======
    console.log('수정완료 버튼 클릭');

    if (inputTitle.length > 0 && textareaContent.length > 0) {
      axios({
        url: `${process.env.REACT_APP_SERVER_URI}/boards`,
        method: 'patch',
        data: {
          id: props.currentPost.id,
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
          title: inputTitle,
          occupation: selectJob,
          wage: selectPay,
          work_date: pickerDate,
          work_place: selectLocation,
          content: textareaContent,
        },
        withCredentials: true,
      })
        .then(() => {
<<<<<<< HEAD
          alert("수정을 완료하셨습니다.");
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      alert("제목과 내용을 모두 입력해주세요.");
=======
          alert('수정을 완료하셨습니다.');
          navigate('/');
        })
        .catch((err) => console.log(err));
    } else {
      alert('제목과 내용을 모두 입력해주세요.');
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
    }
  };

  return (
    <>
      <Header
        hadleLoginVerification={props.hadleLoginVerification}
        isLogin={props.isLogin}
      />
      <WrapperDiv>
        <Body>
          <TitleDiv>게시글 수정</TitleDiv>
          <SectorWrapper>
            <IndexDiv>제목</IndexDiv>
            <TitleInput
              value={inputTitle}
              type="text"
              name="title"
              onChange={handleInputValue}
            />
            <IndexDiv>지역</IndexDiv>
            <SelectBoxLocation
              key={selectLocation}
              name="location"
              onChange={handleSelectValue}
            />
            <IndexDiv>날짜</IndexDiv>
            <Calenda
              value={pickerDate}
              name="date"
              onChange={handlePikerValue}
            />
            <IndexDiv>직종</IndexDiv>
            <SelectBoxJob
              value={selectJob}
              name="job"
              onChange={handleSelectValue}
            />
            <IndexDiv>시급</IndexDiv>
            <SelectBoxPay
              value={selectPay}
              name="pay"
              onChange={handleSelectValue}
            />
          </SectorWrapper>
          <IndexDiv>내용</IndexDiv>
          <ContentTextarea
            value={textareaContent}
            type="text"
            name="content"
            onChange={handleTextareaValue}
          />
          <CompleteButton onClick={postCompleteButton}>
            수 정 완 료
          </CompleteButton>
        </Body>
      </WrapperDiv>
    </>
  );
};

export default EidtPost;
