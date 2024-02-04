'use client';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Container from './Container';
import Image from 'next/image';
import Mobilenav from './Mobilenav';
import { ModeToggle } from '@/components/ui/Toggle';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import ScrollAnimations, { navVariants } from '@/lib/Motion';
import Link from 'next/link';

// Navbar component
const Navbar = () => {
  // Define routes
  const routes = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Company', href: '/company' },
    {
      label: (
        <div className='flex items-end'>
          Contact Us <ArrowUpRight className='pb-1' />
        </div>
      ),
      href: '/contact',
    },
  ];

  // Get theme from Next.js theme provider
  const { theme } = useTheme();

  return (
    <>
      {/* Scroll animations component */}
      <ScrollAnimations />
      {/* Container component */}
      <Container>
        {/* Navbar with motion animations */}
        <motion.nav
          variants={navVariants}
          initial='hidden'
          whileInView='show'
          className='flex flex-row items-center justify-between'
        >

          {/* Logo section */}
          <div className='sm:p-2 sm:pl-1 lg:pl-10 md:pl-6 flex text-center'>
            {theme === 'dark' ? (
              <Image className='cursor-pointer' src='/ace.png' height='100' width='100' alt='logo' />
            ) : (
              <Image className='cursor-pointer' src='/icon.png' height='100' width='100' alt='logo' />
            )}
          </div>

          {/* Navigation links and toggle section */}
          <div className='flex gap-3 items-center pr-6'>
            {/* Desktop navigation */}
            <div className='hidden sm:flex flex-row items-center sm:gap-4 md:gap-6 lg:gap-11 pr-7'>
              {routes.map((route) => (
                <Link key={route.href} href={route.href} className='text-[18px] md:text-[20px] font-serif whitespace-nowrap'>
                  {route.label}
                </Link>
              ))}
            </div>
            {/* Mobile navigation */}
            <div className='sm:hidden'>
              <Mobilenav routes={routes} />
            </div>
            {/* Dark mode toggle */}
            <div className='text-black dark:text-white'>
              <ModeToggle />
            </div>
          </div>
        </motion.nav>
      </Container>
    </>
  );
};

export default Navbar;
