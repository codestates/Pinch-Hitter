import React, { useState } from "react";
import { 
  BrowserRouter,
  Routes, 
  Route, 
  Link,
  useNavigate} from "react-router-dom"
  import axios from "axios";
import { 
  SelectBoxLocation, 
  SelectBoxJob, 
  SelectBoxPay, 
  Calenda,
  WrapperDiv,
  Head,
  Body,
  SectorWrapper,
  TitleDiv,
  TitleInput,
  IndexDiv,
  ContentTextarea,
  CompleteButton
} from "../Components/CreatePostComponents";

 // 이거뭐지 ?
// axios.defaults.withCredentials = true;

let url = "http://localhost:4000/";

export const EidtPost = (props) => {
  const navigate = useNavigate();
  
  const [ inputTitle, setInputTitle ] = useState("");
  const [ selectLocation, setSelectLocation ] = useState("");
  const [ pickerDate, setPickerDate ] = useState("");
  const [ selectJob, setSelectJob ] = useState("");
  const [ selectPay, setSelectPay ] = useState("");
  const [ textareaContent, setTextareaContent ] = useState("");



// 입력되는 제목, 지역, 날짜, 직종, 급여, 내용
  const handleInputValue = (e) => {
    setInputTitle(e.target.value)
  }

  const handleSelectValue = (e) => {
    if (e.target.name === "location") {
      setSelectLocation(e.target.value)
    } else if (e.target.name === "job") {
      setSelectJob(e.target.value)
    } else if (e.target.name === "pay") {
      setSelectPay(e.target.value)
    } 
  }
    
  const handlePikerValue = (e) => {
    setPickerDate(e.target.value)
  }

  const handleTextareaValue = (e) => {
    setTextareaContent(e.target.value)
  }

  // 작성 완료 버튼
  // 작성한 게시물 정보 -> 서버로
  const postCompleteButton = () => {
    console.log("작성완료 버튼 클릭");
    navigate("/");
  

    // if (inputTitle.length > 0 &&
    //     selectLocation.length > 0 &&
    //     pickerDate.length > 0 &&
    //     selectJob.length > 0 &&
    //     selectPay.length > 0 &&
    //     textareaContent.length > 0
    // ) {
    //     axios({
    //       url: url + "/notice-board",
    //       method: "post",
    //       data: {
    //         user_id: props.userinfo.user_id,
    //         title: inputTitle,
    //         occupation: selectJob,
    //         wage: selectPay,
    //         work_date: pickerDate,
    //         work_place:selectLocation,
    //         content: textareaContent,
    //       },
    //       withCredentials: true,
    //     })
    //       .then(() => {
    //         alert("작성을 완료하셨습니다.")
    //         navigate.push("/")
    //       })
    //       .catch((err) => console.log(err))
    //     } else {
    //         alert("제목과 내용을 모두 입력해주세요.")
    //     }

  }


  return (
    <WrapperDiv>
      <Head>헤드 컴포넌트 자리(로고, 마이페이지 등)</Head>
      
      <Body>
        <TitleDiv>게시글 수정</TitleDiv>
        <SectorWrapper>
            <IndexDiv>제목</IndexDiv>
            <TitleInput 
              text={props.nowPost.title}
              type="text"
              name="title"
              onChange={handleInputValue}
            />   
            <IndexDiv>지역</IndexDiv>
            <SelectBoxLocation
              text={props.nowPost.work_place} 
              name="location"
              onChange={handleSelectValue}/>                   
            <IndexDiv>날짜</IndexDiv>
            <Calenda
              text={props.nowPost.work_date} 
              name="date"
              onChange={handlePikerValue}
            />          
            <IndexDiv>직종</IndexDiv>
            <SelectBoxJob
              text={props.nowPost.occupation}
              name="job"
              onChange={handleSelectValue} 
            />           
            <IndexDiv>시급</IndexDiv>
            <SelectBoxPay
              text={props.nowPost.wage} 
              name="pay"
              onChange={handleSelectValue}
            />
        </SectorWrapper>      
            <IndexDiv>내용</IndexDiv>
            <ContentTextarea 
              text={props.nowPost.content}
              type="text"
              name="content"
              onChange={handleTextareaValue} 
            />
          <CompleteButton 
            onClick={postCompleteButton}
          >수 정 완 료</CompleteButton>
      </Body> 
    </WrapperDiv>
  );
}

export default EidtPost;