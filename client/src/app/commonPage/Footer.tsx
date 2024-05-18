import React from 'react'
import {BsBagDashFill} from "react-icons/bs"
import { Candidate, Project, QuickLink, Support } from '../ArrayUsable/Footer'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=' mt-10 bg-black text-white h-fit p-3   '>
     <div className=' mt-18  w-8/12 mx-auto flex  justify-around'>
        {/*first section*/}
         <div className='mt-28 flex flex-col gap-2'>
            <div className='flex items-center gap-3'>
            <BsBagDashFill style={{color: 'fff' , fontSize: '28px'}}/>
            <p className='font-bold text-2xl text-white'>Copartner</p>
            </div>
            <p className='text-slate-400 '>Call Now: (319) 555-015</p>
             <p className='text-slate-400 max-w-[65%] '>6391 Shahberi Near noida extension,Noida</p>
             <p className='text-slate-400 '>India.</p>
         </div>
         {/*quick link*/}
         <div className='mt-28 flex flex-col gap-3'>
            <div className='font-bold text-2xl text-white'>Quick Lines</div>
             {
                QuickLink.map((data,index)=>(
                    <div key={index} className='text-slate-400 '>{data}</div>
                ))
             }
         </div>

          {/*Candidate*/}
          <div className='mt-28 flex flex-col gap-3'>
             <div className='font-bold text-2xl text-white'>Candidates</div>
             {
                Candidate.map((data,index)=>(
                    <div key={index} className='text-slate-400 '>{data}</div>
                ))
             }
         </div>

          {/*Project*/}
          <div className='mt-28 flex flex-col gap-3'>
             <div className='font-bold text-2xl text-white'>Projects</div>
             {
                Project.map((data,index)=>(
                    <div key={index} className='text-slate-400 '>{data}</div>
                ))
             }
         </div>

          {/*support*/}
          <div className='mt-28 flex flex-col gap-3'>
             <div className='font-bold text-2xl text-white'>Support</div>
             {
                Support.map((data,index)=>(
                    <div key={index} className='text-slate-400 '>{data}</div>
                ))
             }
         </div>
      </div>
      <div className='  mt-24 mx-auto border-t-[2px] border-slate-600 p-2'>
           <div className='w-8/12 mx-auto text-slate-500 flex justify-between items-center'>
                <p>@2024 CoPartner ~ Project Portal.All rights Reserved</p>
                <div className=' flex gap-3 text-2xl text-slate-500'>
                      <RiInstagramFill/>
                      <IoLogoYoutube/>
                      <FaFacebook/>
                      <FaTwitter/>
                </div>
           </div>
      </div>
    </div>
  )
}

export default Footer