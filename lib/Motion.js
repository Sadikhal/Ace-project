import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);


  useEffect(() => {
    // Your additional code or effects can go here
  }, []); 

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      style={{
        
        scaleX,
        transformOrigin: "left",
        
        background:"#024f59",
        position: "sticky",
        top: 0,
        width: "100%",
        height: "6px",
        zIndex: 10
      }}
    >
     
    </motion.div>
  );
};

export default ScrollAnimations;






export const textVariant2 = {
  
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay:.4
    },
  },
};







export const navVariants = {
  
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      
    },
  },
};





export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
  
};
