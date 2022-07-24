import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

const meta = {
  description: 'Fullstack Developer creating beautiful experiences.',
  title: 'Paolo Tiu | Developer & Creator',
  image: '/banner.png',
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <DefaultSeo
            title={meta.title}
            description={meta.description}
            openGraph={{
              type: 'website',
              description: meta.description,
              title: meta.title,
              site_name: 'Paolo Tiu',
              images: [{ url: `https://paolotiu.com${meta.image}` }],
            }}
            canonical={`https://paolotiu.com${router.asPath}`}
            twitter={{
              handle: '@PaoloTiu_',
              site: '@PaoloTiu_',
              cardType: 'summary_large_image',
            }}
          />

          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
export default MyApp;
