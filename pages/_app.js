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
              src: url("../public/static/fonts/Adelia/Adelia.woff") format("woff");
              font-style: normal;
              font-weight: 200;
              font-display: swap;
            }
            @font-face {
              font-family: "OstrichSans";
              src: url("../public/static/fonts/OstrichSans/OstrichSans.woff") format("woff");
              font-style: normal;
              font-weight: 200;
              font-display: swap;
            }
            @font-face {
              font-family: "Qanelas";
              src: url("../public/static/fonts/Qanelas/Qanelas.woff") format("woff");
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
