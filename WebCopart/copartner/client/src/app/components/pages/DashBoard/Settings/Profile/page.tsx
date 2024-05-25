import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CountrySelect from '@/app/components/commonPage/CountrySelect';
import { UpdateProfile } from '@/app/Services/operations/ProfileHandler';
import toast from 'react-hot-toast';

const Page = ({ userData }) => {
  const [state, setState] = useState({
    gender: "",
    education: userData?.Education || "",
    experience: userData?.Experience || "",
    editorContent: userData?.User_Bio || ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleEditorChange = (value) => {
    setState({
      ...state,
      editorContent: value
    });
  };

  const handlesaveChanges=async()=>{
      const token=localStorage.getItem("token");
      const data={
        Education: state.education,
        Experience: state.experience,
        Gender: state.gender,
        User_Bio: state.editorContent
      }
      const response=await UpdateProfile(data,token);
      if(response){
           toast.success("Profile Updated SuccessFuly")
      }
  }

  return (
    <div className='mt-7 w-full flex flex-wrap gap-4'>
      <div className='flex flex-col gap-2 w-[47%]'>
        <label htmlFor='nationality' className='text-lg text-slate-800 font-semibold'>Nationality</label>
        <CountrySelect />
      </div>
      
      <div className='flex flex-col gap-2 w-[47%]'>
        <label htmlFor='gender' className='text-lg text-slate-800 font-semibold'>Gender</label>
        <select 
          name="gender" 
          value={state.gender} 
          onChange={handleInputChange} 
          className='outline-none px-2 py-4 border-[2px] border-slate-300 text-lg'
        >
          <option value="">Select an option...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      
      <div className='flex flex-col gap-2 w-[47%]'>
        <label htmlFor='education' className='text-lg text-slate-800 font-semibold'>Education</label>
        <select 
          name="education" 
          value={state.education} 
          onChange={handleInputChange} 
          className='outline-none px-2 py-4 border-[2px] border-slate-300 text-lg'
        >
          <option value="">Select an option...</option>
          <option value="school">School</option>
          <option value="college">College</option>
          <option value="professional">Professional</option>
        </select>
      </div>
      
      <div className='flex flex-col gap-2 w-[47%]'>
        <label htmlFor='experience' className='text-lg text-slate-800 font-semibold'>Experience</label>
        <select 
          name="experience" 
          value={state.experience} 
          onChange={handleInputChange} 
          className='outline-none px-2 py-4 border-[2px] border-slate-300 text-lg place-content-start'
        >
          <option value="">Select an option...</option>
          <option value="less_than_1">Less than 1 year</option>
          <option value="more_than_1">More than 1 year</option>
          <option value="more_than_3">More than 3 years</option>
        </select>
      </div>
      
      <div className='flex flex-col gap-2 w-[100%] h-fit p-3'>
        <label htmlFor='description' className='text-lg text-slate-800 font-semibold'>Biography</label>
        <ReactQuill 
          value={state.editorContent} 
          onChange={handleEditorChange} 
          theme="snow" 
          modules={modules} 
          formats={formats} 
          className='bg-white  rounded-lg h-60 mb-3'
          placeholder="Compose your text here..."
        />
      </div>
      
      <div className='mt-4 bg-blue-600 px-5 py-5 rounded-xl w-fit text-white font-semibold cursor-pointer' onClick={handlesaveChanges}>
        Save Changes
      </div>
    </div>
  );
};

const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'align': [] }],
    [{ 'color': [] }, { 'background': [] }],
    ['clean']
  ],
};

const formats = [
  'header', 'font',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'align',
  'color', 'background',
  'link', 'image', 'video'
];

export default Page;
