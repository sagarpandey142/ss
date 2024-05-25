"use client"
import React, { useState } from 'react';
import { TabsArray } from '@/app/ArrayUsable/TabsArray';
import Personalpage from "../Personal/Personalpage"
import ProfilePage from "../Profile/page"
import Socialpage from "../Socialinks/page"


const page = ({ userData }) => {
    const [clickable, setClickable] = useState(0);

    return (
        <div>
            <div className='p-20 w-[120%] h-[100%]'>
                <p className='text-slate-800 text-2xl font-semibold'>Settings</p>
                {/* Tabs */}
                <div className='mt-6 flex gap-10 border-b-[3px] border-slate-300 pb-3'>
                    {TabsArray.map((data, index) => (
                        <div
                            key={index}
                            onClick={() => setClickable(index)}
                            className={`flex gap-2 items-center text-xl cursor-pointer transition-all duration-300 ease-in-out ${clickable === index ? "text-blue-700 font-semibold " : "text-slate-500 border-transparent"}`}
                        >
                            <div>{React.createElement(data.icon, { className: "" })}</div>
                            <p>{data.name}</p>
                        </div>
                    ))}
                </div>
                {/*main info*/}
                <div>
                     {
                         clickable===0 ? (
                             <div>
                                  <Personalpage userData={userData}/>
                             </div>
                         ) : (
                             clickable==1 ? (
                                 <ProfilePage userData={userData}/>
                             ) : (
                                clickable==2 ? (
                                    <Socialpage userData={userData}/>
                                ) : (
                                     <div></div>
                                )
                             )
                         ) 
                     }
                </div>
            </div>
        </div>
    );
}

export default page;
