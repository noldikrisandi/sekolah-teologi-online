import Head from "next/head";
import EditorSection from "src/component/Menu/EditorSection";

export default function Renungan() {
  return (
    <>
      <Head>
        <title>Berkat Sesungguhnya dari Tuhan</title>
      </Head>
      <header>
        <div>
          <h1 className="text-xl py-4 md:text-2xl font-semibold">
            Mengerti Berkat Sesungguhnya yang Berasal dari Tuhan
          </h1>
          <p className="text-md">Penulis: Noldi Krisandi</p>
          <EditorSection />
        </div>
      </header>
      <section>
        <img
          src="/images/produktif.webp"
          alt=""
          className="w-full h-44 md:h-80 object-cover rounded"
        />
        <article>on progress</article>
      </section>
    </>
  );
}
