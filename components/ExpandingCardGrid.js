'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import data from '../data/projects.json';

const cardsData = data.projects;

const ExpandingCardGrid = ({ filteredCards }) => {
  const [openCard, setOpenCard] = useState(null);

  const handleCardClick = (cardId) => {
    setOpenCard((prevOpenCard) => (prevOpenCard === cardId ? null : cardId));
  };

  return (
    <>
      {filteredCards.map((card) => (
        <motion.div
          key={card.id}
          layout
          onClick={() => handleCardClick(card.id)}
          className={`bg-white cursor-pointer rounded-lg w-full pt-12 pb-12 pl-16 pr-16 drop-shadow-lg hover: m-4 ${
            openCard === card.id ? 'border-2 border-orange-600/75' : ''
          }`}
        >
          <motion.h2 layout className="mb-4 text-lg font-bold uppercase text-dark/75 text-left">
            {card.title}
          </motion.h2>

          {openCard === card.id && (
            <motion.div className="w-full h-full" layout>
              <p className="pt-4 leading-5 text-justify">{card.description}</p>

              <div className="flex row justify-around align-center mt-2">
                <span>{card.links.codeLink}</span>
                <span>{card.links.demoLink}</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default ExpandingCardGrid;
