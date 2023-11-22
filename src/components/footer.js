import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <div className="py-8 flex items-center justify-between ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build With ❤️ by
          <Link className="text-primary px-1 underline underline-offset-2" href="/">
            Clément FELICES
          </Link>
        </div>
        <Link href="/" target={'_blank'} className="px-1 underline underline-offset-2">
          Say Hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;