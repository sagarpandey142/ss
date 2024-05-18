'use client'

import Navbar from '../components/commonPage/Navbar'
import 'tailwindcss/tailwind.css';
import HomePage from "../components/pages/HomePage"
import ResetPassword from "../components/pages/ResetPassword"
import SignIn from '../components/pages/SignIn'
import SignUp from "../components/pages/SignUp"
import RecoverAcc from "../components/pages/RecoverAcc"
import OtpPage from "../components/pages/OtpPage"
import CreateProfile from '@/components/pages/CreateProfile';
import DashboardPage from '@/components/pages/DashboardPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/otp" element={<OtpPage />} />
      </Routes>
    </Router>
  );
};

export default Home;