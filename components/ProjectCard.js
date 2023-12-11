import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({ filteredCards }) => {
  return (
    <>
      {filteredCards.map((card) => (
        <div key={card.id} className="py-8 px-4">
          <div className="inline-grid h-full lg:flex bg-dark dark:bg-light dark:border-primary rounded-lg border shadow-lg pb-6 lg:pb-0 ">
            <div className="w-full lg:w-1/3 p-4">
              <Image
                className="object-fill shadow-[5px_5px_0px_0px_rgba(229,88,18)]"
                src={card.cover}
                alt="Image du projet"
                width={150}
                height={150}
              />
            </div>

            <div className="w-full lg:w-2/3 p-4">
              <div className="inline-grid">
                <h2 className="font-semibold text-xl text-primary dark:text-dark">{card.title}</h2>

                <p className="text-sm my-3 text-light dark:text-dark opacity-75">{card.explain}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end -mt-8 rounded-b-lg lg:-mt-8 lg:pr-8 py-1 ">
            {card.links.demoLink ? (
              <motion.a
                href={card.links.demoLink}
                type="button"
                className="text-dark py-3 px-4 rounded-lg bg-primary"
                target="_blank"
                whileHover={{ y: 2 }}
                whileTap={{ scale: 0.9 }}
              >
                <p className="font-semibold text-sm tracking-wide">Démo</p>
              </motion.a>
            ) : (
              <div className="text-dark py-3 px-4 rounded-lg bg-gray-300 cursor-not-allowed">
                <p className="font-semibold text-sm tracking-wide">Démo</p>
              </div>
            )}

            {card.links.codeLink ? (
              <motion.a
                href={card.links.codeLink}
                type="button"
                className="py-3 px-4 bg-primary rounded-lg ml-3 text-dark"
                whileHover={{ y: 2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
              >
                <p className="font-semibold text-sm tracking-wide">Github</p>
              </motion.a>
            ) : (
              <div className="py-3 px-4 bg-gray-300 rounded-lg ml-3 cursor-not-allowed">
                <p className="font-semibold text-sm tracking-wide">Github</p>
              </div>
            )}

            <motion.button
              type="button"
              className="py-3 px-4 rounded-lg bg-light text-dark mx-3 cursor-auto border-solid border-2 border-primary xs:hidden sm:hidden"
              target="_blank"
            >
              <p className="font-semibold text-sm tracking-wide ">{card.source}</p>
            </motion.button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
