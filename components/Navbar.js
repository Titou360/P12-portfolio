"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { CodepenIcon, GithubIcon, LinkedinIcon, SlackIcon, TwitterIcon } from "./Icons";
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const CustomLink = ({ href, title, className = '' }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
      h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
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
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between z-10 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <nav>
        <CustomLink href="/" className="mr-4" title="Accueil" />
        <CustomLink href="/about-me" className="mx-4" title="À propos" />
        <CustomLink href="/my-projects" className="mx-4" title="Projets" />
        <CustomLink href="/contact-me" className="ml-4" title="Contact" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          tabindex="0"
          href="https://github.com/Titou360"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          tabindex="0"
          href="https://www.linkedin.com/in/cl%C3%A9ment-felices-30784425a/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedinIcon />
        </motion.a>
        <motion.a
          tabindex="0"
          href="https://twitter.com/Titou_360"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          tabindex="0"
          href="https://codepen.io/Titou360"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <CodepenIcon />
        </motion.a>
        <motion.a
          tabindex="0"
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
