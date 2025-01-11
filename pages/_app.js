import Head from "next/head";
import "../styles/globals.css";
import Header from "../src/component/Menu/Header";
import Sidebar from "../src/component/Menu/Sidebar";
// import Breadcrumb from "../src/component/Breadcrumb/Breadcrumb";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Artikel Rohani</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Deskripsi default untuk website ini."
        />
        <meta name="keywords" content="default, meta, next.js, SEO" />
        <meta name="author" content="Noldi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Sidebar />
        <div className="relative top-24 lg:top-3 lg:w-3/5 lg:left-1/4">
          <main className="px-4 md:px-12 xl:border-l-4 text-lg">
            {/* Render Halaman */}
            <Component {...pageProps} />
          </main>
          <footer>
            <p>@noldi krisandi</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default MyApp;
