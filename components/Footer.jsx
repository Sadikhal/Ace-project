'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { footerVariants } from '@/lib/Motion';

// Footer component
const Footer = () => {
  return (
    <div className='md:pt-18 lg:pt-20 pt-16  w-full sm:px-8 px-6    flex justify-center items-center'>
      <div className="flex flex-col md:flex-row md:justify-between items-center h-screen md:gap-10 gap-20 lg:w-[90%]">
        {/* First Footer Section */}
        <motion.footer
          variants={footerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-col w-full  md:w-[58%] justify-center items-start gap-10"
        >
          <div>
          <div className="font-newyork font-[496px] text-[80px] lg:text-[100px] sm:text-[80px] md:[90px]lg:leading-[150px] sm:leading-[120px] md:leading-[130px] leading-[130px]   ">
            Let’s Get In Touch
          </div>
          <div className='flex flex-col pt-4 '>
            <div className='lg:text-[40px] lg:leading-[49px]  md:text-[35px] md:leading-[38.4px] text-[30px] leading-[35.4px] font-newyork font-[400px] '>+91 7356140099</div>
            <div className='lg:text-[38px] lg:leading-[45px]  md:text-[35px] md:leading-[38.4px] text-[30px] leading-[35.4px] font-newyork font-normal'>info@aceassured.com</div>
            </div>
          </div>
          <div className='flex flex-col  '>
            <div className='text-[28px] leading-[43px] font-newyork font-semibold'>LOCATION</div>
            <div className='text-[24px] leading-[43px] font-newyork font-normal '>No 4, Amman Nagar, Phase 3, Villankurichi, Coimbatore, Tamil Nadu India- 641035</div>
          </div>
        </motion.footer>

        {/* Second Footer Section */}
        <motion.footer
          variants={footerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-12  w-full   md:w-[52%]  relative mt-12 md:mt-4 lg:mt-6"
        >
          <div className='flex flex-col gap-11 absolute -top-2 w-full'>
          <div>
            <div className='font-newyork text-[20px] leading-[25px] font-normal'>What’s your full name?</div>
            <hr className='border-t-1 border-solid border-primary '/>
          </div>
          <div>
            <div className='font-newyork text-[20px] leading-[25px] font-normal'>What’s your email address?</div>
            <hr className='border-t-1 border-solid border-primary '/>
          </div>
          <div>
            <div className='font-newyork text-[20px] leading-[25px] font-normal'>Your phone no</div>
            <hr className='border-t-1 border-solid border-primary '/>
          </div>
          <div>
            <div className='font-newyork text-[20px] leading-[25px] font-normal '>Tell us about your project</div>
            <hr className='border-t-1 border-solid border-primary '/>
          </div>
          <Button className="w-[150px] text-[16px] leading-[16px] font-semibold">Send Now</Button>
          </div>
          
        </motion.footer>
      </div>
    </div>
  );
};

export default Footer;
