'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import IconNavbar from './IconNavbar';
import { CodepenIcon, GithubIcon, LinkedinIcon, MoonIcon, SlackIcon, SunIcon, TwitterIcon, WhatsAppIcon } from './Icons';
import Logo from './Logo';
import useThemeSwitcher from './hooks/useThemeSwitcher';

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

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    toggle();
    setIsOpen(!isOpen);
  };

  return (
    <Link legacyBehavior href={href}>
      <a className={`${className} relative group text-light dark:text-dark my-2 `} onClick={handleClick}>
        {title}
        <span
          className={`
            h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
            ${isOpen && pathname === href ? 'w-full' : 'w-0'}
          
          `}
        >
          &nbsp;
        </span>
      </a>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-light dark:bg-dark px-32 py-8 font-medium flex items-center justify-between shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] dark:border-solid dark:border-primary dark:border-b-2 relative">
      <button
        aria-label="button hamburger menu"
        className="absolute top-5 left-5 flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" className="mr-4 dark:text-light" title="Accueil" />
          <CustomLink href="/about-me" className="mx-4 dark:text-light" title="À propos" />
          <CustomLink href="/myprojects" className="mx-4 dark:text-light" title="Projets" />
          <CustomLink href="/contact-me" className="ml-4 dark:text-light" title="Contact" />
        </nav>

        <div className="flex flex-row ">
          <IconNavbar />

          <button
            aria-label="button dark mode"
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className="ml-3 flex items-center justify-center rounded-full p-1"
          >
            {mode === 'dark' ? <SunIcon className={'fill-primary'} /> : <MoonIcon className={'fill-dark'} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opcacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[75vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center ">
            <CustomMobileLink href="/" className=" dark:text-dark" title="Accueil" toggle={handleClick} />
            <CustomMobileLink href="/about-me" className=" dark:text-dark" title="À propos" toggle={handleClick} />
            <CustomMobileLink href="/myprojects" className=" dark:text-dark" title="Projets" toggle={handleClick} />
            <CustomMobileLink href="/contact-me" className="dark:text-dark" title="Contact" toggle={handleClick} />
          </nav>
          <div className="flex flex-row justify-center items-center mt-20">
            <nav className="flex items-center justify-center flex-nowrap">
              <motion.a
                tabIndex="0"
                aria-label="Chat on WhatsApp"
                href="https://wa.me/0033621145888?text=Bonjour%20:)"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3 sm:mr-1 dark:fill-primary fill-light"
              >
                <WhatsAppIcon />
              </motion.a>

              <motion.a
                tabIndex="0"
                aria-label="Découvrez les codes de Clément sur son Github"
                href="https://github.com/Titou360"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1 dark:fill-primary fill-light"
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
                className="w-6 mx-3 sm:mx-1 dark:fill-primary fill-light"
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
                className="w-6 mx-3 sm:mx-1 dark:fill-primary fill-light"
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
                className="w-6 mx-3 sm:mx-1 dark:fill-primary fill-light"
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
                className="w-6 ml-3 sm:ml-1 dark:fill-primary fill-light"
              >
                <SlackIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className="ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1"
              >
                {mode === 'dark' ? (
                  <SunIcon className={'fill-primary w-6 mr-3 sm:mx-1'} />
                ) : (
                  <MoonIcon className={'fill-dark lg:fill-light w-6 mr-3 sm:mx-1'} />
                )}
              </button>
            </nav>
          </div>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
