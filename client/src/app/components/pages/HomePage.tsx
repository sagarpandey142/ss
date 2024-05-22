import front from '../../Assets/front.jpg';
import Image from 'next/image';
import Navbar from '../commonPage/Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <div className='flex justify-center '>
                <div className='flex flex-row justify-evenly items-center w-3/4'>
                    <div className='flex flex-col w-1/2 gap-10'>
                        <p className='text-2xl font-bold'>Find a Project that suits your interest & skills.</p>
                        <p>Creating a successful project involves defining clear and specific goals, developing a comprehensive plan with timelines and milestones, and maintaining open, regular communication with stakeholders. Foster teamwork and leverage diverse skills within the team, prioritize quality through rigorous testing and control, and remain flexible to adapt to changes and challenges as they arise.</p>
                    </div>
                    <div className='w-1/2'>
                        <Image src={front} alt="HomePic" width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
