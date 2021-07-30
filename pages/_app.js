import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/navbar.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../styles/footer.css";
import "../styles/gallery.css";
import "../styles/home.css";
import "../styles/common.css";
import "../styles/services.css";
import "../styles/formSendLoader.css";
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
        <link
          href="http://fonts.cdnfonts.com/css/ostrich-sans-2"
          rel="stylesheet"
        />
        <link href="http://fonts.cdnfonts.com/css/qanelas" rel="stylesheet" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @font-face {
            font-family: "Adelia";
            src: url("../public/fonts/Adelia/Adelia.otf");
            font-style: normal;
            font-weight: 200;
            font-display: swap;
          }
        `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <title>Design Quotient</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default Home;
