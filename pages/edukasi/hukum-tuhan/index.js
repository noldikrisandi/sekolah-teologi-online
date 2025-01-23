import { Card } from "src/component/Card/Card";

export default function Edukasi() {
  const cards = [
    {
      img: "/images/renungan-kristen.webp",
      altText: "",
      title: "Hukum Pertama Bangsa Israel",
      desc: "Banyak sekali hukum yang diberikan Tuhan kepada bangsa Israel, tetapi kesepuluh hukum adalah hukum pertama kepada bangsa Israel...",
      url: "/edukasi/hukum-tuhan/hukum-pertama-kepada-israel",
      labelBtn: "Selengkapnya",
    },
    {
      img: "/images/renungan-rohani.webp",
      altText:
        "salib di padang rumput mejadi simbol pentingnya Menjadi Pribadi Penuh Damai",
      title: "Hukum Kasih Kepada Tuhan",
      desc: "Hukum kasih kepada Tuhan menjadi hukum pertama dan terutama yang diajarkan oleh Tuhan Yesus kepada Manusia...",
      url: "/edukasi/hukum-tuhan/hukum-kasih-kepada-tuhan",
      labelBtn: "Selengkapnya",
    },
    {
      img: "/images/diberkati-tuhan.webp",
      altText: "seseorang yang mendapatkan berkat kesejahteraan dari Tuhan",
      title: "Hukum Kasih Kepada Sesama",
      desc: "Tuhan Yesus mengajarkan bahwa hukum mengasihi sesama manusia, merupakan hal yang sama dengan hukum mengasihi Tuhan...",
      url: "/edukasi/hukum-tuhan/hukum-kasih-kepada-sesama-manusia",
      labelBtn: "Selengkapnya",
    },
    {
      img: "/images/diberkati-tuhan.webp",
      altText: "seseorang yang mendapatkan berkat kesejahteraan dari Tuhan",
      title: "Penjelasan Lengkap Hukum Taurat",
      desc: "Hukum Taurat merupakan peraturan yang diberikan oleh Tuhan kepada umat pilihan-Nya. Hukum Taurat terbagi menjadi 4 bagian...",
      url: "/edukasi/hukum-tuhan/hukum-taurat",
      labelBtn: "Selengkapnya",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">
        Edukasi Sekolah Teologi: Hukum Tuhan
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
