import DashboardPage from '@/app/components/commonPage/DashboardPage'
import FavouriteCommon from '@/app/components/commonPage/FavouriteCommon'
import React from 'react'

const page = ({userData}) => {
  return (
    <div className=' p-20  w-[130%]   h-[100%]'>
        <p className=' text-slate-800 text-2xl font-semibold'>Favourite Project ( <span className=' text-slate-600'>{userData?.SavedJobs.length}</span>)</p>
        <div className=' mt-5'>
                {
                    userData?.SavedJobs?.map((data,index)=>{
                        return <FavouriteCommon key={index} Email={userData?.Email}  location={userData?.Location} cardData={data}/>
                    })
                }
        </div>
    </div>
  )
}

export default page