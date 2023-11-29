"use client" 
import AnimatedText from '@/components/AnimatedText';
import AnimatedNumber from '@/components/AnimatedNumber';
import Image from 'next/image';
import Link from 'next/link';
import { HtmlIcon } from '@/components/Icons';
import TransitionEffect from '@/components/TransitionEffect';



const Page = () => {
  return (
    <>
      <TransitionEffect />
      <section id="about-me" className="w-full pt-2 mb-6 flex flex-col items-center text-dark">
        <AnimatedText className="normal-case" text="À propos de moi" />

        <div className="grid grid-cols-3 gap-4 mt-6 items-start">
          <div className="m-4">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Skills</h2>
            <div className="grid">
              <HtmlIcon className="w-17 h-17" />
            </div>
          </div>

          <div className="m-4">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biographie</h2>
            <p className="font-medium text-justify">
              Salut✋Je suis Clément Felices, un développeur Web Front-end avec une appétence à la création d&apos;expériences digitales
              fonctionnelles et innovantes.
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
              Mon expertise dans la gestion de projets que ce soit pour la rénovation complète de mon domicile ou le développement d&apos;une
              application web, s&apos;est démarquée par l&apos;utilisation efficace d&apos;outils tels que le kanban.
              <br />
              <br />
              Passionné par React, je reste avide de nouvelles technologies pour enrichir mes connaissances en développement.
            </p>
          </div>

          <div className="flex flex-col justify-between text-lg font-bold uppercase text-dark ml-4">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 m-4">Skills</h2>
            <div className="flex flex-col items-center">
              <span className="inline-block normal-case text-7xl font-bold">
                <AnimatedNumber toNumber={9} />
              </span>
              <h2 className="text-xl bold bg-primary normal-case text-dark/75">mois de formation</h2>
            </div>

            <div className="flex flex-col items-center">
              <span className="inline-block normal-case text-7xl font-bold">
                <AnimatedNumber toNumber={12} />
              </span>
              <h2 className="text-xl bold bg-primary  normal-case text-dark/75">projets complétés</h2>
            </div>

            <div className="flex flex-col items-center">
              <span className="inline-block normal-case text-7xl font-bold">
                <AnimatedNumber toNumber={15} />
              </span>
              <h2 className="text-xl bold bg-primary normal-case  text-dark/75">certifications reçues</h2>
            </div>

            <div className="flex flex-col items-center">
              <span className="inline-block normal-case text-7xl font-bold">
                <AnimatedNumber toNumber={1} />
              </span>
              <h2 className="text-xl bold bg-primary normal-case  text-dark/75">diplôme obtenu</h2>
            </div>

            <div className="flex flex-col items-center">
              <span className="inline-block normal-case text-7xl font-bold">
                <AnimatedNumber toNumber={1000} />
              </span>
              <h2 className="text-xl bold bg-primary normal-case  text-dark/75">% de motivation</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
