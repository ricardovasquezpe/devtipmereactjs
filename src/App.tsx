import { Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './pages/welcome';
import BaseAuthPage from './pages/baseAuth';
import RegisterPage from './pages/baseAuth/register';
import { LoginPage } from './pages/baseAuth/login';
import MyHeader from './components/myHeader';
import "./global.scss";

function App() {
  return (
    <>
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

export default App;