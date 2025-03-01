'use client'
import { Button, Link } from '@heroui/react'
import Image from 'next/image';
import Waitlistform from './Waitlistform'

const Section1 = () => {
  return (
    <div>
      {/* Full-screen background */}
      <div 
        className="bg-cover bg-center  relative h-full mt-0 w-full " 
        style={{ backgroundImage: "url('/section1bg.jpg')" }}
      >
        {/*two grids for why choose nerospace*/}
        <div className='grid grid-cols-1 lg:grid-cols-2'>
             {/*grid 1*/}
             <div className='p-20'>
                <small className=' font-semibold text-black'>Why Choose Nerospace</small>
                <br></br>
                <small className='lg:text-6xl text-xl font-bold text-black'>Empowering Freelancers and businesses</small>

             </div>
              {/*grid 1 ends here*/}
                     {/*grid 2 starts here*/}
             <div className='p-20 lg:mt-0 mt-[-140px]'>
             <small className='lg:text-2xl text-md font-thin text-black'>By integrating blockchain technology, we ensure transparency, security, and equitable outcomes for all users, At the heart of our ecosystem is decentralization which drives success at every ecosystem.</small>
                </div>
                 {/*grid 2 ends here*/}


        </div>
         {/*two grids for why choose nerospace ends here*/}

          {/*center text */}
          <div className='flex relative justify-center items-center'>
            <h1 className='font-semibold text-black lg:text-6xl text-xl'>The Future of Web3 Freelancing </h1>
          
          </div>
         
          <Waitlistform/>
        
           {/*center text ends here*/}
      </div>
    </div>
  );
}

export default Section1;
