import { Card } from "src/component/Card/Card";

export default function Edukasi() {
  const cards = [
    {
      img: "/images/renungan-kristen.webp",
      altText: "",
      title: "Dogma Iman Kristen",
      desc: "Setiap orang Kristen harus mengerti Dogman Iman Kristen agar mengerti dasar Kekristenan yang diakui secara Universal...",
      url: "/edukasi/mengenal-tuhan/dogma-iman-kristen",
      labelBtn: "Selengkapnya",
    },
    {
      img: "/images/renungan-rohani.webp",
      altText:
        "salib di padang rumput mejadi simbol pentingnya Menjadi Pribadi Penuh Damai",
      title: "Dogma Allah Tritunggal",
      desc: "Allah adalah satu esensi yang dikenal dalam 3 Pribadi, yaitu Bapa, Anak, dan Roh Kudus. Konsep ini menjadi pondasi Kekristenan...",
      url: "/edukasi/mengenal-tuhan/dogma-allah-tritunggal",
      labelBtn: "Selengkapnya",
    },
    {
      img: "/images/diberkati-tuhan.webp",
      altText: "seseorang yang mendapatkan berkat kesejahteraan dari Tuhan",
      title: "Dogma Inkarnasi Tuhan Yesus",
      desc: "Yesus yang sepenuhnya Tuhan, mengambil rupa manusia dan tinggal bersama-sama manusia di bumi untuk karya keselamatan...",
      url: "/edukasi/mengenal-tuhan/dogma-inkarnasi-kristen",
      labelBtn: "Selengkapnya",
    },
    {
      img: "/images/memuliakan-tuhan-dengan-memandang-salib.webp",
      altText:
        "sekumpulan orang yang memandang salib agar dapat memberi karena kasih",
      title: "Dogma Keselamatan Iman Kristen",
      desc: "Keselamatan hanya diberikan kepada semua orang yang percaya kepada Yesus. Tentu percaya bukan hanya sekadar ucapan...",
      url: "/edukasi/mengenal-tuhan/dogma-keselamatan-kristen",
      labelBtn: "Selengkapnya",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">
        Renungan Kasih dan Damai Sejahtera
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
