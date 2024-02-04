'use client';

import Image from "next/image";
import Container from "@/components/Container";
import { Data } from "../components/Data";
import { motion } from 'framer-motion';
import { footerVariants } from '@/lib/Motion';

export default function Home() {
  return (
    <Container>
      <div className="xl:px-20 md:px-12 sm:px-2 px-3 pt-40 flex justify-around flex-wrap gap-2
       ">
        {Data.map((item) => (
          <motion.nav 
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={item.id} 
            className="col-span-1 cursor-pointer group -mt-12 -mb-10 transition-[flex] duration-[0.7s] ease-out-flex">
            <div className="flex flex-col w-full h-3/4">
              <div className="w-7/10 overflow-hidden aspect-square rounded-md relative">
                <Image
                  fill
                  className="object-cover w-full group-hover:scale-110 transition"
                  src={item.img}
                  alt="listing"
                />
              </div>
              <div className="text-md font-medium">{item.heading}</div>
              <div className="flex gap-1 flex-row items-center">
                <div className="font-light text-[13px]">Digital Solutions </div>
                <div className="font-light text-[13px]">{` / ${item.date}`}</div>
              </div>
            </div>
          </motion.nav>
        ))}
      </div>
    </Container>
  );
}
