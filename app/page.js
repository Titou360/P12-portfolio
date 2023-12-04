'use client';
import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import { DownloadIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import profilPic from '../public/NOBG-clement.webp';

export default function Home() {
  return (
    <>
      <div className="flex items-center text-dark dark:text-light min-h-screen">
        <div className="p-10 flex items-center justify-center gap-4">
          <div className="w-1/3 flex items-center justify-center">
            <Image src={profilPic} alt="Photo de Clément FELICES" className="w-80 h-auto shadow-[0px_20px_20px_10px_#00000024] dark:bg-light"  />
          </div>

          <div className="w-1/2 flex flex-col item-center">
            <AnimatedText className="!text-6xl text-left normal-case" text="Je suis Clément Felices, développeur Web" />
            <p className="italic font-bold text-justify">
              Après 22 ans d&apos;hôtellerie-restauration, j&apos;ai quitté ce métier captivant pour me réorienter dans le développement web. <br />
              Bercé depuis ma plus jeune adolescence par le monde de l&apos;informatique, il est devenu une passion, le code a toujours été pour moi
              une fascination et je suis heureux de pouvoir proposer des solutions digitales à mes clients.
            </p>
            <br />
            <p className="text-justify my-4 text-base font-medium">
              Après une reconvertion professionnelle réussie, je me consacre dès maintenant à la transformation d&apos;idées en applications web
              innovantes. Explorez mes récents projets, mettant en avant mon expertise en React.js et en développement web, où chaque ligne de code
              raconte une histoire de créativité et d&apos;efficacité.
            </p>

            <div className="flex items-center self-start mt-2 justify-center ">
              <div className="flex flex-wrap justify-center items-center">
                {/* Next line => !resume.pdf must be placed in public directory */}
                <motion.a
                  href="/resume.pdf"
                  className="flex flex-nowrap items-center align-baseline bg-dark text-light dark:bg-light dark:text-dark py-1 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-solid border-4 border-transparent hover:border-solid hover:border-4 hover:border-dark dark:hover:border-primary"
                  download={true}
                >
                  Curriculum
                  <DownloadIcon className="m-3 w-6" />
                </motion.a>
              </div>

              <Link
                href="mailto:clement.felices@gmail.com"
                target={'_blank'}
                className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
              >
                Contactez-moi
              </Link>
            </div>
          </div>
        </div>

        <HireMe className="float-left" />
      </div>
    </>
  );
}
