import '@/styles/globals.css';
import PlausibleProvider from 'next-plausible';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <PlausibleProvider
      domain="paolotiu.com"
      customDomain="https://plausible.paolotiu.com"
      selfHosted
      enabled
    >
      <ThemeProvider attribute="class">
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </PlausibleProvider>
  );
}
export default MyApp;
