import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import "@/lib/amplify";
import Layout from '@/components/layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
