// Taken from SimeonGriggs

import slugify from 'slugify';

export type TOC = Array<{
  title: string;
  link: string;
  position: 2 | 3;
  id: string;
}>;

// https://github.com/hashicorp/next-mdx-remote/issues/53#issuecomment-725906664
export function getTableOfContents(content: string) {
  const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm');
  const headingsPositionMap = {
    h2: 2,
    h3: 3,
  } as const;
  const headings = [...content.matchAll(regexp)];

  let tableOfContents: TOC = [];

  if (headings.length) {
    tableOfContents = headings.map((heading) => {
      const headingText = heading[2].trim();
      const headingType = heading[1].trim() === '##' ? 'h2' : 'h3';
      const headingLink = slugify(headingText, { lower: true, strict: true });

      return {
        title: headingType === 'h2' ? headingText : `${headingText}`,
        link: `#${headingLink}`,
        position: headingsPositionMap[headingType],
        id: headingLink,
      };
    });
  }

  return tableOfContents;
}
