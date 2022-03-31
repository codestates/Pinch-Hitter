import { MainPosts } from "./MainPost";
import Header from "../Components/header";
import { useEffect } from "react";
import axios from "axios";

function HomePage({
  hadleLoginVerification,
  isLogin,
  handleLogout,
  postClickNav,
  allPost,
  setAllPost,
  setNowPost,
}) {
  useEffect(() => {
    console.log("hompage 20번줄");
    axios
      .get(`${process.env.PinchHitterUrl}/notice_board`, {
        withCredentials: true,
      })
      .then(function (res) {
        setAllPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header
        hadleLoginVerification={hadleLoginVerification}
        isLogin={isLogin}
        handleLogout={handleLogout}
      />
      <MainPosts allPost={allPost} setNowPost={setNowPost} />
    </>
  );
}

export default HomePage;
