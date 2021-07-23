import Button from '@/components/Button';
import LinkTo from '@/components/LinkTo';
import Navbar from '@/components/Navbar';
import { RainbowHighlight } from '@/components/RainbowHighlight';
import SocialsLine from '@/components/SocialsLine';
import { HIGHLIGHT_COLORS } from '@/utils/constants';
import { useIsFontReady } from '@/utils/hooks/useIsFontReady';
import { shuffleArray } from '@/utils/shuffleArray';
import React, { useEffect, useState } from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

export default function Home() {
  const isFontReady = useIsFontReady();
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(shuffleArray(HIGHLIGHT_COLORS));
  }, []);
  return (
    <div>
      <Navbar />

      <main>
        <section className="flex items-center justify-center min-h-screen">
          <RoughNotationGroup show={isFontReady}>
            <div className="px-4 space-y-3 mb-28">
              <h1 className="heading">
                Hey, I&apos;m{' '}
                <RoughNotation
                  type="underline"
                  padding={[0, 0, -8, 0]}
                  color={colors[0]}
                  animationDuration={800}
                  strokeWidth={2}
                >
                  Paolo Tiu
                </RoughNotation>
              </h1>
              <h2 className="heading main text-subtext">
                I like making cool stuff
              </h2>

              <p className="max-w-2xl pt-3 md:text-lg">
                I’m a developer specializing in building products with amazing{' '}
                <RainbowHighlight color={colors[1]}>
                  performace
                </RainbowHighlight>
                ,{' '}
                <RainbowHighlight color={colors[2]}>
                  experiences
                </RainbowHighlight>
                , and{' '}
                <RainbowHighlight color={colors[3]}>usability</RainbowHighlight>
                . I would love if you could{' '}
                <LinkTo href="/gruset-book">sign my guestbook!</LinkTo>
              </p>
              <div>
                <Button className="mt-5"> Contact Me</Button>
              </div>
            </div>
          </RoughNotationGroup>
        </section>
      </main>
      <SocialsLine />
    </div>
  );
}
