import React from "react";

interface Props {
  imgSrc: string;
  title: string;
  description: string;
  liveLink?: string;
  repoLink?: string;
}

const ProjectCard = ({ imgSrc, title, description, liveLink, repoLink }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <div
        className="w-full h-[280px] sm:h-[350px] md:h-[250px] xl:h-[350px] bg-cover rounded bg-center "
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <div className="pt-8">
        <h3 className="text-3xl font-medium dark:text-white">{title}</h3>
        <p className="pt-2 leading-7 text-subtext">{description}</p>
      </div>
      <div className="pt-4 space-x-4">
        {liveLink && <OutboundLink href={liveLink}>Live Project</OutboundLink>}

        {repoLink && <OutboundLink href={repoLink}>Github Repo</OutboundLink>}
      </div>
    </div>
  );
};
function OutboundLink({ children, ...props }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      className="hover:underline dark:text-white"
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
}
export default ProjectCard;
