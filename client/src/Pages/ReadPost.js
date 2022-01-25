import axios from "axios";
import React from "react";
import { 
  BrowserRouter,
  Routes, 
  Route, 
  Link,
  useNavigate} from "react-router-dom";
import { 
  WrapperDiv,
  Head,
  Body,
  SectorWrapper,
  TitleDiv,
  RTitleInput,
  IndexDiv,
  RContentTextarea,
  CompleteButton
} from "../Components/CreatePostComponents";
import { 
  RModal,
  FixButton,
  IdDiv,
  DeleteButton,
  ButtonDiv,
  TitleWrapper
} from "../Components/ReadPostComponents";

let url = "http://localhost:4000/";

export const ReadPost = (props) => {
  //props.nowPost.user_id
  //props.userinfo.user_id

  const navigate = useNavigate();

  // useEffect(() => {
  //   axios({
  //     url: url + ""
  //   })
  // })






  //props활용 로그인 상태 및 토큰 보유 여부 확인

  let isLogin = true;

  let isMine = true;
   // 서버에서 가져온 작성자 id와 현재 앱사용자 userInfo와
   // 같다면 true
   // userInfo_user_id === props.nowPost.userId와 같다면 true 아니면 false
   
      // 1. Login 상태에서 다른 사람이 쓴 게시글 보기
      // 2. Login 상태에서 내가 쓴 게시글 보기
      // 3. Logout 상태에서 게시글 보기 - 완료
      // 4. 수정 버튼 누르면 게시글 작성 페이지 보여주고(수정완료 표시 patch)
      // 5. 삭제 버튼 누르면 삭제되고 홈페이지로 ?
  

  // 지원하기 버튼 누르면 지원자 정보 post요청
  const applyButton = () => {
    console.log("지원하기 버튼 클릭");
    
    // axios({
    //   url: url + "/applicant",
    //   method: "post",
    //   data: {
    //     user_id: props.userInfo.user_id,
    //     email: props.userInfo.email,
    //     mobile: props.mobile,
    //   },
    //   withCredentials: true,
    // })
    // .then(() => {
    //   alert("지원을 완료하셨습니다.");
    //   navigate("/");
    // })
    // .catch((err) => console.log(err))

  }
  

  const fixPostButton = () => {
    console.log("수정 버튼 클릭");
    navigate("/editpost")
    

  }
  
  const deletePostButton = () => {
    console.log("삭제 버튼 클릭");
    navigate("/")
    
    // const token = 정의해줘야함;
    // axios({
    //   url: url + "/notice-board",
    //   method: "delete",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `token ${token}`,
    //   },
    //   data: { title: props.curPost.title},
    //   withCredentials: true,
    // }).then((res) => {
    //      console.log("서버로 부터 삭제 응답이 옴");
    //      navigate.push("/")
    // })
  }
    


    return (
      <WrapperDiv>
        <Head>헤드 컴포넌트 자리(로고, 마이페이지 등)</Head>
        <Body>
          <TitleWrapper>
            <TitleDiv>게시글 보기</TitleDiv>
            <IdDiv float="right">작성자 ID: {props.nowPost.user_id}</IdDiv>
          </TitleWrapper>
          <SectorWrapper>
              <IndexDiv>제목</IndexDiv>
              <RTitleInput
                readOnly 
                value={props.nowPost.title}
              />   
              <IndexDiv>지역</IndexDiv>
              <RTitleInput
                readOnly 
                value={props.nowPost.work_place}
              />     
              <IndexDiv>날짜</IndexDiv>
              <RTitleInput
                readOnly 
                value={props.nowPost.work_date}
              /> 
              <IndexDiv>직종</IndexDiv>
              <RTitleInput
                readOnly 
                value={props.nowPost.occupation}
              />        
              <IndexDiv>시급</IndexDiv>
              <RTitleInput
                readOnly 
                value={props.nowPost.wage}
              />         
          </SectorWrapper>   
              <IndexDiv>내용</IndexDiv>
              <RContentTextarea 
                readOnly
                value={props.nowPost.content}
              />
{/* 로그인 상태인 경우(내가 작성한 글인지 여부), 로그아웃 상태인 경우 3가지 경우 */}
           {isLogin === true ? (
              <>
              {isMine === true ? (
                <ButtonDiv>
                  <FixButton
                    onClick={fixPostButton}
                  >수정</FixButton>
                  <DeleteButton
                    onClick={deletePostButton}
                  >삭제</DeleteButton>
                </ButtonDiv>
              )
              :     
                  <CompleteButton
                    onClick={applyButton}
                  >지 원 하 기</CompleteButton>
              }
              </> 
            ) 
            :
            <RModal />
            }
            
        </Body> 
      </WrapperDiv>
    );
  }
  
  export default ReadPost;