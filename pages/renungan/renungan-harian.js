import Head from "next/head";
import { useEffect, useRef } from "react";
import Renungan from "./mengerti-maksud-tuhan/makna-salib-yesus.js";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Gantilah dengan API yang valid
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const ArtikelPage = ({ data }) => {
  const lastModifiedRef = useRef(null);

  useEffect(() => {
    if (lastModifiedRef.current) {
      lastModifiedRef.current.innerText = `Last modified: ${new Date().toLocaleDateString()}`;
    }
  }, []);

  return (
    <>
      <Renungan />
    </>
  );
};

export default ArtikelPage;
