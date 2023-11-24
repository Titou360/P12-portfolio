import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

export default function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.5, },
          color: "dark",
        }}
      >
        CF
      </MotionLink>
    </div>
  );
}
