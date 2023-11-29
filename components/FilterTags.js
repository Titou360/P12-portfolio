import { useEffect, useState } from 'react';
import data from '../data/projects.json';

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
    <div className="flex row items-center justify-center mt-10 -mb-4">
      <button onClick={handleShowAll} className={`button ${selectedTag === null ? 'active bg-primary text-white px-4 py-2 m-2 rounded-lg' : 'bg-gray-800 px-4 py-2 m-2 text-white rounded-lg'}`}>
        Tous
      </button>
      {allTags.map((tag, index) => (
        <button
          key={index}
          onClick={() => handleTagClick(tag)}
          className={` ${
            selectedTag === tag ? 'active bg-primary text-white px-4 py-2 m-2 rounded-lg' : 'bg-gray-800 px-4 py-2 m-2 text-white rounded-lg'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
