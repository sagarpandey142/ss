import { DashboardArray } from '@/app/ArrayUsable/CandidateDashArray'
import React from 'react'
import DashboardPage from '../../../../components/commonPage/DashboardPage'

const page = ({userData}) => {
  return (
    <div className=' w-[130%] p-20 '>
         <p className=' text-slate-800 text-2xl font-semibold'>Applied Project ({userData?.AppliedProject.length})</p>
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
  )
}

export default page