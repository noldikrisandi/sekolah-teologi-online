import "../styles/globals.css";
import Sidebar from "../src/component/Menu/Sidebar";
import Footer from "../src/component/Menu/Footer";
import HeadPages from "../src/component/Menu/Head";
import RenunganKeluarga from "./renungan/keluarga-kristen/index";
import RenunganKasih from "./renungan/kasih-damai-sejahtera/index";
import RenunganMaksudTuhan from "./renungan/mengerti-maksud-tuhan/index";
import Keamanan from "../src/component/Menu/Keamanan";

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
          <div className="px-4 md:px-12 mt-7">
            <RenunganKasih />
            <br />
            <RenunganKeluarga />
            <br />
            <RenunganMaksudTuhan />
          </div>
          <Footer />
        </div>
      </div>
      <Keamanan />
    </>
  );
}

export default MyApp;
