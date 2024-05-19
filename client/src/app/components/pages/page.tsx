"use client"
import Navbar from '../commonPage/Navbar'
import 'tailwindcss/tailwind.css';
import HomePage from "../../HomePage"
import Page from "../PrivacyPolicy/page"
import Footer from '../commonPage/Footer';
import { Provider } from 'react-redux';
import store from '../../Redux/Store/ConfigureStore';

const Home = () => {
  return (
     <div >
               <Navbar/>
               <HomePage/>
               <Footer/>
     </div>
  );
};

export default Home;