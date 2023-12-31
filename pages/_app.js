import Head from 'next/head';
import Layout from '@/components/layouts/layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>Next Events</title>
                <meta name="description" content="" />
                <meta name="viewport" content="inintial-scale=1.0,width=device-width" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}
