"use client"
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className = '' }) => {
  const quote = {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 4,
        staggerChildren: 0.15
      }
    }
  };

  const singleWord = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5
      }
    }
  };
  
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize xs:text-3xl sm:text-8xl text-5xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span key={word + '-' + index} className="inline-block" variants={singleWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default AnimatedText;
