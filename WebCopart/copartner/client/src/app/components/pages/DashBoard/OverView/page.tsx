"use client"
import { DecodedTokenHandler, GetUserDetail } from '@/app/Services/ProfileHanlder';
import DashboardPage from '@/app/components/commonPage/DashboardPage';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { BsSuitcaseLgFill } from 'react-icons/bs';
import { CiBookmarkMinus } from 'react-icons/ci';
import { FaArrowRight } from "react-icons/fa";


const page = ({userData}) => {
    
    const router=useRouter();

    const handleNavigate=()=>{
         router.push("/components/pages/setting")
    }

  return (

        <div className=' p-20  w-[130%]   h-[100%]'>
             <p className=' text-slate-800 text-2xl font-semibold'>Welcome, {userData?.name} 🎉</p>
             <p className=' mt-2 text-slate-600 text-lg'>Here is your daily activities and project alerts</p>
             <div className=' w-11/12 mt-8 flex justify-between  '>
                 {/*applied project*/}
                 <div className=' bg-orange-200 flex justify-between items-center p-4 gap-5 rounded-xl px-9'>
                      <div className=' flex flex-col p-3'>
                         <p className=' text-2xl text-slate-800 font-semibold'>{userData?.AppliedProject.length}</p>
                          <p className=' text-slate-600 text-lg font-semibold'>Applied Projects</p>
                      </div>
                      <div className=' bg-white p-5 rounded-lg'>
                          <BsSuitcaseLgFill className=' text-3xl text-orange-700'/>
                      </div>
                 </div>

                  {/*favourite project*/}
                  <div className=' bg-gray-300 flex  items-center p-4 gap-5 rounded-xl  px-9'>
                      <div className=' flex flex-col  '>
                         <p className=' text-2xl text-slate-800 font-semibold'>{userData?.SavedJobs.length}</p>
                          <p className=' text-slate-600 text-lg font-semibold'>favourite Projects</p>
                      </div>
                      <div className='  bg-white p-5 rounded-lg'>
                          <CiBookmarkMinus className=' text-3xl text-yellow-700'/>
                      </div>
                 </div>

                 {/*Project Alerts*/}
                 <div className=' bg-green-300 flex  items-center gap-6 p-1  rounded-xl px-9'>
                      <div className=' flex flex-col  '>
                         <p className=' text-2xl text-slate-800 font-semibold'>{userData?.Alerts.length}</p>
                          <p className=' text-slate-600 text-lg font-semibold'>Total Alerts</p>
                      </div>
                      <div className='  bg-white p-5 rounded-lg'>
                          <CiBookmarkMinus className=' text-3xl text-green-700'/>
                      </div>
                 </div>
             </div>
           
           {/*compiments*/}
             <div className='w-11/23 mt-4 bg-red-400 p-9 rounded-xl font-semibold flex justify-between items-center'>
                  
                  <div>
                       <div>
                       
                       </div> 
                        <p className=' text-white font-semibold'>Welcome to our community! We're excited to have you with us and look forward to seeing you thrive</p>
                        <p className=' text-white font-semibold'>Complete your profile to unlock more opportunities and connect with like-minded professionals</p>
                  </div>
                  <div className=' bg-white p-4 rounded-xl cursor-pointer' onClick={handleNavigate}>
                       <p className=' text-red-500 flex gap-2 items-center'>Edit Profile
                       <FaArrowRight/>
                       </p>
                  </div>
             </div>

             {/*cards*/}
             <div className=' mt-7'>
                 <div className=' flex justify-between'>
                      <p className=' text-xl text-slate-700 font-semibold'>Recently Applied</p>
                      <p className=' text-slate-400 text-lg gap-2 flex items-center'>View all
                       <FaArrowRight/>
                      </p>
                 </div>
                <div className=' flex flex-col gap-4'>
                        <div className=' mt-3 bg-gray-200 p-2 rounded-lg pl-2 pr-2'>
                            <div className=' flex  text-slate-800 text-lg justify-around'>
                                    <div>
                                        Project
                                    </div>
                                   
                                        <div>
                                            Date Applied
                                        </div>
                                        <div>
                                            Saved
                                        </div>
                                        <div>
                                            Action
                                        </div>
                                  
                            </div>
                            
                        </div>
                        <div>
                             {
                                userData?.AppliedProject?.map((data,index)=>{
                                    return <DashboardPage key={index} location={userData?.Location} cardData={data}/>
                                })
                             }
                        </div>
                </div>
             </div>
        </div>
   
  )
}

export default page