"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { CodepenIcon, GithubIcon, LinkedinIcon, SlackIcon, SunIcon, TwitterIcon, MoonIcon, BubbleLight } from "./Icons";
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import useThemeSwitcher from "./hooks/useThemeSwitcher";

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
const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full bg-light dark:bg-dark px-32 py-8 font-medium flex items-center justify-between z-10 dark:-z-10 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] dark:border-solid dark:border-primary dark:border-b-2">
      <nav>
        <CustomLink href="/" className="mr-4 dark:text-light" title="Accueil" />
        <CustomLink href="/about-me" className="mx-4 dark:text-light" title="À propos" />
        <CustomLink href="/myprojects" className="mx-4 dark:text-light" title="Projets" />
        <CustomLink href="/contact-me" className="ml-4 dark:text-light" title="Contact" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          tabIndex="0"
          aria-label="Découvrez les codes de Clément sur son Github"
          href="https://github.com/Titou360"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3 dark:fill-primary"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          tabIndex="0"
          aria-label="Rejoingez Clément sur Linkedin"
          href="https://www.linkedin.com/in/cl%C3%A9ment-felices-30784425a/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 dark:fill-primary"
        >
          <LinkedinIcon />
        </motion.a>
        <motion.a
          tabIndex="0"
          aria-label="Rejoingez Clément sur Twitter / X"
          href="https://twitter.com/Titou_360"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 dark:fill-primary"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          tabIndex="0"
          aria-label="Découvrez les brouillons de Clément sur CodePen"
          href="https://codepen.io/Titou360"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 dark:fill-primary"
        >
          <CodepenIcon />
        </motion.a>
        <motion.a
          tabIndex="0"
          aria-label="Rejoingez Clément sur Slack"
          href="https://occommunity.slack.com/team/U0508G7V7AM"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3 dark:fill-primary"
        >
          <SlackIcon />
        </motion.a>

        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className="ml-3 flex items-center justify-center rounded-full p-1">
          {mode === 'dark' ? <SunIcon className={'fill-primary'} /> : <MoonIcon className={'fill-dark'} />}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
