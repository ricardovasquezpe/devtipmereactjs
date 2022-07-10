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

export function App(props: any){
  const dispatch = useDispatch();
  useEffect(() => {
    verifyStorageAuth();
  });

  const verifyStorageAuth = async () => {
    if(verifyAuth()){
      dispatch(onLogin());
    } else {
      dispatch(onLogout());
    }
  }

  return (
    <>
      <SideNavBar direction={"left"} navWidth={280} duration={0.5} show={true}></SideNavBar>
      <div className="main-container">
        <MyHeader></MyHeader>
        <section className="wrap">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
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
