import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadOutline } from "react-icons/io5";
import {IoMdAddCircle} from "react-icons/io"
import { PiLinkSimpleBold } from "react-icons/pi";
import { UpdateProfile } from "../../../../../Services/operations/ProfileHandler";
import toast from 'react-hot-toast';
import { GiCancel } from "react-icons/gi";



const Personalpage = ({ userData }) => {
  const [state, setState] = useState({
    name: userData?.name,
    role: userData?.Professional_Role,
    education: userData?.Education ? userData?.Education : "",
    experience: userData?.Experience ? userData?.Experience : "",
    personalWebsite: userData?.PersonalWebsite ? userData?.PersonalWebsite : "",
  });
  const[openResume,setOpenResume]=useState(false);

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the accepted files, such as uploading them
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpdateChanges = async () => {
    const data = {
      Education: state.education,
      Experience: state.experience,
      name: state.name,
      Professional_Role: state.role,
      PersonalWebsite: state.personalWebsite
    };
    const responsefrombackend = await UpdateProfile(data);
    if (responsefrombackend) {
      toast.success("Profile Updated Successfully");
    }
  };

  return (
    <div className=' mt-7 w-full'>
      <p className='text-slate-800 text-2xl font-semibold'>Basic Information</p>
      <div className='mt-5'>
        <div className='flex gap-10'>
          <div className='w-[80%]'>
            <p className='text-slate-500 text-lg'>Profile Picture</p>
            <div {...getRootProps()} className='cursor-pointer mt-1 border-dashed border-4 border-gray-300 py-20 px-4 rounded-xl bg-gray-100'>
              <input {...getInputProps()} />
              <div className='flex flex-col gap-1 mx-auto'>
                <IoCloudUploadOutline className='mx-auto text-5xl text-slate-500' />
                <p className='mx-auto'><span className='text-slate-900 text-lg font-bold mx-auto'>Browse photo</span> or drop here</p>
                <p className='text-slate-500 mx-auto'>A Photo larger than 400 pixels work best Max photo size 5 MB</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='fullname' className='text-lg text-late-800 font-semibold'>Full Name</label>
                <input value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} className='fullname outline-none text-slate-700 font-semibold text-lg px-8 py-4 border-[2px] border-slate-300' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='Title' className='text-lg text-late-800 font-semibold'>Title Heading</label>
                <input value={state.role} onChange={(e) => setState({ ...state, role: e.target.value })} className='Title outline-none text-slate-700 font-semibold text-lg px-8 py-4 border-[2px] border-slate-300' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='experience' className='text-lg text-late-800 font-semibold'>Experience</label>
                <select value={state.experience} onChange={(e) => setState({ ...state, experience: e.target.value })} className='outline-none px-16 py-6 border-[2px] border-slate-300 text-lg place-content-start'>
                  <option value="" className='text-slate-800 text-lg flex-start'>Select an option...</option>
                  <option value="less_than_1">Less than 1 year</option>
                  <option value="more_than_1">More than 1 year</option>
                  <option value="more_than_3">More than 3 years</option>
                </select>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='education' className='text-lg text-late-800 font-semibold'>Education</label>
                <select value={state.education} onChange={(e) => setState({ ...state, education: e.target.value })} className='outline-none px-16 py-6 border-[2px] border-slate-300 text-lg'>
                  <option value="">Select an option..</option>
                  <option value="school">School</option>
                  <option value="college">College</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[100%]'>
                <label htmlFor='website' className='text-lg text-late-800 font-semibold'>Personal Website</label>
                <input placeholder='Website...' value={state.personalWebsite} onChange={(e) => setState({ ...state, personalWebsite: e.target.value })} className='relative outline-none px-20 py-4 border-[2px] border-slate-300 text-xl' />
                <PiLinkSimpleBold className='absolute mt-14 ml-3 text-3xl text-blue-600' />
              </div>
            </div>
            <div onClick={handleUpdateChanges} className='mt-4 bg-blue-600 px-5 py-5 rounded-xl w-fit text-white font-semibold cursor-pointer'>
              Save Changes
            </div>
          </div>
        </div>
      </div>
        
         {/* Modal content (replace with your actual resume upload functionality) */}
         {openResume && (
        <div className="fixed inset-0 z-50  backdrop-blur-md  "> <div className="flex items-center justify-center  min-h-screen px-12   pt-4  ">
            <div className="  w-[40rem]  bg-white rounded-lg shadow-xl p-6">
             <div className=' flex justify-between'>
                  <p className="text-xl font-semibold mb-3">Add Cv/Resume</p>
                  <div  className=' bg-gray-300 text-blue-700 p-3 cursor-pointer text-2xl  rounded-full' onClick={()=>{
                     setOpenResume(false);
                  }}>
                   <GiCancel/>
                 </div>
             </div>
              {/* Replace with your resume upload form or component */}
              <div className=' mt-4'>
                  <div className='flex flex-col gap-2'>
                      <label htmlFor='' className='text-lg text-slate-800 font-semibold'>Cv/Resume Name</label>
                      <input  className=' outline-none text-slate-700 font-semibold text-lg px-8 py-3 border-[2px] border-slate-300' />
                  </div>
                  <div>
                       <p className=' text-slate-800 text-lg mt-4 font-semibold'>Upload Your Resume</p>
                       {/*drag & drop*/}
                       <div>
                       <div {...getRootProps()} className='cursor-pointer mt-1 border-dashed border-4 border-gray-300 py-14  px-22 rounded-xl bg-gray-100 '>
                        <input {...getInputProps()} />
                        <div className='flex flex-col gap-1 mx-auto'>
                          <IoCloudUploadOutline className='mx-auto text-5xl text-slate-500' />
                          <p className='mx-auto'><span className='text-slate-900 text-lg font-bold mx-auto'>Browse photo</span> or drop here</p>
                          <p className='text-slate-500 mx-auto'>Only pdf format available max file size 12 mb</p>
                        </div>
                      </div>
                       </div>
                  </div>
           
              </div>
              <div className=' mt-4 flex justify-between'>
                   <button className='p-5 bg-gray-200 text-blue-600 rounded-xl text-xl font-semibold'>Cancel</button>
                   <button className='p-5 bg-blue-700 text-white rounded-xl text-xl font-semibold'>Add Cv/Resume</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='mt-16 mb-24'>
        <p className='text-slate-800 text-2xl font-semibold'>Your CV/Resume</p>
        <div className='mt-8 flex justify-center border-dashed border-[4px] border-slate-400 w-fit p-5 items-center gap-4 cursor-pointer'
        onClick={()=>{
           setOpenResume(true)
        }}>
          <IoMdAddCircle className='text-4xl font-bold text-blue-700' />
          <div>
            <p className='text-xl text-black font-semibold'>Add Cv/Resume</p>
            <p className='text-slate-500'>Browse file or drop here only pdf</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personalpage;
