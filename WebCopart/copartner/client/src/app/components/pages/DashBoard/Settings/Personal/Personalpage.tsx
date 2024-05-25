import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { PiLinkSimpleBold } from "react-icons/pi";
import { UpdateProfile, UpdateProfilePicture, UpdateResume } from "../../../../../Services/operations/ProfileHandler";
import toast from 'react-hot-toast';
import { IoDocumentTextSharp } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import Threedot from "./threedot"




const Personalpage = ({ userData }) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(userData?.ProfileImage ? userData?.ProfileImage : null);
  const initialState = {
    name: userData?.name,
    role: userData?.Professional_Role,
    education: userData?.Education ? userData?.Education : "",
    experience: userData?.Experience ? userData?.Experience : "",
    personalWebsite: userData?.PersonalWebsite!='null' ? userData?.PersonalWebsite : "",
  };
  const [state, setState] = useState(initialState);
  const [openResume, setOpenResume] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeFileName, setResumeFileName] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }, []);

  const onResumeDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setResumeFile(file);
    setResumeFileName(file?.name || "");
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5242880, // 5 MB
  });

  const { getRootProps: getResumeRootProps, getInputProps: getResumeInputProps } = useDropzone({
    onDrop: onResumeDrop,
    accept: '.pdf',
    maxSize: 12582912, // 12 MB
  });

  const updateProfilePicture = async (token) => {
    if (selectedFile) {
      const response= await UpdateProfilePicture(selectedFile, token);
      toast.success("image uploaded Successfully");
    }
  };

  const handleUpdateChanges = async () => {
  
    const token = localStorage.getItem("token");
    const data = {
      Education: state.education,
      Experience: state.experience,
      name: state.name,
      Professional_Role: state.role,
      PersonalWebsite: state.personalWebsite
    };

    
      const responsefrombackend = await UpdateProfile(data, token);
      if (responsefrombackend) {
        toast.success("Profile Updated Successfully");
      }
    

    if (selectedFile) {
      await updateProfilePicture(token);
    }

  };

  const handleResumeUpdateChange=async()=>{
      const token= localStorage.getItem("token");
      const response=await UpdateResume(resumeFile,token)
      if(response){
          toast.success("Resume Uploaded SuccessFully");
      }
  }

  return (
    <div className='mt-7 w-full'>
      <p className='text-slate-800 text-2xl font-semibold'>Basic Information</p>
      <div className='mt-5'>
        <div className='flex gap-10'>
          <div className='w-[80%]'>
            <p className='text-slate-500 text-lg'>Profile Picture</p>
            <div {...getRootProps()} className='cursor-pointer mt-1 border-dashed border-4 border-gray-300 py-20 px-4 rounded-xl bg-gray-100'>
              <input {...getInputProps()} />
              {previewUrl ? (
                <img src={previewUrl} alt="Selected" className='w-full h-28  object-fill' />
              ) : (
                <div className='flex flex-col gap-1 mx-auto'>
                  <IoCloudUploadOutline className='mx-auto text-5xl text-slate-500' />
                  <p className='mx-auto'><span className='text-slate-900 text-lg font-bold mx-auto'>Browse photo</span> or drop here</p>
                  <p className='text-slate-500 mx-auto'>A photo larger than 400 pixels works best. Max photo size 5 MB</p>
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-wrap gap-2'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='fullname' className='text-lg text-late-800 font-semibold'>Full Name</label>
                <input value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} className='fullname outline-none text-slate-700 font-semibold text-lg px-6 py-4 border-[2px] border-slate-300' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='Title' className='text-lg text-late-800 font-semibold'>Title Heading</label>
                <input value={state.role} onChange={(e) => setState({ ...state, role: e.target.value })} className='Title outline-none text-slate-700 font-semibold text-lg px-6 py-4 border-[2px] border-slate-300' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='experience' className='text-lg text-late-800 font-semibold'>Experience</label>
                <select value={state.experience} onChange={(e) => setState({ ...state, experience: e.target.value })} className='outline-none px-12 py-6 border-[2px] border-slate-300 text-lg place-content-start'>
                  <option value="" className='text-slate-800 text-lg flex-start'>Select an option...</option>
                  <option value="less_than_1">Less than 1 year</option>
                  <option value="more_than_1">More than 1 year</option>
                  <option value="more_than_3">More than 3 years</option>
                </select>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='education' className='text-lg text-late-800 font-semibold'>Education</label>
                <select value={state.education} onChange={(e) => setState({ ...state, education: e.target.value })} className='outline-none px-16 py-6 border-[2px] border-slate-300 text-lg'>
                  <option value="">Select an option...</option>
                  <option value="school">School</option>
                  <option value="college">College</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[100%]'>
                <label htmlFor='website' className='text-lg text-late-800 font-semibold'>Personal Website</label>
                <div className='relative'>
                  <input
                    placeholder='Website...'
                    value={state.personalWebsite}
                    onChange={(e) => setState({ ...state, personalWebsite: e.target.value })}
                    className='relative outline-none pl-12 pr-4 py-4 border-[2px] border-slate-300 text-xl w-full'
                  />
                  <PiLinkSimpleBold className='absolute left-3 top-1/2 transform -translate-y-1/2 text-3xl text-blue-600' />
                </div>
              </div>
            </div>
            <div onClick={handleUpdateChanges} className='mt-4 bg-blue-600 px-5 py-5 rounded-xl w-fit text-white font-semibold cursor-pointer'>
              Save Changes
            </div>
          </div>
        </div>
      </div>

      {openResume && (
        <div className="fixed inset-0 z-50 backdrop-blur-md">
          <div className="flex items-center justify-center min-h-screen px-12 pt-4">
            <div className="w-[40rem] bg-white rounded-lg shadow-xl p-6">
              <div className='flex justify-between'>
                <p className="text-xl font-semibold mb-3">Add Cv/Resume</p>
                <div className='bg-gray-300 text-blue-700 p-3 cursor-pointer text-2xl rounded-full' onClick={() => {
                  setOpenResume(false);
                }}>
                  <GiCancel />
                </div>
              </div>
              <div className='mt-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='' className='text-lg text-slate-800 font-semibold'>Cv/Resume Name</label>
                  <input className='outline-none text-slate-700 font-semibold text-lg px-8 py-4 border-[2px] border-slate-300' value={resumeFileName} readOnly />
                </div>
                <p className='text-lg text-slate-800 font-semibold mt-3' >Upload Resume</p>
                <div {...getResumeRootProps()} className='cursor-pointer mt-2 border-dashed border-4 border-gray-300 py-20 px-4 rounded-xl bg-gray-100'>
                  <input {...getResumeInputProps()} />
                  <div className='flex flex-col gap-1 mx-auto'>
                    <IoCloudUploadOutline className='mx-auto text-5xl text-slate-500' />
                    <p className='mx-auto'><span className='text-slate-900 text-lg font-bold mx-auto'>Browse resume</span> or drop here</p>
                    <p className='text-slate-500 mx-auto'>Max resume size 12 MB</p>
                  </div>
                </div>
                {resumeFileName && (
                  <p className='text-slate-600 text-center mt-2'>{resumeFileName}</p>
                )}
                <div onClick={() =>{
                    setOpenResume(false)
                    handleResumeUpdateChange();
                }} className='mt-4 bg-blue-600 px-5 py-5 rounded-xl w-fit text-white font-semibold cursor-pointer'>
                  Save Resume
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='mt-16 mb-24'>
        <p className='text-slate-800 text-2xl font-semibold'>Your CV/Resume</p>
        <div>
             {
               userData?.Resume ? (
                   <a  target="_blank" rel="noopener noreferrer" className=' mt-4 bg-gray-100 h-fit w-fit p-4 px-6 rounded-lg flex items-center  gap-8'>
                        <div className=' text-blue-700 text-5xl'> 
                               <IoDocumentTextSharp/>
                        </div>
                        <div className=''>
                             <p className=' text-slate-800 text-2xl font-semibold'>Click For Preview</p>
                             <p className=' text-slate-500 text-lg mx-auto'>2 Mb</p>
                        </div>
                        <div>
                               <Threedot setOpenResume={setOpenResume}/>
                        </div>
                
                   </a>
               ) : (
                    <div className='mt-8 flex justify-center border-dashed border-[4px] border-slate-400 w-fit p-5 items-center gap-4 cursor-pointer'
                    onClick={() => {
                      setOpenResume(true)
                    }}>
                    <IoMdAddCircle className='text-4xl font-bold text-blue-700' />
                    <div>
                      <p className='text-xl text-black font-semibold'>Add Cv/Resume</p>
                      <p className='text-slate-500'>Browse file or drop here only pdf</p>
                    </div>
                  </div>
               )
             }
        </div>
        
      </div>
    </div>
  );
}

export default Personalpage;
