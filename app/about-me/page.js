"use client" 
import AnimatedText from '@/components/AnimatedText';
import AnimatedNumber from '@/components/AnimatedNumber';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Skills from '@/components/Skills';




const Page = () => {
  return (
    <>
      <section id="about-me" className="w-full pt-2 mb-6 flex flex-col items-center text-dark dark:text-light">
        <AnimatedText className="normal-case xl:!text-5xl lg:!text:6xl md:!text-5xl sm:!text-3xl" text="À propos de moi" />

        <div className="grid grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-4 mt-6 items-start">
          <div className="m-4 order-1 lg:order-3 ">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-primary xs:mb-0">Skills</h2>

            <Skills />
          </div>

          <div className="m-4 order-2 lg:order-1">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-primary">Biographie</h2>
            <p className="font-medium">
              Salut{' '}
              <motion.span
                style={{ display: 'inline-block' }}
                animate={{
                  rotate: [0, -20, 20, -20, 20, -20, 20, -20, 0], // Animation de balancement
                  transition: { duration: 4, repeat: Infinity } // Répétition infinie
                }}
                className="text-2xl"
              >
                ✋
              </motion.span>
              Je suis Clément Felices, un développeur Web Front-end avec une appétence à la création d&apos;expériences digitales fonctionnelles et
              innovantes.
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

          <div className="flex flex-col justify-between text-lg font-bold uppercase text-dark dark:text-light ml-4 order-3 lg:order-2 xs:mb-4">
            <h2 className="m-4 text-lg font-bold uppercase text-dark/75 dark:text-primary xs:m-0">Quelques chiffres</h2>
            <div className="flex flex-col items-center justify-center">
              <span className="inline-block normal-case text-7xl font-bold">
                <AnimatedNumber toNumber={9} />
              </span>
              <h2 className="text-xl bold bg-primary normal-case text-dark dark:text-light mx-auto px-2 rounded-full">
                mois de formation
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <span className="inline-block normal-case text-7xl font-bold">
                <AnimatedNumber toNumber={12} />
              </span>
              <h2 className="text-xl bold bg-primary  normal-case text-dark dark:text-light px-4 rounded-full">
                projets complétés
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <span className="inline-block normal-case text-7xl font-bold">
                <AnimatedNumber toNumber={15} />
              </span>
              <h2 className="text-xl bold bg-primary normal-case text-dark dark:text-light px-4 rounded-full">
                certifications reçues
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <span className="inline-block normal-case text-7xl font-bold">
                <AnimatedNumber toNumber={1} />
              </span>
              <h2 className="text-xl bold bg-primary normal-case text-dark dark:text-light px-4 rounded-full">
                diplôme obtenu
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <span className="inline-block normal-case text-7xl font-bold">
                <AnimatedNumber toNumber={1000} />
              </span>
              <h2 className="text-xl bold bg-primary normal-case text-dark dark:text-light px-4 rounded-full">
                % de motivation
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
