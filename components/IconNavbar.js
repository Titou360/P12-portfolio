"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, TwitterIcon, CodepenIcon, SlackIcon, WhatsAppIcon} from './Icons'

const IconNavbar = () => {

  return (
    <nav className="flex items-center justify-center flex-nowrap">
      <motion.a
        tabIndex="0"
        aria-label="Chat on WhatsApp"
        href="https://wa.me/0033621145888?text=Bonjour%20:)"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mr-3 dark:fill-primary"
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
        className="w-6 mx-3 dark:fill-primary"
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
    </nav>
  );
};

export default IconNavbar
