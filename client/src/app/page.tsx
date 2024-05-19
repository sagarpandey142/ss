"use client"
import Navbar from '../app/commonPage/Navbar'
import 'tailwindcss/tailwind.css';
import HomePage from "./HomePage"
import Page from "./PrivacyPolicy/page"
import Footer from './commonPage/Footer';

const Home = () => {
  return (
     <div>
               <Navbar/>
               <HomePage/>
               <Footer/>
     </div>
  );
};

export default Home;