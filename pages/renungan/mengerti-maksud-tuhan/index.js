import { Card } from "src/component/Card/Card";

export default function Kasih() {
  const cards = [
    {
      img: "../images/produktif.webp",
      altText: "Gambar 1",
      title: "Makna Salib Yesus bagi Manusia",
      desc: "mengerti makna salib Yesus dalam kehidupan sehari-hari, sehingga hidup kita selalu berkenan di hadapan Tuhan dan menjadi berkat.",
      url: "/link1",
      labelBtn: "Renungan",
    },
    {
      img: "../images/produktif.webp",
      altText: "Gambar 2",
      title: "Tujuan Manusia Diciptakan",
      desc: "Mengerti tujuan Tuhan menciptakan manusia, sehingga hidup kita sesuai dengan rancangan Tuhan yang penuh Damai Sejahtera.",
      url: "/link2",
      labelBtn: "Renungan",
    },
    {
      img: "../images/produktif.webp",
      altText: "Gambar 3",
      title: "Maksud Tuhan dalam Kesesakan",
      desc: "Intropeksi diri apakah kesesakan yang kita alami karena rancangan Tuhan atau kesalahan kita, sehingga dapat menemukan maksud Tuhan.",
      url: "/link3",
      labelBtn: "Renungan",
    },
    {
      img: "../images/produktif.webp",
      altText: "Gambar 4",
      title: "Berkat Sesungguhnya dari Tuhan",
      desc: "Mengerti berkat sesungguhnya yang diberikan Tuhan || Semua berkat dari Tuhan menciptakan Kedamaian dan Kesejahteraan.",
      url: "/link2",
      labelBtn: "Renungan",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Renungan Keluarga Kristen</h1>
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
    </>
  );
}
