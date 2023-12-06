import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

export default function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 xs:w-10 xs:h-10 bg-dark text-light dark:bg-light dark:text-dark flex items-center justify-center rounded-full text-2xl xs:text-l font-bold"
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.5 }
        }}
      >
        CF
      </MotionLink>
    </div>
  );
}
