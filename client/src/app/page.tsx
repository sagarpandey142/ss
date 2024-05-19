// Import necessary components and hooks from Next.js
import Navbar from './components/commonPage/Navbar';
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux'; // Import Provider


import ResetPassword from "./components/pages/ResetPassword";
import SignIn from './components/pages/SignIn';
import SignUp from "./components/pages/SignUp";
import RecoverAcc from "./components/pages/RecoverAcc";
import OtpPage from "./components/pages/OtpPage/page";
import CreateProfile from '@/app/components/pages/CreateProfile';
import DashboardPage from '@/app/components/pages/DashboardPage';
import Profile from './components/pages/ProfilePage/Profile';
import { usePathname } from 'next/navigation';

const Home = () => {
  return (

      <div>
        <SignUp />
        <OtpPage/>
      </div>
   
  );
};

export default Home;
