import React from 'react';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className="max-w-[1200px] flex-1 w-full ">
      <SectionTitle>Projects</SectionTitle>
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
