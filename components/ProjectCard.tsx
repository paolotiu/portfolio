import React from 'react';

interface Props {
  imgSrc: string;
  title: string;
  description: string;
}

const ProjectCard = ({ imgSrc, title, description }: Props) => {
  return (
    <div className="w-full cursor-pointer group">
      <div
        className="w-full h-[280px] sm:h-[350px] md:h-[250px] xl:h-[350px] bg-cover rounded bg-center group-hover:transform group-hover:scale-105 transition duration-300"
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <div className="pt-8">
        <h3 className="text-3xl font-medium">{title}</h3>
        <p className="pt-5 leading-7 text-subtext">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
