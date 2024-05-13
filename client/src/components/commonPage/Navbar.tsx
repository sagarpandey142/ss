import Link from 'next/link';
import { BsBagDashFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className=" flex flex-col gap-4 text-gray-700 items-center">
     
        
            <ul className="flex flex-row text-sm gap-6 items-center justify-center h-10 bg-gray-200 w-full fixed top-0 left-0 right-0 z-10">
                <li className="">
                <Link href="/">
                    <span className="">Home</span>
                </Link>
                </li>
                <li className="">
                <Link href="/find-job">
                    <span className="">Find Job</span>
                </Link>
                </li>
                <li className="">
                <Link href="/employers">
                    <span className="">Employers</span>
                </Link>
                </li>
                <li className="">
                <Link href="/candidates">
                    <span className="">Candidates</span>
                </Link>
                </li>
                <li className="">
                <Link href="/customer-support">
                    <span className="">Customer Support</span>
                </Link>
                </li>
            </ul>
      

        <div className='flex gap-10 mt-14'>
            <div className='flex items-center gap-3'>
                <BsBagDashFill style={{color: '#7D0DC3' , fontSize: '24px'}}/>
                <p className='font-bold text-2xl'>Projectpilot</p>
            </div>
            <div className='flex items-center border border-gray-400 rounded-md gap-3 p-3'>
                <IoIosSearch style={{ fontSize: '24px' }} />
                <input placeholder='Search for Projects'/>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;