import LinkTo from '@/components/LinkTo';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="flex items-center justify-center min-h-screen">
          <div className="px-4 mb-48 space-y-1">
            <h1 className="inline heading">Hey, I&apos;m Paolo Tiu</h1>
            <h2 className="heading main text-subtext">
              I like making cool stuff
            </h2>
            <p className="max-w-2xl pt-3 md:text-lg">
              I’m a developer specializing in building products with amazing
              performace, experiences, and usability. I would love if you could{' '}
              <LinkTo href="/gruset-book">sign my guestbook!</LinkTo>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
