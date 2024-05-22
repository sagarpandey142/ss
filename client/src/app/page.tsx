// Import necessary components and hooks from Next.js
"use client"
import Navbar from './components/commonPage/Navbar';
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux'; // Import Provider


import ResetPassword from "./components/pages/ResetPassword/page";
import SignIn from './components/pages/SignIn';
import SignUp from "./components/pages/SignUp";
import RecoverAcc from "./components/pages/RecoverAcc/page";
import OtpPage from "./components/pages/OtpPage/page";
import CreateProfile from './components/pages/CreateProfile/page';
import DashboardPage from '@/app/components/pages/DashboardPage';
import Profile from './components/pages/ProfilePage/Profile';
import { usePathname } from 'next/navigation';
import HomePage from "../app/components/pages/HomePage"
import CreateProjectForm from "./components/pages/CreateProject/page"

const Home = () => {
  return (

      <div>
        <HomePage />
     
      </div>
   
  );
};

export default Home;
