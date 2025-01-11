import Head from "next/head";
import { BtnLink } from "src/component/Button/BtnLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Artikel: Belajar Next.js</title>
        <meta
          name="description"
          content="Ini meta description yang saya inputkan."
        />
        <meta property="og:title" content="Artikel: Belajar Next.js" />
        <meta
          property="og:description"
          content="Panduan belajar Next.js untuk pemula."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://example.com/belajar-nextjs" />
        <meta
          property="og:image"
          content="https://example.com/nextjs-thumbnail.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Sekolah Teologi Online
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Dapatkan Edukasi dan Renungan Rohani Terbaik di Indonesia
        </p>
        <div className="space-y-6">
          <blockquote className="italic text-xl text-gray-700">
            &quot;Sekolah Teologi Online hadir untuk memberikan Edukasi dan
            Renungan yang dapat menjadi dasar hidup orang percaya. Pengetahuan
            yang benar mengenai Ketuhanan dan Keselamatan dalam Iman Kristen
            akan membuat kita benar-benar mengerti akan kehendak Tuhan.&quot;{" "}
            <br />
            <span className="block mt-2 text-sm text-gray-500">
              - Matius 28:19-20
            </span>
          </blockquote>
          <blockquote className="italic text-xl text-gray-700">
            &quot;Banyak orang yang hidupnya hancur hanya karena tidak mengerti
            kebenaran Firman Tuhan, hidup menurut Firman Tuhan membawa kita
            menjalani kehidupan yang penuh dengan kemenangan.&quot; <br />
            <span className="block mt-2 text-sm text-gray-500">
              - Yeremia 29:11
            </span>
          </blockquote>
          <blockquote className="italic text-xl text-gray-700">
            &quot;Dapatkan Edukasi dan Renungan Rohani yang akan membuat hidupmu
            semakin serupa dengan Kristus dan selalu hidup dalam kemenangan di
            dalam Kristus Yesus.&quot; <br />
            <span className="block mt-2 text-sm text-gray-500">
              - 2 Korintus 3:17
            </span>
          </blockquote>
        </div>
        <div className="bg-blue-500 p-3 rounded text-white mt-5">
          <BtnLink url="renungan/renungan-harian" labelBtn="Renungan Harian" />
        </div>
      </div>
    </>
  );
}
