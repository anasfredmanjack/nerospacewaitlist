'use client'
import { Button, Link, Card, CardBody } from '@heroui/react'
import Image from 'next/image';

const Section2 = () => {
  return (
    <div>
      {/* Full-screen background */}
      <div 
        className="bg-cover bg-center   relative h-full  w-full " 
        style={{ backgroundImage: "url('/section2bg.png')" }}
      >
        {/*two grids for why choose nerospace*/}
        <div className='grid grid-cols-1 lg:grid-cols-3'>
             {/*grid 1*/}
             <div className='p-20'>
                <small className='  text-white text-nowrap text-4xl lg:text-5xl'>We Feature <br></br> Various Reasons</small>
               
             </div>
              {/*grid 1 ends here*/}
              <div>

              </div>
                     {/*grid 3 starts here*/}
             <div className='p-20 lg:mt-0 mt-[-140px]'>
             <small className='lg:text-xl text-md font-semibold text-white'>Personalized based<br></br> on your risk tolerance</small>
                </div>
                 {/*grid 3 ends here*/}


        </div>
         {/*two grids for why choose nerospace ends here*/}


 {/*grid for nerospace cards*/}
 <div className='grid lg:grid-cols-3 justify-center items-center md:grid-cols-2  m-1 '>
          {/*grid 1*/}
          <div className='m-3 '>
            <Card className='border-[#542585] border-2 bg-background/60 dark:bg-default-100/50 h-[370px] w-[340px]'>
              <CardBody className='justify-end'>
              <Image
                src='/decentralisedpayment.png'
                alt="Logo"
                width={130}
                height={130}
                className="hover:scale-110 w-fit h-fit mb-6 transition-transform duration-300"
              />
                <small className='font-semibold mb-2'>Decentralized Payment</small>
                <small className='font-semibold mb-3 text-medium'>DeFi Infrastructure Powering Nerospace</small>
                 <small className='text-small'>At the core of our payment Infrastructure is decentralization, which serves as the backbone of our Freelancing Ecosystem, enabling secure, transparent, and instant transactions.</small>
              </CardBody>
            </Card>
          </div>
                {/*grid 1 ends here*/}
               {/*grid 1a*/}
          <div className='m-3 '>
            <Card className='border-[#542585] border-2 bg-background/60 dark:bg-default-100/50 h-[370px] w-[340px]'>
              <CardBody className='justify-end'>
              <div className="flex justify-center">
              <Image
                src='/decentralisedmarket.png'
                alt="Logo"
                width={180}
                height={180}
                className="hover:scale-110 w-fit h-fit mb-8 transition-transform duration-300"
              />
             </div>
                <small className='font-semibold mb-2'>Decentralized Marketplace</small>
                <small className='font-semibold mb-3 text-medium'>Your Talent, Your Rules</small>
                  <small className='text-small'>Nerospace empowers freelancers and businesses with a decentralized platform. Say goodbye to intermediaries and hello to autonomy, transparency, and fair oppurtunities.</small>
              </CardBody>
            </Card>
          </div>
          {/*grid 1a ends here*/}
    
             {/*grid 2*/}
             <div className='m-3'>
             <Card className='border-[#542585] border-2 bg-background/60 dark:bg-default-100/50 h-[370px] w-[340px]'>
              <CardBody className='justify-end'>
              <div className="flex justify-center">
              <Image
                src='/globalmarket.png'
                alt="Logo"
                width={130}
                height={130}
                className="hover:scale-110 w-fit h-fit mb-6 transition-transform duration-300"
              />
             </div>
                <small className='font-semibold mb-2'>Global Talent Pool</small>
                <small className='font-semibold mb-3 text-medium'>Access Expertise Worldwide</small>
                 <small className='text-small'>Find the perfect freelancer or client, no matter where you are. Nerospace connects a diverse community of skilled professionals across industries and borders.</small>
              </CardBody>
            </Card>
          </div>
          {/*grid 2 ends here*/}
              {/*grid 2a*/}
          <div className='m-3 '>
            <Card className='border-[#542585] border-2 bg-background/60 dark:bg-default-100/50 h-[370px] w-[340px]'>
              <CardBody className='justify-end'>
              <div className="flex justify-center">
              <Image
                src='/skillver.png'
                alt="Logo"
                width={130}
                height={130}
                className="hover:scale-110 w-fit h-fit mb-5 transition-transform duration-300"
              />
             </div>
              
                <small className='font-semibold mb-2'>Skill Verification</small>
                <small className='font-semibold mb-3 text-medium'>Build Trust with Verified Skills</small>
                <small className='text-small'>Showcase your Verified portfolio and earn credibility on Nerospace. Freelancers attract more oppurtunities, and bussinesses hire with confidence</small>
              </CardBody>
            </Card>
          </div>
          {/*grid 2a ends here*/}
             {/*grid 3*/}
             <div className='m-3'>
             <Card className='border-[#542585] border-2 bg-background/60 dark:bg-default-100/50 h-[370px] w-[340px]'>
              <CardBody className='justify-end'>
              <div className="flex justify-center">
              <Image
                src='/rewardincentives.png'
                alt="Logo"
                width={160}
                height={160}
                className="hover:scale-110 w-fit h-fit mb-5 transition-transform duration-300"
              />
             </div>
                <small className='font-semibold mb-2'>Reward Incentives</small>
                <small className='font-semibold mb-3 text-medium'>Perform Tasks & Earn Rewards</small>
                <small className='text-small'>Earn Rewards by performing tasks on Nerospace, From referrals, to feedback, and community Voting, your participation helps us makes Nerospace a better Space.</small>
              </CardBody>
            </Card>
            
          </div>
          {/*grid 3 ends here*/}
              {/*grid 3a*/}
          <div className='m-3 '>
            <Card className='border-[#542585] border-2 bg-background/60 dark:bg-default-100/50 h-[370px] w-[340px]'>
              <CardBody className='justify-end'>
                <small className='font-semibold mb-2'>Privacy & Security</small>
                <small className='font-semibold mb-3 text-medium'>Work with Confidence</small>
                <small className='text-small'>Protect your personal data and secure your transactions. Nerospace ensures your freelancing experience is safe and reliable.</small>
              </CardBody>
            </Card>
          </div>
          {/*grid 3a ends here*/}

        </div> 
        {/*grid for nerospace cards ends here*/}

         
      </div>
    </div>
  );
}

export default Section2;
