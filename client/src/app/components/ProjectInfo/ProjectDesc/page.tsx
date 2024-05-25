"use client"
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FetchProjectById, RemoveSavedProject, addSavedProject } from "../../../Services/ProjectHandler";
import Navbar from '@/app/api/auth/Navbar';
=======
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {FetchProjectById} from "../../../Services/operations/ProjectHandler"
import Navbar from '@/app/components/commonPage/Navbar'
>>>>>>> 6cbcb772a81c175db2e1d3bcb61fff8d47bc7a5c
import { CiBookmark } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import Footer from '../../commonPage/Footer';
import { AiFillExperiment } from "react-icons/ai";
import { IoMapSharp } from "react-icons/io5";
import { FaSuitcase, FaBookmark } from "react-icons/fa6";
import { DecodedTokenHandler, GetUserDetail } from '../../../Services/ProfileHanlder';
import { ToastContainer, toast } from 'react-hot-toast';

const Page = () => {
  const searchParams = useSearchParams();
  const [projectData, setProjectData] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      await getProjectDetails();
      await getUserDetails();
    };
    fetchData();
  }, []);

  const getUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const emailInfo = await DecodedTokenHandler(token);
        const userDetailResponse = await GetUserDetail(emailInfo.data.Email);
        setUserData(userDetailResponse.data.response);
        if (userDetailResponse.data.response) {
          const savedJobs = userDetailResponse.data.response.SavedJobs || [];
          const isProjectSaved = savedJobs.some((job) => job._id === projectData?._id);
          setIsSaved(isProjectSaved);
        }
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const getProjectDetails = async () => {
    const toastId=toast.loading("Loading",{
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });
    try {
      const projectId = searchParams.get("projectid");
      if (projectId) {
        const backendResponse = await FetchProjectById(projectId);
        setProjectData(backendResponse.data.project);
      }
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
    toast.dismiss(toastId)
  };

  const handleSavedProject = async (projectId) => {
    try {
      if (isSaved) {
        await RemoveSavedProject(userData?.Email, projectId);
        setIsSaved(false);
        toast.success("Project Removed SuccessFully",{
          duration: 5000, 
          style: {
            backgroundColor: "black",
            color: "white",
          },
        })
      } else {
        await addSavedProject(userData?.Email, projectId);
        setIsSaved(true);
        toast.success("Project Saved SuccessFully",{
          duration: 5000, 
          style: {
            backgroundColor: "black",
            color: "white",
          },
        })
      }
    } catch (error) {
      console.error('Error updating saved projects:', error);
    }
  };

  return (
    <div className='w-full'>
      <Navbar />
      <div className='bg-gray-200 p-5'>
        <div className='flex w-8/12 mx-auto justify-between'>
          <div className='font-bold text-lg'>Job Details</div>
          <div className='font-semibold text-md text-slate-400 flex'>
            Home / Find Job / {projectData?.Category} / <div className='text-black'>Job Details</div>
          </div>
        </div>
      </div>
      <div className='mt-20 w-8/12 mx-auto'>
        {/* Top section */}
        <div className='flex justify-between'>
          <div>
            {/* Image placeholder */}
            <div></div>
            <div className='flex flex-col gap-1'>
              <p className='text-slate-900 font-bold text-2xl'>{projectData?.projectName}</p>
              <div className='flex gap-2 items-center'>
                <p className='text-slate-600 text-lg'>By {projectData?.profileId?.name}</p>
                <p className='bg-green-600 text-white font-semibold px-3 py-2 rounded-md'>{projectData?.BasicDetail?.spanPeriod} Months</p>
                <p className='bg-pink-200 text-pink-400 px-2 py-2 font-bold rounded-lg'>Featured</p>
              </div>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='bg-blue-200 px-4 py-4 rounded-lg cursor-pointer' onClick={() => handleSavedProject(projectData._id)}>
              {isSaved ? <FaBookmark className='text-2xl text-blue-700 font-bold' /> : <CiBookmark className='text-2xl text-blue-700 font-bold' />}
            </div>
            <button className='bg-[#007AE9] py-3 px-6 text-white font-semibold rounded-lg flex items-center gap-2'>
              <p>Apply Now</p>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className='mt-10 flex gap-2'>
          {/* Project description */}
          <div className='w-[60%] flex flex-col gap-3'>
            <p className='text-xl text-slate-900 font-bold'>Project Description</p>
            <p className='text-slate-600 text-xl w-10/12'>{projectData?.projectDescription}</p>
            <div className='mt-4 flex flex-col gap-2'>
              <p className='text-xl text-slate-600 font-bold flex gap-2'>
                More About <div className='text-slate-900'>{projectData?.profileId?.name}</div>
              </p>
              <p className='text-slate-600 text-xl w-10/12'>{projectData?.profileId?.User_Bio}</p>
            </div>
            <div className='ml-3 mt-2 flex flex-col gap-2 border-[3px] border-slate-300 rounded-lg p-3 w-10/12'>
              <p className='text-xl text-slate-900 font-bold flex items-center gap-2'>
                <FaArrowRight /> His Technical Skills
              </p>
              <div className='flex gap-2 flex-wrap'>
                {projectData?.profileId?.TechStack?.map((data, index) => (
                  <div key={index} className='bg-slate-300 p-2 px-3 rounded-lg text-green-800 font-semibold'>
                    {data}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 w-[35%]'>
            <div className='border-[3px] border-slate-300 flex h-[10rem] p-2 rounded-lg'>
              <div className='flex flex-col justify-center items-center mx-auto p-3 w-[50%]'>
                <AiFillExperiment className='text-3xl text-[#007AE9]' />
                <p className='mx-auto text-lg text-slate-900 font-bold'>Level of Experience</p>
                <p className='text-lg text-green-700 font-semibold uppercase'>{projectData?.BasicDetail?.LevelExperience}</p>
              </div>
              <div className='flex flex-col justify-center items-center mx-auto p-3 w-[50%] border-l-[2px] border-slate-300'>
                <IoMapSharp className='text-3xl text-[#007AE9]' />
                <p className='mx-auto text-lg text-slate-900 font-bold'>Job Location</p>
                <p className='text-lg text-slate-500 uppercase'>{projectData?.profileId?.Location ? projectData?.profileId?.Location : "India"}</p>
              </div>
            </div>
            {/* Key skills required */}
            <div className='flex flex-col gap-2 border-[3px] border-slate-300 rounded-lg p-3'>
              <p className='text-xl text-slate-900 font-bold gap-2'>Key Technical Skills Needed</p>
              <div className='flex gap-2 flex-wrap'>
                {projectData?.Skill?.map((data, index) => (
                  <div key={index} className='bg-slate-300 p-2 px-3 rounded-lg text-green-800 font-semibold'>
                    {data}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10 flex justify-between'>
          <p className='text-2xl text-slate-900 font-bold'>Related Jobs</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
