'use client';

import FilterTags from '@/components/FilterTags';
import ProjectCard from '@/components/ProjectCard';
import { useState } from 'react';
import data from '../../public/projects.json';
import AnimatedText from '@/components/AnimatedText';

const cardsData = data.projects;

const ProjectsDetails = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const filteredCards = selectedTag ? cardsData.filter((card) => card.tags && card.tags.includes(selectedTag)) : cardsData;

  const handleFilterChange = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
      <section id="projects" className="w-full pt-2 mb-6 flex flex-col items-center text-dark">
        <AnimatedText className="normal-case" text="Découvrez mes projets" />

        <div className="w-full flex items-center justify-center flex-col">
          <FilterTags onFilterChange={handleFilterChange} />

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {Array.isArray(filteredCards) ? <ProjectCard filteredCards={filteredCards} /> : <p>Erreur : Les données filtrées ne sont pas valides.</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsDetails;
