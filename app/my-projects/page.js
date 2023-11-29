'use client';
import AnimatedText from '@/components/AnimatedText';
import ExpandingCardGrid from '@/components/ExpandingCardGrid';
import FilterTags from '@/components/FilterTags';
import { useState } from 'react';
import data from '../../data/projects.json';

const cardsData = data.projects;

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const filteredCards = selectedTag ? cardsData.filter((card) => card.tags && card.tags.includes(selectedTag)) : cardsData;

  const handleFilterChange = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <section id="projects" className="w-full pt-2 mb-6 flex flex-col items-center text-dark">
      <AnimatedText className="normal-case" text="Découvrez mes projets" />

      <FilterTags onFilterChange={handleFilterChange} />
      <div className="w-full h-full flex row flex-wrap justify-center items-center max-w-5xl m-16 ">
        <ExpandingCardGrid filteredCards={filteredCards} />
      </div>
    </section>
  );
};

export default Projects;
