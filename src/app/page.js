import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilPic from '../assets/img/Profil/BG-clement.webp';

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/3">
            <Image src={profilPic} alt="Photo de Clément Felices" className="w-full h-auto shadow-[0px_20px_20px_10px_#00000024]" />
          </div>
          <div className="w-1/2 flex flex-col item-center self-center">
            <AnimatedText text="Réalisateur digital, rêveur de code." className="!text-6xl" />
            <p className="italic font-bold">
              Après 22 ans d&apos;hôtellerie-restauration, j&apos;ai tout quitté pour me reconvertir dans le développement web. <br />
              Bercé depuis ma plus jeune adolescence dans le monde de l&apos;informatique, le code a toujours été pour moi une appétence.
            </p>
            <br />
            <p className="text-justify">
              Après une reconvertion réussie, je me consacre dès maintenant à la transformation d&apos;idées en applications web innovantes.
              Explorez mes récents projets et articles, mettant en avant mon expertise en React.js et en développement web, où chaque ligne de code
              raconte une histoire de créativité et d&apos;efficacité.
            </p>
          </div>
        </div>
      </Layout>
    </main>
  );
}
