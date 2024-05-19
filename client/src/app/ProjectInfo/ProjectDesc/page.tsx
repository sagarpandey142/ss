"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {FetchProjectById} from "../../Services/ProjectHandler"
import Navbar from '@/app/commonPage/Navbar'
import { CiBookmark } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";


const page = () => {
  const serachparam=useSearchParams();
  const[projectData,setProjectData]=useState();
 
  const recieveProjectDetail=async()=>{
       const BackendResponse=await FetchProjectById(serachparam.get("projectid"));
        if(BackendResponse){
           setProjectData(BackendResponse.data.project)
        }
  }
  useEffect(()=>{
       recieveProjectDetail();
  },[])
  
 

  return (
     <div className='w-full'> 
              <Navbar/>
             <div className=' bg-gray-200 p-5'>
                         <div className=' flex w-8/12 mx-auto justify-between'>
                              <div className='font-bold text-lg'>Job Details</div>
                              <div className='font-semibold text-md text-slate-400 flex'>Home / Find Job / {projectData?.Category} / <div className=' text-black'>Job Details</div> </div>
                         </div>
               </div>
          <div className=' mt-20 w-8/12 mx-auto'>
                {/*top section*/}
               <div className=' flex justify-between'>
                      <div className=''>
                                {/*image*/}
                               <div>

                              </div>
                              <div className='flex flex-col gap-1'>
                                   <p className=' text-slate-900 font-bold text-2xl'>{projectData?.projectName}</p>
                                    <div className=' flex gap-2 items-center'>
                                        <p className=' text-slate-600 text-lg'> By {projectData?.profileId?.name}</p>
                                        <p className=' bg-green-600 text-white font-semibold px-3 py-2 rounded-md'>{projectData?.BasicDetail?.spanPeriod} Months</p>
                                        <p className=' bg-pink-200 text-pink-400 px-2 py-2 font-bold rounded-lg'>Featured</p>
                                    </div>
                              </div>
                      </div>
                      <div className=' flex gap-3 items-center'>
                         <div className='bg-blue-200 px-4 py-4 rounded-lg'>
                              <CiBookmark className='text-2xl  text-blue-700 font-bold'/>
                         </div>
                          <button className='bg-[#007AE9] py-3 px-6 text-white font-semibold rounded-lg flex items-center gap-2'>
                              <p>Apply Now</p>
                              <FaArrowRight/>
                          </button>
                      </div>
               </div>
               <div className=' mt-10 flex justify-between '>
                    {/*project desc*/}
                    <div className=' flex flex-col gap-3'>
                         <p className=' text-xl text-slate-900 font-bold'>Project Description</p>
                         <p className='text-slate-600 text-xl w-7/12'>{projectData?.projectDescription}</p>
                         <div className=' mt-4 flex flex-col gap-2'>
                              <p className=' text-xl text-slate-600 font-bold flex gap-2'>More About <div className=' text-slate-900' > {projectData?.profileId?.name}</div></p>
                              <p className='text-slate-600 text-xl w-7/12'>{projectData?.profileId?.User_Bio}</p>
                         </div>
                         <div className=' ml-3 mt-2 flex flex-col gap-2 border-[3px] border-slate-300 rounded-lg p-3 w-7/12'>
                               <p className=' text-xl text-slate-900 font-bold flex items-center gap-2'> <FaArrowRight/> His Technical Skills</p>
                               <div className=' flex gap-2 flex-wrap w-11/12'>
                                    {
                                        projectData?.profileId?.TechStack?.map((data,index)=>(
                                              <div key={index} className=' bg-slate-300 p-2 px-3 rounded-lg text-green-800 font-semibold '>
                                                     {data}
                                              </div>
                                        ))
                                    }
                               </div>
                         </div>
                    </div>
                    <div>
                         <div>
                                 {/*job location*/}
                                   <p>Job Location</p>
                                   <p>{projectData?.proileId?.Location}</p>
                         </div>
                         <div>
                                <p>remote job</p>
                                <p>WorldWide</p>
                         </div>
                    </div>
               </div>
               <div className=' mt-10 flex justify-between '>
                    <p className=' text-2xl text-slate-900 font-bold'>Related Jobs</p>
               </div>
         </div>
         <Navbar/>
     </div>
  )
}

export default page