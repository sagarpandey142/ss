"use client"
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import {FetchProjectById} from "../../Services/ProjectHandler"

const page = () => {
  const serachparam=useSearchParams();
  console.log("id",serachparam.get("projectid"))
  const recieveProjectDetail=async()=>{
       const BackendResponse=await FetchProjectById(serachparam.get("projectid"));
       console.log("backend",BackendResponse)
  }
  useEffect(()=>{
       recieveProjectDetail();
  },[])
  return (
     <div> 
      <div>Hiii</div>
     </div>
  )
}

export default page