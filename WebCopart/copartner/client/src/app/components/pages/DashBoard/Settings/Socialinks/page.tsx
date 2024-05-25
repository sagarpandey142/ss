import { UpdateProfile } from '@/app/Services/operations/ProfileHandler';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import { ImCancelCircle } from "react-icons/im";



const page = ({userData}) => {

    const[state,setState]=useState({
        linkedinLink:userData?.LinkedIn ?? "",
        GithubLink:userData?.GithubLink ?? ""
    })

    const handlesavelink=async()=>{
         const token=localStorage.getItem('token');
         const data={
            LinkedIn:state.linkedinLink,
            GithubLink:state.GithubLink
         }
         const response=await UpdateProfile(data,token);
         if(response){
            toast.success("Profile Updates SuccessFully")
         }
    }

  return (
    <div className=' mt-9 flex flex-col gap-4'>
         {/*linkedin*/}
         <p className=' text-slate-800 text-lg font-semibold'>Social Links 1</p>
         <div className=' flex items-center'>
           <div className=' flex border-[2px] border-slate-300 w-[90%] '>
             <div className=' flex gap-2 items-center border-r-[2px] border-slate-300  py-4 px-11 text-blue-700 font-semibold'>
                 <FaLinkedinIn className=' text-2xl'/>
                 <div className=' text-xl'>Linkedin</div>
             </div>
               <input className=' w-[67%] py-4 text-slate-800 px-2 text-lg  outline-none' placeholder='proile Link/url...' value={state.linkedinLink}
                onChange={(e)=>{setState({...state,linkedinLink:e.target.value})}}/>
            </div>
               <div className=' ml-2 bg-slate-200  py-4 px-4 text-2xl '>
                   <ImCancelCircle className='  ' onClick={()=>{
                      setState({...state,linkedinLink:""});
                   }}/>
               </div>
         </div>

          {/*Github*/}
          <p className=' text-slate-800 text-lg font-semibold'>Social Links 2</p>
         <div className=' flex items-center'>
           <div className=' flex border-[2px] border-slate-300 w-[90%] '>
             <div className=' flex gap-2 items-center border-r-[2px] border-slate-300  py-4 px-11 text-slate-800 font-semibold'>
                 <FaGithub className=' text-2xl'/>
                 <div className=' text-xl'>Github</div>
             </div>
               <input className=' w-[67%] py-4 text-slate-800 px-2 text-lg  outline-none' placeholder='proile Link/url...' value={state.GithubLink}
                 onChange={(e)=>{setState({...state,GithubLink:e.target.value})}}/>
            </div>
               <div className=' ml-2 bg-slate-200  py-4 px-4 text-2xl '>
                   <ImCancelCircle className='  ' onClick={()=>{
                      setState({...state,GithubLink:""});
                   }}/>
               </div>
         </div>

         <div className=' bg-slate-200 w-full rounded-lg py-5   flex justify-center items-center'>
               <p className=' text-slate-800 font-semibold text-lg mx-auto'>All Right Reserved </p>
         </div>

         <div  className='mt-4 bg-blue-600 px-5 py-5 rounded-xl w-fit text-white font-semibold cursor-pointer' onClick={handlesavelink}>
              Save Changes
            </div>
    </div>
  )
}

export default page