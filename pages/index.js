import { BtnLink } from "src/component/Button/BtnLink";
// import RenunganKeluarga from "./renungan/keluarga-kristen/index";
// import RenunganKasih from "./renungan/kasih-damai-sejahtera/index";
// import RenunganMaksudTuhan from "./renungan/mengerti-maksud-tuhan/index";

export default function Home() {
  return (
    <>
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Sekolah Teologi Online
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Edukasi Teologi dan Renungan Rohani di Indonesia
        </p>
        <div className="space-y-6">
          <blockquote className="italic text-xl text-gray-700">
            &quot;Sekolah Teologi Online hadir untuk memberikan Edukasi Teologi
            dan Renungan Rohani yang dapat menjadi dasar hidup orang percaya.
            Pengetahuan yang benar mengenai Ketuhanan dan Keselamatan dalam Iman
            Kristen akan membuat kita benar-benar mengerti akan kehendak
            Tuhan.&quot;
            <br />
            <span className="block mt-2 text-sm text-gray-500">
              - Matius 28:19-20
            </span>
          </blockquote>
        </div>
        <div className="bg-blue-500 p-3 rounded text-white mt-5 mb-5">
          <BtnLink url="/renungan/renungan-harian" labelBtn="Renungan Harian" />
        </div>
      </div>
      {/* <RenunganMaksudTuhan />
      <br />
      <RenunganKeluarga />
      <br />
      <RenunganKasih /> */}
    </>
  );
}
