
 "use client"

import { MdCancel } from "react-icons/md";
import React,{useEffect, useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5"
import { MdMyLocation } from "react-icons/md";
import { LuFilter } from "react-icons/lu";
import PopularSearches from '../../../ArrayUsable/PopularSearches';
import FetchProject from "../../../Services/ProjectHandler"
import MainCard from '../../commonPage/MainCard';
import {IndustryArray,ProjectLength} from "../../../ArrayUsable/IndustrySrray"
import { Checkbox, FormControlLabel } from "@mui/material";
import  {SkillRequired} from "../../../ArrayUsable/SkillArray"
import SkillButton from "../../commonPage/SkillButton";
import Switch from '@mui/material/Switch';
import Autosuggest from 'react-autosuggest';

const page = () => {
    const[ProjectPublished,setProjectPublished]=useState([]);
    const[filterOpen,setFilterOpen]=useState(false);
    const[FilterBasesOnTitle,setFilterBasesOnTitle]=useState("");
    const[FilterBasesOnLocation,setFilterBasesOnLocation]=useState("")
    const locations = ["Delhi, India", "Odisha, India", "Mumbai, India", "Bangalore, India", "Chennai, India"];
    const [locationSuggestions, setLocationSuggestions] = useState([]);
    const [filterdata,setFilterData]=useState({
      Industry:"",
      ProjectLength:"",
      ifRecentSelected:false,
      techStack:[],
    });



    const getAllprojectPublishes=async()=>{
         const responseromBackend=await FetchProject();
         setProjectPublished(responseromBackend?.data.projects);
    }

    const onSuggestionsFetchRequested = ({ value }) => {
      setLocationSuggestions(getSuggestions(value));
  };

  const getSuggestions = (value) => {
   const inputValue = value.trim().toLowerCase();
   const inputLength = inputValue.length;
   return inputLength === 0 ? [] : locations.filter(loc =>
       loc.toLowerCase().slice(0, inputLength) === inputValue
      );
   };

  const onSuggestionsClearRequested = () => {
      setLocationSuggestions([]);
  };
    
    const onLocationChange = (event, { newValue }) => {
      setFilterBasesOnLocation(newValue);
  };
  
  const renderSuggestion = (suggestion) => (
   <div >
       {suggestion}
   </div>
);


    function setProjectPublishedBasedOnFilter(){
         if(FilterBasesOnTitle===""){
             return;
         } else{
            let filtered = ProjectPublished?.filter((project) => {
               const projectName = project?.projectName?.toLowerCase();
               const projectDesc = project?.projectDescription?.toLowerCase();
               const keyword = FilterBasesOnTitle?.toLowerCase();
               return projectName.includes(keyword) || projectDesc.includes(keyword);
             });
             
             const locationKeyword=FilterBasesOnLocation.toLowerCase();
             const BasesOnLocation=ProjectPublished?.filter((project)=>{
                   locationKeyword ? project?.profileId?.Location.toLowerCase().includes(locationKeyword) : true;
             })

             
             if(filtered.length<=0) return;
             setProjectPublished([...filtered,...BasesOnLocation,...ProjectPublished]);
         }
    }
   
    function filterBasesonFilterData(){
      let filtered = [...ProjectPublished];
      let filteredByIndustry = [];
      let filteredByProjectLength = [];
      let filteredByTechStack = [];
      let filteredByRecent = [];
  
      if (filterdata.Industry) {
          filteredByIndustry = filtered.filter((project) => project?.Category === filterdata.Industry);
      }
  
      if (filterdata.ProjectLength) {
          filteredByProjectLength = filtered.filter((project) => project?.BasicDetail.projectLength === filterdata.ProjectLength);
      }
  
      if (filterdata.techStack.length > 0) {
          filteredByTechStack = filtered.filter((project) =>
              filterdata.techStack.every((tech) => project?.Skill.includes(tech))
          );
      }

      if (filterdata.ifRecentSelected) {
          filteredByRecent = filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
     setFilterOpen(false);
     setProjectPublished([...ProjectPublished,...filteredByIndustry,...filteredByProjectLength,...filteredByTechStack,...filteredByRecent]);
  }
  
    useEffect(()=>{
       getAllprojectPublishes();
    },[])



   
  return (
     <div className='w-full '>
           <div className=' bg-gray-200 p-5'>
                      <div className=' flex w-8/12 mx-auto justify-between'>
                         <div className='font-bold text-lg'>Find Projects</div>
                         <div className='font-bold text-lg'>Home/Find Project</div>
                      </div>
           </div>

            <div className='w-8/12 mx-auto mt-7' >
                  <div className='flex gap-3 border-[2px] border-slate-300 p-2 rounded-xl'> 
                        <div className=' flex items-center gap-3 text-xl border-r-[3px] border-slate-300  w-[40%] '>
                           <CiSearch className=' text-4xl text-[#007AE9]' />
                           <input placeholder='Search by : job title,position,KeyWords...' onChange={(e)=>{
                                setFilterBasesOnTitle(e.target.value)
                           }}  className='outline-none text-slate-800 text-2xl'/>
                        </div>
                        <div className=' flex items-center gap-3 text-xl w-[40%] '>
                           <IoLocationSharp className=' text-3xl text-[#007AE9]'/>
                        <Autosuggest
                            suggestions={locationSuggestions}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                            getSuggestionValue={(suggestion) => suggestion}
                            renderSuggestion={renderSuggestion}
                            inputProps={{
                                placeholder: 'City, state or zip code',
                                value: FilterBasesOnLocation,
                                onChange: onLocationChange,
                                className: 'outline-none w-full'
                            }}
                        />
                           <MdMyLocation className=' text-3xl text-[#007AE9] ml-28' />
                        </div>
                     
                        <button onClick={() => setFilterOpen(!filterOpen)} className=' border-[3px] border-slate-300 p-3 px-8 py-3 rounded-xl bg-gray-300 font-bold flex gap-2 items-center '>
                           <LuFilter/>
                           <div>Filters</div>
                        </button>
                        <button className=' border-2 p-3 px-10 py-3 rounded-xl bg-[#007AE9] text-white font-bold ' onClick={setProjectPublishedBasedOnFilter}>
                           Search 
                        </button>
                  </div>

                  <div className=' mt-4 flex gap-3'>
                     <div className='text-slate-400 text-xl'>Popular Searches:</div>
                     {
                           PopularSearches.map((data,index)=>(
                                 <div key={index} className='font-semibold cursor-pointer'>
                                    <div  className=' text-lg text-slate-500'>{data}</div>
                                 </div>
                           ))
                     }
                  </div>
                 
                  
            </div>

             {/* Filter Overlay */}
             {filterOpen==true && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md z-50 ">
                    <div className="absolute w-[24rem] h-full transform  bg-white  rounded-xl overflow-scroll">
                         <div className="flex justify-between p-6">
                              <div className=" text-xl font-semibold text-slate-800">Filters</div>
                              <MdCancel className=" text-2xl font-semibold text-slate-800 cursor-pointer" onClick={()=>{
                                   setFilterOpen(false);
                              }}/>
                         </div>
                         {/*active filters*/}
                         <div className=" border-b-2 border-slate-300  ">

                         </div>
                          
                          {/*indutry*/}
                         <div className=" mt-4 p-6  border-b-2 border-slate-300">
                              <div className="text-lg text-[#007AE9] font-semibold">Industry</div>
                              <div className=" ">
                                   {
                                     IndustryArray.map((data:String,index:number)=>(
                                          <div className={`mt-2  cursor-pointer `} key={index} onClick={()=>{
                                             setFilterData({...filterdata,Industry:data})
                                          }}>
                                                 <div className={`text-lg  font-semibold ${filterdata.Industry==data ? "bg-blue-200  p-2 rounded-lg text-[#007AE9]" : ""}`}>{data}</div>
                                          </div>
                                     ))
                                   }
                              </div>
                         </div>

                         {/*Project type*/}
                        <div className=" mt-4 p-6  border-b-2 border-slate-300">
                             <div  className="text-lg text-[#007AE9] font-semibold">Project Type</div>
                             <div>
                                  { 
                                       ProjectLength.map((data:String,index:number)=>(
                                          <div className="mt-1  flex  items-center cursor-pointer" key={index} onClick={()=>{
                                             setFilterData({...filterdata,ProjectLength:data})
                                          }}>
                                                <Checkbox/>
                                                 <div className="text-lg text-slate-800 font-semibold">{data}</div>
                                          </div>
                                     ))
                                  }
                             </div>
                        </div>

                        {/*tech stack*/}
                        <div className="  p-6  border-b-2 border-slate-300">
                                 <div  className="text-lg text-[#007AE9] font-semibold">Select Tech Stack</div>
                                 <div className=" flex flex-wrap gap-1">
                                       {
                                           SkillRequired?.map((data:String,index:number)=>(
                                             <div className="mt-2    items-center cursor-pointer" key={index} onClick={()=>{
                                                setFilterData({...filterdata,techStack: [...filterdata.techStack, data.name]})
                                             }}>
                                                    <SkillButton key={index} text={data.name} flag={true} />
                                             </div>
                                        ))
                                       }
                                 </div>
                        </div>

                        {/*button*/}
                        <div className=" mt-2 p-3 flex justify-between">
                              <button className=" flex  items-center">
                              <FormControlLabel
                                    control={
                                       <Switch
               
                                       color="primary"
                                       value="dynamic-class-name"
                                       />
                                    }
                                    label="Recent Project"
                                    />
                             
                              </button>
                                <button className=" bg-[#007AE9]  rounded-xl p-2 py-4 px-4 text-white font-semibold" onClick={()=>{
                                      filterBasesonFilterData()
                                }}>Apply Filters</button>
                        </div>
                    </div>
                </div>
            )}

             {/*main cards*/}
             <MainCard CardData={ProjectPublished}/>
            
     </div> 
  )
}

export default page