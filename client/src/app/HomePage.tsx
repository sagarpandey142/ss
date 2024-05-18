"use client"
import React from 'react';
import { useRouter,Link } from 'next/navigation'
import Image from 'next/image';
import front from "../app/Assets/front.jpg";



const HomePage = () => {
    const router = useRouter();

   

    return (
        <div className='w-[100%]'>
            <div className='flex justify-center mt-5'>
                <div className='flex flex-row justify-evenly items-center w-3/4'>
                    <div className='flex flex-col w-1/2 gap-10'>
                        <p className='text-2xl font-bold'>Find a Project that suits your interest & skills.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi sequi, ex atque error aut necessitatibus veniam modi, rem libero ipsam sit fugit? Voluptatum, possimus?</p>
                    </div>
                    <div className='w-1/2'>
                        {/* Assuming "front" is correctly imported */}
                        <Image src={front} alt="HomePic" width={500} height={500} />
                    </div>
                    <button onClick={()=>{
                        router.push("ProjectInfo/SearchProject")
                    }}>Find Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
