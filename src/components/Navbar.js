'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { CodepenIcon, GithubIcon, LinkedinIcon, SlackIcon, TwitterIcon } from './Icons';

const CustomLink = ({ href, title, className = '' }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
      h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
      ${pathname === href ? 'w-full' : 'w-0'}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Accueil" className="mr-4" />
        <CustomLink href="/About" title="A propos" className="mx-4" />
        <CustomLink href="/Projects" title="Projets" className="mx-4" />
        <CustomLink href="/Contact" title="Contact" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://github.com/Titou360" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3">
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/cl%C3%A9ment-felices-30784425a/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedinIcon />
        </motion.a>
        <motion.a href="https://twitter.com/Titou_360" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
          <TwitterIcon />
        </motion.a>
        <motion.a href="https://codepen.io/Titou360" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
          <CodepenIcon />
        </motion.a>
        <motion.a
          href="https://occommunity.slack.com/team/U0508G7V7AM"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <SlackIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
