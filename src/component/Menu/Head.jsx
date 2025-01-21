import Head from "next/head";
export default function HeadPages() {
  return (
    <>
      <Head>
        <title>Sekolah Teologi Online</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Deskripsi default untuk website ini."
        />
        <meta name="keywords" content="default, meta, next.js, SEO" />
        <meta name="author" content="Noldi krisandi" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        {/* Prevent caching */}
        <meta
          httpEquiv="Cache-Control"
          content="no-store, no-cache, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        {/* Prevent indexing */}
        <meta name="robots" content="noindex, nofollow" />
        {/* Disable autocomplete in forms */}
        <meta name="autocomplete" content="off" />
      </Head>
    </>
  );
}
