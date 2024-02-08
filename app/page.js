'use client';

import Container from "@/components/Container";
import { Data } from "../components/Data";
import { motion } from 'framer-motion';
import { footerVariants } from '@/lib/Motion';

export default function Home() {
  return (
    <Container>
      <div className="xl:px-17 md:px-6 lg:px-8 sm:px-5 xs:px-2 px-3 pt-40 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mds:grid-col-2 xl:grid-cols-3 xs:grid-cols-1 2xl:grid-cols-4 
       gap-3">
        {Data.map((item) => (
          <motion.nav 
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={item.id} 
            className="col-span-1 cursor-pointer group -mt-12 -mb-10 transition-[flex] duration-[0.7s] ease-out-flex">
            <div className="flex flex-col w-full gap-6 h-3/4">
              <div className="w-7/10 overflow-hidden aspect-square rounded-md relative">
                <img
                  
                  className="object-contain w-full group-hover:scale-110 transition "
                  src={item.img}
                  alt="listing"
                />
              </div>
              <div className=" font-poppins leading-[37.4px] font-semibold text-[22px] md:text-[19px] md:leading-[31.4px]  xs:text-[13px] xs:leading-[20.4px] lg:text-[22px]  lg:leading-[37.4px]  ">{item.heading}</div>
              <div className="flex gap-1 flex-row items-center">
                <div className="leading-[24px]  font-poppins font-[400] text-[16px]">Digital Solutions </div>
                <div className=" text-[16px] font-poppins font-[400] leading-[24px] ">{` / ${item.date}`}</div>
              </div>
            </div>
          </motion.nav>
        ))}
      </div>
    </Container>
  );
}
