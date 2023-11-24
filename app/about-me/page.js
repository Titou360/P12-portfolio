import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import profilPic from '../../public/NOBG-clement.webp';



const Page = () => {
  return (
    <section id="about-me" className="w-full pt-2 mb-6 flex flex-col items-center text-dark">
      <AnimatedText className="normal-case" text="À propos de moi" />

      <div className="grid grid-cols-3 gap-4 mt-6 items-start">
        <div className="ml-4">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biographie</h2>
          <p className="font-medium text-justify">
            Salut✋Je suis Clément Felices, un développeur Web Front-end avec une appétence à la création d&apos;expériences digitales fonctionnelles
            et innovantes.
            <br />
            <br />
            Fort d&apos;une carrière florissante de 21 ans dans l&apos;hôtellerie-restauration, j&apos;ai cultivé des compétences exceptionnelles en
            gestion de projets, management d&apos;équipes et service client.
            <br />
            <br />
            Après cette réussite, je me suis lancé dans une formation à domicile dans le développement web avec{' '}
            <Link className="underline" href="https://openclassrooms.com/fr/" target="_blank">
              {' '}
              OpenclassRooms
            </Link>{' '}
            en jonglant entre la formation, l&apos;éducation de mes 4 (sic!) enfants et la rénovation de ma maison.
            <br />
            <br />
            Mon expertise dans la gestion de projets que ce soit pour la rénovation complète de ma maison ou le développement d&apos;une application
            web, s&apos;est démarquée par l&apos;utilisation efficace d&apos;outils tels que le kanban.
            <br />
            <br />
            Passionné par React, je reste avide de nouvelles technologies pour enrichir mes connaissances en développement.
          </p>
        </div>
        <Image
          src={profilPic}
          alt="Photo de Clément FELICES"
          className="w-full h-auto rounded-2x1 -z-10 mx-4 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
        />

        <div className="flex flex-col items-start justify-between text-lg font-bold uppercase text-dark ml-4">
          <div className="flex flex-col items-start">
            <span className="inline-block text-7xl font-bold">9</span>
            <h2 className="text-xl bold bg-primary normal-case text-dark/75">mois de formation</h2>
          </div>

          <div className="flex flex-col items-start">
            <span className="inline-block normal-case text-7xl font-bold">12</span>
            <h2 className="text-xl bold bg-primary  normal-case text-dark/75">projets complétés</h2>
          </div>

          <div className="flex flex-col items-start">
            <span className="inline-block normal-case text-7xl font-bold">+12</span>
            <h2 className="text-xl bold bg-primary normal-case  text-dark/75">certifications reçues</h2>
          </div>

          <div className="flex flex-col items-start">
            <span className="inline-block normal-case text-7xl font-bold">1</span>
            <h2 className="text-xl bold bg-primary normal-case  text-dark/75">diplôme obtenu</h2>
          </div>

          <div className="flex flex-col items-start">
            <span className="inline-block normal-case text-7xl font-bold">1000%</span>
            <h2 className="text-xl bold bg-primary normal-case  text-dark/75">motivation</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
