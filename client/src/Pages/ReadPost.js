import React from "react";
import { 
  WrapperDiv,
  Head,
  Body,
  SectorWrapper,
  TitleDiv,
  RTitleInput,
  IndexDiv,
  RContentTextarea,
  RCompleteButton
} from "../Components/CreatePostComponents";

export const CreatPost = () => {
  
    
  
    return (
      <WrapperDiv>
        <Head>헤드 컴포넌트 자리(로고, 마이페이지 등)</Head>
        <Body>
          <TitleDiv>게시글 보기</TitleDiv>
          <SectorWrapper>
              <IndexDiv>제목</IndexDiv>
              <RTitleInput
                readOnly 
                value="강남 CU편의점 대타해주실분 구해요!"
              />   
              <IndexDiv>지역</IndexDiv>
              <RTitleInput
                readOnly 
                value="강남"
              />     
              <IndexDiv>날짜</IndexDiv>
              <RTitleInput
                readOnly 
                value="2022-05-20"
              /> 
              <IndexDiv>직종</IndexDiv>
              <RTitleInput
                readOnly 
                value="편의점"
              />        
              <IndexDiv>시급</IndexDiv>
              <RTitleInput
                readOnly 
                value="10,000원 이상"
              />         
          </SectorWrapper>   
              <IndexDiv>내용</IndexDiv>
              <RContentTextarea 
                readOnly
                value="안녕하세요! 강남 교보타워 건물 뒤쪽에 있는 큰 편의점입니다. 시간은 10:00 ~ 18:00 이구요.
                8시간 정도 대타해주실 수 있는분 구하고 있습니다.
                일은 어렵지 않고 편의점에서 일해 본 분이 신청해주셨으면 좋겠어요!!"
              />
            <RCompleteButton>신 청 하 기</RCompleteButton>
           
        </Body> 
      </WrapperDiv>
    );
  }
  
  export default CreatPost;