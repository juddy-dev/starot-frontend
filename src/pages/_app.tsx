import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import "@/lib/amplify";
import Layout from '@/components/layout/Layout';
import { AuthProvider } from '@/context/AuthContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
