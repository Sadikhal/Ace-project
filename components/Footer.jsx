'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { footerVariants } from '@/lib/Motion';

// Footer component
const Footer = () => {
  return (
    <div className='md:pt-20 pt-16 mt-5 m-auto w-full md:w-3/4 flex justify-center items-center'>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 md:gap-7 lg:0">
        {/* First Footer Section */}
        <motion.footer
          variants={footerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-col w-1/2"
        >
          <div className="font-serif font-medium text-[65px] lg:text-[70px] sm:text-[50px] md:[60px]">
            Let’s Get in Touch
          </div>
          <div>
            <div className='lg:text-[25px] md:[23px] text-[20px]'>+91 7356140099</div>
            <div className='lg:text-[23px]md:[21px] text-[20px]'>info@aceassured.com</div>
          </div>
          <div>
            <div className='md:text-[27px] font-medium text-[20px] pt-5'>location</div>
            <div className='md:text-[15px] sm:text-[12px]'>No 4, Amman Nagar, Phase 3, Villankurichi, Coimbatore, Tamil Nadu India- 641035</div>
          </div>
        </motion.footer>

        {/* Second Footer Section */}
        <motion.footer
          variants={footerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-7 pt-20"
        >
          <div>
            <div className='underline underline-offset-8 left-0'>What’s your full name?</div>
          </div>
          <div>
            <div className='underline underline-offset-8'>What’s your email address?</div>
          </div>
          <div>
            <div className='underline underline-offset-8'>Your phone no</div>
          </div>
          <div>
            <div className='underline underline-offset-8'>Tell us about your project</div>
          </div>
          <Button className="text-sm">Send Now</Button>
        </motion.footer>
      </div>
    </div>
  );
};

export default Footer;
