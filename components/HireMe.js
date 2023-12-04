import Link from 'next/link';
import { CircularText, Handshake } from './Icons';

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-25 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText />
        <Link
          href="mailto:clement.felices@gmail.com"
          className="flex items-center justify-center absolute left-1/2   -translate-x-1/2 w-20 h-20 rounded-full"
        >
          <Handshake className="dark:fill-primary" />
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
