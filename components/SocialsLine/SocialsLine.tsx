import React, { useEffect, useRef } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import clsx from "clsx";
import { useIsMounted } from "@/lib/hooks/useIsMounted";
import { getElementHeightInView } from "@/lib/getElementHeightInView";
import styles from "./SocialsLine.module.css";

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}
const SocialLink = ({ href, icon }: SocialLinkProps) => {
  return (
    <li className="last:mb-4">
      <a href={href} className="block p-3 group " target="_blank" rel="noreferrer noopener">
        {icon}
      </a>
    </li>
  );
};

const SocialsLine = () => {
  const isMounted = useIsMounted();
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const footer = document.querySelector("#footer") as HTMLDivElement;
    const socials = ref.current;
    const handleScroll = () => {
      if (!socials) return;

      const footerHeightInView = getElementHeightInView(footer);

      if (footerHeightInView > 0) {
        socials.style.bottom = footerHeightInView + "px";
      } else {
        socials.style.bottom = 0 + "px";
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul
      className={clsx(
        "fixed bottom-0 hidden left-7 lg:block after:bg-black dark:after:bg-white",
        styles["socials-line"]
      )}
      ref={ref}
    >
      {isMounted && (
        <IconContext.Provider
          value={{
            size: "1.25rem",
            className:
              "group-hover:transform group-hover:-translate-y-1 group-hover:text-accent group-hover:duration-400 duration-[.1s] dark:text-white",
          }}
        >
          <SocialLink href="https://github.com/paolotiu" icon={<VscGithubAlt />} />

          <SocialLink href="https://linkedin.com/in/paolotiu" icon={<RiLinkedinLine />} />
          <SocialLink href="https://twitter.com/PaoloTiu_" icon={<RiTwitterLine />} />
        </IconContext.Provider>
      )}
    </ul>
  );
};

export default SocialsLine;
