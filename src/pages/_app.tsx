import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import "@/lib/amplify";
import Layout from '@/components/layout/Layout';
import { AuthProvider } from '@/context/AuthContext';
import { LoaderProvider } from '@/context/LoaderContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoaderProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </LoaderProvider>
  );
}
