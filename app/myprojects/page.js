'use client';

import FilterTags from '@/components/FilterTags';
import ProjectCard from '@/components/ProjectCard';
import { useState } from 'react';
import data from '../../public/projects.json';
import AnimatedText from '@/components/AnimatedText';
import { motion } from 'framer-motion';

const cardsData = data.projects;

const ProjectsDetails = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const filteredCards = selectedTag ? cardsData.filter((card) => card.tags && card.tags.includes(selectedTag)) : cardsData;

  const handleFilterChange = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
      <section id="projects" className="w-full pt-2 mb-6 flex flex-col items-center text-dark dark:text-light">
        <AnimatedText className="normal-case xl:!text-5xl lg:!text:6xl md:!text-5xl sm:!text-3xl" text="Découvrez mes projets" />

        <div className="w-full flex items-center justify-center flex-col">
          <FilterTags onFilterChange={handleFilterChange} />

          <motion.div
            className="grid items-stretch auto-rows-fr justify-center grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xl:w-4/5 2xl:w-3/5 2xl:grid-cols-2"
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20
            }}
          >
            {Array.isArray(filteredCards) ? <ProjectCard filteredCards={filteredCards} /> : <p>Erreur : Les données filtrées ne sont pas valides.</p>}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsDetails;
