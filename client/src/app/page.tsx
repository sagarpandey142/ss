// Import necessary components and hooks from Next.js
"use client"
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux'; // Import Provider
import ResetPassword from "./components/pages/ResetPassword/page";
import SignIn from './components/pages/SignIn';
import SignUp from "./components/pages/SignUp";
import RecoverAcc from "./components/pages/RecoverAcc/page";
import OtpPage from "./components/pages/OtpPage/page";
import CreateProfile from '@/app/components/pages/CreateProfile/page';
import DashboardPage from '@/app/components/pages/DashboardPage';
import Profile from './components/pages/ProfilePage/Profile';
import { usePathname } from 'next/navigation';
import HomePage from './components/pages/HomePage';
import {NavBarButtons} from "../../src/components/navigation/desktop/nav-bar-buttons"
import Homes from "../api/hello"
const Home = () => {
  return (

      <div>
        <Homes />
     
      </div>
   
  );
};

export default Home;