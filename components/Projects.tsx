import React from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section>
      <SectionTitle subtitle="I like keeping myself busy and having projects to work on. Here are some of the applications I built.">
        Projects
      </SectionTitle>
      <div className="grid grid-cols-1 gap-x-[140px] gap-y-20 pt-10 lg:grid-cols-2 ">
        <ProjectCard
          imgSrc="projects/TheCanvasJewelryMockup.png"
          title="The Canvas Jewelry"
          description="An e-commerce website built with Next.JS & Sanity for a jewelry company."
          liveLink="https://thecanvasjewelry.com"
          repoLink="https://github.com/paolotiu/canvas-jewelry"
        />
        <ProjectCard
          imgSrc="projects/TaikeeMockup.png"
          title="Taikee"
          description="Taikee is a money management platform that helps you make better decisions with your finances. Built with Remix, Planetscale, and Cloudflare."
          liveLink="https://taikee.co"
          // repoLink="https://github.com/paolotiu/canvas-jewelry"
        />
        <ProjectCard
          imgSrc="projects/GDSCMockup.png"
          title="GDSC Loyola Website"
          description="The official website of Google Developer Student Club Loyola. Built with Astro."
          liveLink="https://gdscloyola.org"
        />

        {/* <ProjectCard
          imgSrc="/DumprMockup.png"
          title="DumpR"
          description="A bookmarking web app with draggable folders and subfolders."
          liveLink="https://dumpr.vercel.app"
          repoLink="https://github.com/paolotiu/bookmark-manager"
        /> */}
      </div>
    </section>
  );
};

export default Projects;
