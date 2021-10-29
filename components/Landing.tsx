import React, { useEffect, useState } from 'react';
import { RoughNotationGroup, RoughNotation } from 'react-rough-notation';
import { HIGHLIGHT_COLORS } from '@/lib/constants';
import { useIsFontReady } from '@/lib/hooks/useIsFontReady';
import { shuffleArray } from '@/lib/shuffleArray';
import Button from './Button';
// import LinkTo from './LinkTo';

const Landing = () => {
  const isFontReady = useIsFontReady();
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(shuffleArray(HIGHLIGHT_COLORS));
  }, []);
  return (
    <section className="flex items-center justify-center min-h-screen">
      <RoughNotationGroup show={isFontReady}>
        <div className="mb-48 space-y-3">
          <h1 className="heading dark:text-white">
            Hey, I&apos;m{' '}
            <span className="whitespace-nowrap">
              <RoughNotation
                type="underline"
                padding={[0, 1, -8, 1]}
                strokeWidth={2}
                color={colors[0]}
                animationDuration={800}
              >
                Paolo Tiu
              </RoughNotation>
            </span>
          </h1>
          <h2 className="heading main text-subtext">I like making cool stuff</h2>

          <p className="max-w-2xl pt-3 md:text-lg dark:text-white">
            I’m a developer specializing in building products with amazing performance, experiences,
            and usability.
            {/*  I would love if you could{' '}
            <LinkTo href="/gruset-book">sign my guestbook!</LinkTo> */}
          </p>
          <div>
            <a href="mailto:me@paolotiu.com">
              <Button className="mt-5"> Contact Me</Button>
            </a>
          </div>
        </div>
      </RoughNotationGroup>
    </section>
  );
};

export default Landing;
