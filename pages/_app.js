import Head from "next/head";
import "../styles/globals.css";
import Header from "../src/component/Menu/Header";
import Sidebar from "../src/component/Menu/Sidebar";
import Footer from "../src/component/Menu/Footer";
import HeadPages from "../src/component/Menu/Head";
// import Breadcrumb from "../src/component/Breadcrumb/Breadcrumb";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadPages />
      <div className="relative">
        <Sidebar />
        <div className="relative top-24 lg:top-3 lg:w-3/5 lg:left-1/4">
          <main className="px-4 md:px-12 xl:border-l-4 text-lg">
            {/* Render Halaman */}
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
