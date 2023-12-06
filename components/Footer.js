import Link from 'next/link';
import IconNavbar from './IconNavbar';

const Footer = () => {
  return (
    <footer className="w-full bg-dark border-t-2 border-solid border-dark font-medium text-lg text-light dark:border-solid dark:border-primary">
      <div className="p-10 xs:p-2 flex flex-col lg:flex-col items-center justify-between gap-3">
        <div className="flex flex-row items-center justify-center bg-light dark:bg-transparent px-8 py-4 rounded-xl mb-2">
          <IconNavbar />
        </div>
        <div className="flex items-center xs:!text-xs gap-10 lg:gap-3">
          <Link href="/" className="text-primary px-1 xs:!text-s">
            Accueil
          </Link>
          <Link href="/about-me" className="text-primary px-1 xs:!text-s">
            À propos
          </Link>
          <Link href="/myprojects" className="text-primary px-1 xs:!text-s">
            Projets
          </Link>
          <Link href="/contact-me" className="text-primary px-1 xs:!text-s">
            Contact
          </Link>
        </div>
        <span className="text-center xs:!text-xs">
          Pensé & construit avec ❤️ par
          <Link className="text-primary px-1 underline underline-offset-2 xs:!text-s" href="/">
            Clément FELICES
          </Link>
        </span>
        <span className="text-center xs:!text-xs">
          {new Date().getFullYear()} &copy; Tous droits réservés <br />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
