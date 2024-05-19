'use client';
// Import necessary components and hooks from Next.js
import Navbar from '../app/components/commonPage/Navbar';
import 'tailwindcss/tailwind.css';
import HomePage from "./HomePage";
import ResetPassword from "../app/components/pages/ResetPassword";
import SignIn from '../app/components/pages/SignIn';
import SignUp from "../app/components/pages/SignUp";
import RecoverAcc from "../app/components/pages/RecoverAcc";
import OtpPage from "../app/components/pages/OtpPage";
import CreateProfile from '@/app/components/pages/CreateProfile';
import DashboardPage from '@/app/components/pages/DashboardPage';
import { usePathname } from 'next/navigation';




const Home = () => {
  // Get the current pathname
  const pathname = usePathname();

  // Render different components based on the current path
  return (
    <div>
      {/* Your other components */}
      {pathname === '/' && <SignUp />}
      {pathname === '/otp' && <OtpPage />}
    </div>
  );
};

export default Home;
