"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { BsBagDashFill } from "react-icons/bs";
import CountrySelect from './commonPage/CountrySelect'; 
import { useUser } from '@auth0/nextjs-auth0/client';
import { HandleAuth } from '@auth0/nextjs-auth0';


const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState(''); 
  const [jobTitle, setJobTitle] = useState('');
  const { user, error, isLoading} = useUser(); 

  const handleCountryChange = (event:any) => {
    setSelectedCountry(event.target.value);
  };

  const handleJobTitleChange = (event:any) => {
    setJobTitle(event.target.value);
  };

   const token  = localStorage.getItem('token');

   console.log("token", token);

  return (
    <div className="flex flex-col gap-4 text-gray-700 items-center     ">
      <ul className="flex flex-row text-sm gap-6 items-center justify-center h-12 bg-gray-200 w-full">
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/find-job">
            <span>Find Job</span>
          </Link>
        </li>
        <li>
          <Link href="/employers">
            <span>Employers</span>
          </Link>
        </li>
        <li>
          <Link href="/candidates">
            <span>Candidates</span>
          </Link>
        </li>
        <li>
          <Link href="/customer-support">
            <span>Customer Support</span>
          </Link>
        </li>
      </ul>

      <div className='w-11/12  flex mt-2   justify-between  '>
        <div className='flex items-center gap-3'>
          <BsBagDashFill style={{color: '007AE9' , fontSize: '28px'}}/>
          <p className='font-bold text-2xl text-slate-800'>Copartner</p>
        </div>
    
        <div className='flex items-center  '>
             <div className='border-[2px] border-slate-300'>
                 <CountrySelect />
             </div>

          <div >
            <input className=' border-[2px] border-slate-300 p-4 w-[35rem] outline-none rounded-lg' placeholder='Job Title, Keyword, Country' value={jobTitle} onChange={handleJobTitleChange} />
          </div>
        </div>
        <div>
          {
            user ? (
              <a href='/api/auth/logout'>Logout</a>
            ):(
              <a href='@/auth/login'>Login</a>
            )
          }
        </div>
        
        {/* {
          !token ? (
            <div className='flex gap-4'>
              <button className=' border-[3px] border-blue-400 px-3 py-1 rounded-xl text-[#007AE9] font-bold '>
                Sign In
              </button>
              <button className=' border-2 px-3 py-2 rounded-xl bg-[#007AE9] text-white '>
                Post A Job
              </button>
            </div>
          ):(
            <div className='flex'>
              <button className=' border-2 px-4 py-2 rounded-xl bg-[#007AE9] text-white '>
                Post A Job
              </button>
            </div>
          )
        } */}
      </div>
    </div>
  );
};

export default Navbar;

    