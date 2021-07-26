import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="max-w-[1200px] flex-1 w-full ">
      <h2 className="flex items-center font-medium text-4xl overflow-hidden before:bg-black dark:before:bg-white before:w-[175px] before:h-[1px] before:mr-4 before:inline">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-x-[140px] gap-y-20 pt-10 lg:grid-cols-2">
        <ProjectCard
          imgSrc="/TheCanvasJewelryMockup.png"
          title="The Canvas Jewelry"
          description="lsdkadklsad"
        />
        <ProjectCard
          imgSrc="/DumprMockup.png"
          title="DumpR"
          description="lsdkadklsad"
        />
      </div>
    </section>
  );
};

export default Projects;
