import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { TrombiIcon } from '@/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import profilPic from '../assets/img/Profil/NOBG-clement.webp';
import HireMe from '@/components/HireMe';
import lightBulb from "../assets/img/Hero/NOBG-bulb.png"


export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/3">
            <Image src={profilPic} alt="Photo de Clément Felices" className="w-full h-auto shadow-[0px_20px_20px_10px_#00000024]" />
          </div>
          <div className="w-1/2 flex flex-col item-center">
            <AnimatedText text="Réalisateur digital, rêveur de code." className="!text-6xl text-left" />
            <p className="italic font-bold text-justify">
              Après 22 ans d&apos;hôtellerie-restauration, j&apos;ai tout quitté pour me réorienter dans le développement web. <br />
              Bercé depuis ma plus jeune adolescence dans le monde de l&apos;informatique, le code a toujours été pour moi une fascination.
            </p>
            <br />
            <p className="text-justify my-4 text-base font-medium">
              Après une reconvertion professionnelle réussie, je me consacre dès maintenant à la transformation d&apos;idées en applications web
              innovantes. Explorez mes récents projets et articles, mettant en avant mon expertise en React.js et en développement web, où chaque
              ligne de code raconte une histoire de créativité et d&apos;efficacité.
            </p>

            <div className="flex items-center self-start mt-2 ">
              {/* Next line => !pdf must be placed in public directory */}
              <Link
                href="/resume.pdf"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
                download={true}
              > 
              Curriculum  <TrombiIcon className="w-6 ml-1" />
              </Link>

              <Link href="mailto:clement.felices@gmail.com" target={'_blank'}
              className='ml-4 text-lg font-medium capitalize text-dark underline'
              >
                Contactez-moi
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      <HireMe />

      <div className='absolute right-8 bottom-8 inline-block w-28'>
        <Image src={lightBulb} alt="Clément Felices" className='w-full h-auto' />
      </div>
    </main>
  );
}
