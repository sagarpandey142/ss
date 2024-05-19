"use client"
import Navbar from '../commonPage/Navbar'
import 'tailwindcss/tailwind.css';
import HomePage from "../../HomePage"
import Page from "../PrivacyPolicy/page"
import Footer from '../commonPage/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
     <div >
               <Navbar/>
               <HomePage/>
               <Footer/>
              <ToastContainer/>
     </div>
  );
};

export default Home;