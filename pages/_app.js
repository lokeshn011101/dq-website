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

const Home = ({ Component, pageProps }) => {
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

        <style
          dangerouslySetInnerHTML={{
            __html: `    
            @font-face {
              font-family: "Adelia";
              src: url("https://firebasestorage.googleapis.com/v0/b/design-quotient.appspot.com/o/Adelia.woff?alt=media&token=8702c90e-f272-4726-8bc6-59b0b532c4fe") format("woff");
              font-style: normal;
              font-weight: 200;
              font-display: swap;
            }
            @font-face {
              font-family: "OstrichSans";
              src: url("https://firebasestorage.googleapis.com/v0/b/design-quotient.appspot.com/o/OstrichSans.woff?alt=media&token=7ecf21fa-4eab-4552-ad53-a09c27b90ad9") format("woff");
              font-style: normal;
              font-weight: 200;
              font-display: swap;
            }
            @font-face {
              font-family: "Qanelas";
              src: url("https://firebasestorage.googleapis.com/v0/b/design-quotient.appspot.com/o/Qanelas.woff?alt=media&token=c9d77c93-a3f8-4075-8a14-804e248ade19") format("woff");
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
};
export default Home;
