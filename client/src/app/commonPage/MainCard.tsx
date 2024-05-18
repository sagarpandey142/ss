import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import React, { useState } from 'react';
import cardpic from "../../app/Assets/CardPic.jpg";
import cardpic3 from "../../app/Assets/cardpic3.png";
import Image from 'next/image';
import { Tilt } from "react-tilt";
import { FaArrowRight } from "react-icons/fa";
import '@fontsource/poetsen-one'; 
import { Pagination } from '@mui/material';
import Link from 'next/link'; 

const MainCard = ({ CardData = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Show 3 cards per page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = CardData.slice(indexOfFirstCard, indexOfLastCard);
  const router = useRouter(); // Use useRouter from Next.js

  const getTimeDifference = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const difference = Math.abs(currentTime - createdTime);
    const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return `${daysDifference} days ago`;
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const createQueryString = (name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };

  const handlePageNavigation = (projectid) => {
    router.push('ProjectDesc'+"?"+createQueryString("projectid",projectid))
  }

  return (
    <div className='w-10/12 mx-auto mt-9'>
      <div className='w-12/12 mx-auto flex flex-wrap gap-2 justify-between'>
        {currentCards.map((data, index) => {
          const actualIndex = indexOfFirstCard + index;
          return (
            <Tilt key={actualIndex} className='bg-white w-[32rem] mx-auto p-2 flex flex-col' >
              <Image src={actualIndex % 2 === 0 ? cardpic : cardpic3} className='h-[17rem] rounded-t-lg'/>
              <div className='rounded-b-lg border-[3px] border-slate-300' onClick={()=>{
                  handlePageNavigation(data._id)
              }} >
                <div className='w-11/12 mt-4' >
                  <div className='flex justify-between items-center ml-7'>
                    <div className='uppercase text-slate-500 font-semibold text-lg'>{data?.profileId?.Professional_Role}</div>
                    <div className='uppercase text-slate-600 text-md pr-3'>{getTimeDifference(data?.createdAt)}</div>
                  </div>
                  <div className='mt-2 flex flex-col gap-3 ml-7'>
                    <div className='text-2xl text-slate-800 font-bold w-[80%]'>{data?.projectName}</div>
                    <div className='text-xl w-[11/12] font-poetsen-one'>{data?.projectDescription}</div> {/* Apply Poetsen One font */}
                  </div>
                  <div className='flex justify-between mt-3 text-lg font-semibold text-[#007AE9] mb-4 ml-7'>
                    <div>{data?.profileId?.name}</div>
                    <div className='flex items-center gap-1'>
                      <div className='pr-3'>Read More</div>
                      <FaArrowRight/>
                    </div>
                  </div>
                </div>
              </div> 
            </Tilt>
          );
        })}
      </div>
      <div className='mt-8 mx-auto w-3/12 pb-20'>
        <Pagination
          count={Math.ceil(CardData.length / cardsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          sx={{
            '& .MuiPaginationItem-root': { fontSize: '1.5rem', margin: 'auto' },
            '& .MuiPaginationItem-page': {
              backgroundColor: currentPage === Math.ceil(indexOfLastCard / cardsPerPage) ? '#007AE9' : 'transparent', // Set background color to blue for the clicked page
              color: currentPage === Math.ceil(indexOfLastCard / cardsPerPage) ? '#fff' : '', // Set text color to white for the clicked page
              height: '3.5rem', // Set fixed height for all page buttons
              width: '3.5rem', // Set fixed width for all page buttons
              marginRight: '8px', // Add margin to create gap between pagination buttons
            },
          }}
        />
      </div>
    </div>
  );
};

export default MainCard;
