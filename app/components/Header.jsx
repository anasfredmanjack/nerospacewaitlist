'use client'

import { Button,Link } from '@heroui/react'
import Image from 'next/image';

const Header = () => {
  return (
    <>
      {/* Full-screen background header */}
      <div className="bg-cover bg-center md:h-[660px] h-[1000px] lg:h-[700px]  w-full relative  inset-0" style={{ backgroundImage: "url('/header.jpg')" }}>
        {/* Content grid*/}
        <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:mt-[0%]  md:mt-[0%] mt-[0%] lg:ml-[5%]  text-white justify-center items-center">
          {/* grid 1*/}

          <div className='m-5 lg:mt-[-650px]  mt-[10%] md:mt-[-160%]'>

          <h1 className=" lg:text-6xl text-5xl font-bold">Decentralised <br></br>Freelancing<br></br> Revolution</h1>
          <p className='font-bold'>Revolutionizing the Future of Freelancing with Blockchain.</p>
          <div className='grid grid-cols-2 relative mt-3'>
            <div>
            <Button as={Link} color="primary" href="#waitlistformidd" className="text-white " variant="flat">
            Join Waitlist
          </Button>
            </div>
            <div className='relative left-[-10px] lg:left-[-80px] lg:top-[5px] '>
              <small className='font-bold'>Read the Whitepaper</small>
            </div>

          </div>
         
          </div>
          {/*grid 1 ends here*/}

        {/*grid 2 starts here*/}
        <div className='m-5 p-6 lg:relative lg:left-[-15%]'>
        <div className='lg:mt-[30px]'>
     
            {/*custom div 1 starts here*/}
            <div className='bg-[#A87DD6] relative bg-opacity-80 opacity-90 mt-[-20px] ml-[-30px] p-3 rounded-lg shadow-lg max-w-sm mx-auto '>
            <div className='grid grid-cols-2  gap-0'>
                {/*icon custom div starts here*/}
                <div className='h-[22px] w-[22px] bg-[#831291] p-4 rounded-full  ml-2 mt-4'>
                <svg className='h-[20px] w-[20px] ml-[-10px] mt-[-10px]' xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8c-1.1-1.3-2.1-2.5-3.2-3.7c-.4-.5-.8-.9-1.2-1.4l-4.1-4.7l-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1l-4.8-4.8l-.3-.3c-1.5-1.5-3-2.9-4.5-4.3c-.5-.5-1-1-1.6-1.5c-1-1-2-1.9-3-2.8c-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1c-1 .9-2 1.9-3 2.9c-.5.5-1 1-1.6 1.5c-1.5 1.4-3 2.9-4.5 4.3l-.3.3l-4.8 4.8l-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7c-.4.5-.8.9-1.2 1.4c-1.1 1.2-2.1 2.5-3.2 3.7c-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2c1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6c80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5c0-.1.1-.1.1-.2c1.4-1.5 2.8-3.1 4.1-4.7c.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7m4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444 444 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3M887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6c29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484M658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.7 394.7 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4c3.7 1.4 7.4 2.9 11 4.4m-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8c-17.4 32.4-37.8 58.3-59 75.1m59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4c21.2 16.7 41.6 42.6 59 75M540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445 445 0 0 0 540 640.9m0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4c-21.2-16.7-41.7-42.7-59.1-75.1c-11-20.6-20.7-43.3-29-67.8c37.2-14.6 75.9-23.3 115.8-26.1m0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8c17.4-32.4 37.8-58.4 59.1-75.1c9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4c-23.4 31.3-43.5 70.4-59.2 115.4c-21-12-40.9-26-59.4-41.8c31.8-29.2 67.9-52.4 107.6-69.2M165.5 365.7c13.8-32.6 32-62.8 54.2-90.2c24.9 21.5 52.2 40.3 81.5 55.9c-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3M137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444 444 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540m228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2c18.5-15.8 38.4-29.7 59.4-41.8c15.7 45 35.8 84.1 59.2 115.4c-3.7-1.4-7.4-2.9-11-4.4m292.6 0c-3.7 1.5-7.3 3-11 4.4c23.4-31.3 43.5-70.4 59.2-115.4c21 12 40.9 26 59.4 41.8a373.8 373.8 0 0 1-107.6 69.2"/></svg>
                </div>
                {/*icon custom div starts here*/}

                    {/*custom content grid 2 starts here*/}
              <div className='ml-[-70%]'>
                <h1>Global Reach</h1>
              <small>Revolutionizing the Future of Freelancing with Blockchain.</small>
              </div>
              {/*custom content grid 2 ends here*/}
              </div>
            </div> 
            {/*custom div 1 ends here*/}

               {/*custom div 2 starts here*/}
               <div className='bg-[#A87DD6] mt-5 relative bg-opacity-80 opacity-90  mr-[-30px] p-3 rounded-lg shadow-lg max-w-sm mx-auto '>
            <div className='grid grid-cols-2  gap-0'>
                {/*icon custom div starts here*/}
                <div className='h-[22px] w-[22px] bg-[#831291] p-4 rounded-full  ml-2 mt-4'>
                <svg className='h-[20px] w-[20px] ml-[-10px] mt-[-10px]' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M31.907 3.921A47.94 47.94 0 0 0 2.255 3.12A2.957 2.957 0 0 0 .094 6.787c.532 2.135 1.308 4.588 2.24 6.812c.016.052.041.027.041-.025c-.135-1.043.667-2.36 2.24-2.839a36.7 36.7 0 0 1 23.188.307a2.19 2.19 0 0 0 2.796-1.416c.932-3 1.308-5.037 1.401-5.547c.016-.095-.068-.131-.093-.157zm-23.043 6.6c-1.145.239-2.728.615-3.916 1.009c-2.375.819-2.265 3.709-1 4.631c.093-.536.667-1.265 1.307-1.511c2.371-.932 4.917-1.489 7.491-1.719c-1.308-.531-2.584-1.292-3.865-2.411zm18.907 5.786a28.2 28.2 0 0 0-21.932-.869c-1.131.427-1.839 1.803-1.131 3.109a51 51 0 0 0 4.199 6.401c-.224-.776.172-2.213 1.692-2.683c4.204-1.292 8.615-.744 11.547.443c.828.333 2 .131 2.657-.853a53 53 0 0 0 3.052-5.36c.041-.083 0-.145-.084-.188m-6.812 10.36a13.2 13.2 0 0 1-3.333-2.401c-.453-.453-1.12-1.104-1.823-1.88c-1.605 0-3.163.161-4.829.693c-1.547.484-1.692 2.271-1.015 3.203c1.145 1.427 1.948 2.197 3.229 3.521a3.655 3.655 0 0 0 5.093.025c1-1 1.615-1.667 2.745-2.948c.067-.068.041-.187-.068-.213z"/></svg>
              
                </div>
                {/*icon custom div starts here*/}

                    {/*custom content grid 2 starts here*/}
              <div className='ml-[-70%]'>
                <h1>Secure Payments</h1>
              <small >Transparent, tamper-proof transactions on the blockchain</small>
              </div>
              {/*custom content grid 2 ends here*/}
              </div>
            </div> 
            {/*custom div 2 ends here*/}

              {/*custom div 3 starts here*/}
              <div className='bg-[#A87DD6] relative bg-opacity-80 opacity-90  ml-[-37px] mt-5 p-3 rounded-lg shadow-lg max-w-sm mx-auto '>
            <div className='grid grid-cols-2  gap-0'>
                {/*icon custom div starts here*/}
                <div className='h-[22px] w-[22px] bg-[#831291] p-4 rounded-full  ml-2 mt-4'>

                <svg  className='h-[20px] w-[20px] ml-[-10px] mt-[-10px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8L9 9.75v3.5L12 15l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L12 9.155Zm-3.527.882l1.484.866v1.75l-1.484-.865Zm2.474 2.653v-1.767l1.546-.902v1.767ZM3 0L0 1.75v3.5L3 7l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L3 1.155ZM.99 2.921l1.484.866v1.75L.99 4.674Zm2.474 2.653V3.808l1.546-.902v1.767ZM3 17l-3 1.75v3.5L3 24l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L3 18.155Zm-3.527.882l1.484.866v1.75L.99 21.674Zm2.474 2.653v-1.767l1.546-.902v1.767ZM21 0l-3 1.75v3.5L21 7l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L21 1.155Zm-3.527.882l1.484.866v1.75l-1.484-.865Zm2.474 2.653V3.808l1.546-.902v1.767ZM21 17l-3 1.75v3.5L21 24l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885l1.53-.892Zm-3.527.882l1.484.866v1.75l-1.484-.865Zm2.474 2.653v-1.767l1.546-.902v1.767ZM9 3h6v1H9zm0 17h6v1H9zM3.5 9v6h-1V9zm3.793-.172L5.172 6.707L5.879 6L8 8.12zM16 8.293l2.121-2.121l.707.707L16.707 9zm-7.872 6.586L6.007 17l-.707-.707l2.121-2.121zm8.751-.75L19 16.25l-.707.707l-2.121-2.121zM21.5 9v6h-1V9z"/></svg>
                </div>
                {/*icon custom div starts here*/}

                    {/*custom content grid 2 starts here*/}
              <div className='ml-[-70%]'>
                <h1>Decentralized Freedom</h1>
              <small>Work without intermediaries or restrictive policies, Your talent, Your terms</small>
              </div>
              {/*custom content grid 2 ends here*/}
              </div>
            </div> 
            {/*custom div 3 ends here*/}

                {/*custom div 4 starts here*/}
                <div className='bg-[#A87DD6] z-10 relative bg-opacity-80 opacity-90  mr-[-30px]  mt-5 p-3 rounded-lg shadow-lg max-w-sm mx-auto '>
            <div className='grid grid-cols-2  gap-0'>
                {/*icon custom div starts here*/}
                <div className='h-[22px] w-[22px] bg-[#831291] p-4 rounded-full  ml-2 mt-4'>

                <svg className='h-[20px] w-[20px] ml-[-10px] mt-[-10px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 21v-9h2v7h9v2zm4-4V8h2v7h9v2zm4-4V3h12v10zm2-2h8V7h-8z"/></svg>
                </div>
                {/*icon custom div starts here*/}

                    {/*custom content grid 2 starts here*/}
              <div className='ml-[-70%] mb-3'>
                <h1>Low Fees</h1>
              <small>Say goodbye to high rates & commissions</small>
              </div>
              {/*custom content grid 2 ends here*/}
              </div>
            </div> 
            {/*custom div 4 ends here*/}
           {/*custom div 5 starts here*/}
<div className='relative z-10 bg-[#A87DD6] bg-opacity-80 opacity-90  mt-5 ml-[-35px] p-3 rounded-lg shadow-lg max-w-sm mx-auto'>
  <div className='grid grid-cols-2 gap-0'>
    {/*icon custom div starts here*/}
    <div className='h-[22px] w-[22px] bg-[#831291] p-4 rounded-full ml-2 mt-4'>
      <svg
        className='h-[20px] w-[20px] ml-[-10px] mt-[-10px]'
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <g fill="currentColor">
          <path d="m14.12 10.163l1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858l5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
          <path d="m14.12 6.576l1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858l5.317 2.659c.505.252 1.1.252 1.604 0z" />
        </g>
      </svg>
    </div>
    {/*icon custom div ends here*/}

    {/*custom content grid 2 starts here*/}
    <div className='ml-[-70%]'>
      <h1>Skill Verification</h1>
      <small>Verified profiles and portfolios, build trust and attract high-quality clients or freelancers.</small>
    </div>
    {/*custom content grid 2 ends here*/}
  </div>
</div>
{/*custom div 5 ends here*/}

{/*3d image safe starts here*/}
<div className='relative z-0'>
  <Image
    className='relative top-[-250px] lg:top-[-300px] lg:left-[280px] md:left-[100px] '
    src='/3dsafe.png'
    alt="3D Safe"
    layout="intrinsic"
    width={400}
    height={400}
    quality={100} // Ensure maximum quality
  />
</div>
{/*3d image safe ends here*/}

          
          
            </div>
        </div>
          {/*grid 2 ends here*/}
        </div>
            {/* Content grid ends here*/}


      </div>
    </>
  )
}

export default Header;
