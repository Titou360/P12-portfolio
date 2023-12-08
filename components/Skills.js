import React from 'react';
import { CSSIcon, HtmlIcon, JavaScriptIcon, ReactIcon, ReduxIcon, SassIcon, TailwindIcon, WordpressIcon } from './Icons';

const Skills = () => {
  const commonStyle =
    'lg:w-4/6 w-full md:p-1 p-6 bg-light border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-300 dark:border-primary dark:hover:bg-gray-100';

  const skillsList = [HtmlIcon, JavaScriptIcon, ReactIcon, ReduxIcon, TailwindIcon, CSSIcon, SassIcon, WordpressIcon];

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 w-full flex-wrap">
      {skillsList.map((Icon, index) => (
        <Icon key={index} className={commonStyle} />
      ))}
    </div>
  );
};

export default Skills;
