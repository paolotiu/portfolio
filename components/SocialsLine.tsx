import React from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import { RiLinkedinLine } from 'react-icons/ri';
import { useIsMounted } from '@/utils/hooks/useIsMounted';

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}
const SocialLink = ({ href, icon }: SocialLinkProps) => {
  return (
    <li className="last:mb-4">
      <a
        href={href}
        className="block p-3 group "
        target="_blank"
        rel="noreferrer noopener"
      >
        {icon}
      </a>
    </li>
  );
};

const SocialsLine = () => {
  const isMounted = useIsMounted();
  return (
    <ul className="fixed bottom-0 hidden left-7 socials-line md:block">
      {isMounted && (
        <IconContext.Provider
          value={{
            size: '1.25rem',
            className:
              'group-hover:transform group-hover:-translate-y-1 transition-all group-hover:text-accent group-hover:duration-400 duration-200',
          }}
        >
          <SocialLink
            href="https://github.com/paolotiu"
            icon={<VscGithubAlt />}
          />

          <SocialLink
            href="https://linkedin.com/in/paolotiu"
            icon={<RiLinkedinLine />}
          />
        </IconContext.Provider>
      )}
    </ul>
  );
};

export default SocialsLine;
