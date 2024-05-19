'use client';
// Import necessary components and hooks from Next.js
import Navbar from '../components/commonPage/Navbar';
import 'tailwindcss/tailwind.css';
import HomePage from "../components/pages/HomePage";
import ResetPassword from "../components/pages/ResetPassword";
import SignIn from '../components/pages/SignIn';
import SignUp from "../components/pages/SignUp";
import RecoverAcc from "../components/pages/RecoverAcc";
import OtpPage from "../components/pages/OtpPage";
import CreateProfile from '@/components/pages/CreateProfile';
import DashboardPage from '@/components/pages/DashboardPage';
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
