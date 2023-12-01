import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({ filteredCards }) => {
  // Déstructuration de l'objet pour obtenir filteredCards
  return (
    <>
      {filteredCards.map((card) => (
        <div key={card.id} className="py-12 px-4">
          <div className="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-black rounded-lg border shadow-lg pb-6 lg:pb-0">
            <div className="w-full lg:w-1/3 lg:p-4">
              <Image src={card.cover} alt="Image du projet" width={138} height={167} />
            </div>

            <div className="w-full lg:w-2/3 p-4">
              <div className="inline-grid">
                <h3 className="work-sans font-semibold text-xl text-white">{card.title}</h3>

                <p className="raleway text-sm my-4 text-white opacity-75">{card.explain}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center -mt-8 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-8 lg:justify-end lg:pr-8 py-1">
            <motion.a
              href={card.links.demoLink}
              type="button"
              className="text-white py-3 px-4 rounded-lg bg-primary"
              target="_blank"
              whileHover={{ y: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <p className="work-sans font-semibold text-sm tracking-wide">Démo</p>
            </motion.a>

            <motion.a
              href={card.links.codeLink}
              type="button"
              className="py-3 px-4 bg-primary rounded-lg ml-3 text-white"
              whileHover={{ y: 2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
            >
              <p className="work-sans font-semibold text-sm tracking-wide">Github</p>
            </motion.a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
