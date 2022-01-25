import { MainPosts } from './MainPost';
import Header from '../Components/Header';

function HomePage({ hadleLoginVerification, isLogin }) {
  return (
    <>
      <Header
        hadleLoginVerification={hadleLoginVerification}
        isLogin={isLogin}
      />
      <MainPosts />
    </>
  );
}

export default HomePage;
