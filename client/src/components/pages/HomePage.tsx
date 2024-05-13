import front from '../../app/Assets/front.jpg';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div>
            <div className='flex justify-center mt-16'>
                <div className='flex flex-row justify-evenly items-center w-3/4'>
                    <div className='flex flex-col w-1/2 gap-10'>
                        <p className='text-2xl font-bold'>Find a Project that suits your interest & skills.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi sequi, ex atque error aut necessitatibus veniam modi, rem libero ipsam sit fugit? Voluptatum, possimus?</p>
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
