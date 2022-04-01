import { MainPosts } from "./MainPost";
import Header from "../Components/header";
import { useEffect } from "react";
import axios from "axios";

<<<<<<< HEAD
=======
let url = 'https://localhost:4000';

>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
function HomePage({
  hadleLoginVerification,
  isLogin,
  handleLogout,
  postClickNav,
  allPost,
  setAllPost,
<<<<<<< HEAD
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

=======
  setCurrentPost,
}) {
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
  return (
    <>
      <Header
        hadleLoginVerification={hadleLoginVerification}
        isLogin={isLogin}
        handleLogout={handleLogout}
      />
<<<<<<< HEAD
      <MainPosts allPost={allPost} setNowPost={setNowPost} />
=======
      <MainPosts allPost={allPost} setCurrentPost={setCurrentPost} />
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
    </>
  );
}

export default HomePage;
