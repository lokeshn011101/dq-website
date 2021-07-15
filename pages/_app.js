import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/navbar.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/common.css";
import "../styles/contact.css";
import "aos/dist/aos.css";

function Home({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Where dreams come alive" />
        <meta name="keywords" content="Design Quotient" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        <link
          href="https://fonts.googleapis.com/css2?family=Fuggles&display=swap"
          rel="stylesheet"
        />
        <title>Design Quotient</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default Home;
