import { Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './pages/welcome';
import BaseAuthPage from './pages/baseAuth';
import RegisterPage from './pages/baseAuth/register';
import { LoginPage } from './pages/baseAuth/login';
import "./global.scss";
import SideNavBar from './components/sideNavBar';
import { MyHeader } from './components/myHeader';
import { useEffect } from 'react';
import { verifyAuth } from './services/sessionManagerService';
import { useDispatch } from 'react-redux';
import { onLogin, onLogout } from './store/auth/authAction';
import { HomePage } from './pages/home';
import { ProfilePage } from './pages/profile';
import { DetailSolutionPage } from './pages/detailSolution';
import { NewSolutionPage } from './pages/newSolution';

export function App(props: any){
  const dispatch = useDispatch();
  useEffect(() => {
    verifyStorageAuth();
  }, [dispatch]);

  const verifyStorageAuth = async () => {
    if(verifyAuth()){
      dispatch(onLogin());
    } else {
      dispatch(onLogout());
    }
  }

  return (
    <>
      <SideNavBar direction={"left"} navWidth={280} duration={0.5}></SideNavBar>
      <div className="main-container">
        <MyHeader></MyHeader>
        <section className="wrap">
          <Routes>
            <Route path="/search/:topic" element={<HomePage />} />
            <Route path="/search" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/detail-solution/:solutionId" element={<DetailSolutionPage />} />
            <Route path="/new-solution" element={<NewSolutionPage />} />
            <Route path="auth" element={<BaseAuthPage />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="*" element={<h1>No exist</h1>} />
          </Routes>
        </section>
      </div>
    </>
    
  );
}
