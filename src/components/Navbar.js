'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './Logo';
import { TwitterIcon, LinkedinIcon, GithubIcon, CodepenIcon, SlackIcon } from './icons';


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
        <CustomLink href="/about" title="A propos" className="mx-4" />
        <CustomLink href="/projects" title="Projets" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="ml-4" />
      </nav>

      <nav>
        <Link href="/" target="_blank">
          <TwitterIcon />
        </Link>
        <Link href="/" target="_blank">
          <LinkedinIcon />
        </Link>
        <Link href="/" target="_blank">
          <GithubIcon />
        </Link>
        <Link href="/" target="_blank">
          <CodepenIcon />
        </Link>
        <Link href="/" target="_blank">
          <SlackIcon />
        </Link>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
