import { useEffect, useState } from 'react';
import data from '../public/projects.json';
import { motion } from 'framer-motion';

const projectsData = data.projects;
const allTags = [...new Set(projectsData.flatMap((card) => card.tags.filter((tag) => tag !== undefined && tag !== '')))];

const FilterTags = ({ onFilterChange }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    onFilterChange(selectedTag);
  }, [selectedTag, onFilterChange]);

  const handleTagClick = (tag) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
  };

    const handleShowAll = () => {
      setSelectedTag(null); // Désélectionne tous les tags
    };

  if (allTags.length === 0) {
    return null; // Ou un autre rendu approprié lorsque la liste est vide
  }

  return (
    <div className="flex sm:flex-row flex-wrap items-center justify-center mt-10 -mb-4 ">
      <motion.button
        onClick={handleShowAll}
        className={`button ${
          selectedTag === null
            ? 'active bg-primary/75 text-light px-4 py-2 m-2 rounded-lg'
            : 'bg-dark dark:bg-light px-4 py-2 m-2 text-light dark:text-dark rounded-lg'
        }`}
        whileHover={{ y: -2 }}
      >
        Tous
      </motion.button>
      {allTags.map((tag, index) => (
        <motion.button
          key={index}
          onClick={() => handleTagClick(tag)}
          whileHover={{ y: -2 }}
          className={` ${
            selectedTag === tag
              ? 'active bg-primary text-white px-4 py-2 m-2 rounded-lg'
              : 'bg-dark dark:bg-light px-4 py-2 m-2 text-white dark:text-dark rounded-lg'
          }`}
        >
          {tag}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterTags;
