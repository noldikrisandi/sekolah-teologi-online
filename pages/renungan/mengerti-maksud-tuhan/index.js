import { Card } from "src/component/Card/Card";

export default function renungan() {
  const cards = [
    {
      img: "../images/produktif.webp",
      altText: "Gambar 1",
      title: "Makna Salib Yesus bagi Manusia",
      desc: "mengerti makna salib Yesus dalam kehidupan sehari-hari, sehingga hidup kita selalu berkenan di hadapan Tuhan dan menjadi berkat.",
      url: "mengerti-maksud-tuhan/makna-salib-yesus",
      labelBtn: "Renungan",
    },
    {
      img: "../images/produktif.webp",
      altText: "Gambar 2",
      title: "Tujuan Manusia Diciptakan",
      desc: "Mengerti tujuan Tuhan menciptakan manusia, sehingga hidup kita sesuai dengan rancangan Tuhan yang penuh Damai Sejahtera.",
      url: "mengerti-maksud-tuhan/tujuan-manusia-diciptakan",
      labelBtn: "Renungan",
    },
    {
      img: "../images/produktif.webp",
      altText: "Gambar 3",
      title: "Maksud Tuhan dalam Kesesakan",
      desc: "Intropeksi diri apakah kesesakan yang kita alami karena rancangan Tuhan atau kesalahan kita, sehingga dapat menemukan maksud Tuhan.",
      url: "mengerti-maksud-tuhan/maksud-tuhan-dalam-kesesakan",
      labelBtn: "Renungan",
    },
    {
      img: "../images/produktif.webp",
      altText: "Gambar 4",
      title: "Berkat Sesungguhnya dari Tuhan",
      desc: "Mengerti berkat sesungguhnya yang diberikan Tuhan || Semua berkat dari Tuhan menciptakan Kedamaian dan Kesejahteraan.",
      url: "mengerti-maksud-tuhan/berkat-sesungguhnya-dari-tuhan",
      labelBtn: "Renungan",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Renungan Keluarga Kristen</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        {cards.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            altText={card.altText}
            title={card.title}
            desc={card.desc}
            url={card.url}
            labelBtn={card.labelBtn}
          />
        ))}
      </div>
    </>
  );
}
