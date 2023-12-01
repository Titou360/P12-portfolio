import Link from 'next/link';
import WhatsApp from './Whatsapp';

const Footer = () => {
  return (
    <footer className="w-full bg-dark border-t-2 border-solid border-dark font-medium text-lg text-light">
      <div className="p-10 flex flex-col sm:flex-row items-center justify-between ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build With ❤️ by
          <Link className="text-primary px-1 underline underline-offset-2" href="/">
            Clément FELICES
          </Link>
        </div>
          <WhatsApp />
      </div>
    </footer>
  );
};

export default Footer;

