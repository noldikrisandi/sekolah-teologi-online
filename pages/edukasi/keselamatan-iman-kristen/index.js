import { Card } from "src/component/Card/Card";

export default function Edukasi() {
  const cards = [
    {
      img: "/images/renungan-kristen.webp",
      altText: "",
      title: "Hukum Pertama Bangsa Israel",
      desc: "Banyak sekali hukum yang diberikan Tuhan kepada bangsa Israel, tetapi kesepuluh hukum adalah hukum pertama kepada bangsa Israel",
      url: "/edukasi/hukum-tuhan/hukum-pertama-kepada-israel",
      labelBtn: "Renungan",
    },
    {
      img: "/images/renungan-rohani.webp",
      altText:
        "salib di padang rumput mejadi simbol pentingnya Menjadi Pribadi Penuh Damai",
      title: "Hukum Kasih Kepada Tuhan",
      desc: "Hukum kasih kepada Tuhan menjadi hukum pertama dan terutama yang diajarkan oleh Tuhan Yesus kepada Manusia.",
      url: "/edukasi/hukum-tuhan/hukum-kasih-kepada-tuhan",
      labelBtn: "Renungan",
    },
    {
      img: "/images/diberkati-tuhan.webp",
      altText: "seseorang yang mendapatkan berkat kesejahteraan dari Tuhan",
      title: "Selalu Hidup dalam Kesejahteraan",
      desc: "Siapa sih yang tidak ingin hidup sejahtera, mari belajar dari Firman Tuhan bagaimana cara untuk selalu hidup dalam kesejahteraan.",
      url: "/edukasi/hukum-tuhan/selalu-hidup-dalam-kesejahteraan",
      labelBtn: "Renungan",
    },
    {
      img: "/images/memuliakan-tuhan-dengan-memandang-salib.webp",
      altText:
        "sekumpulan orang yang memandang salib agar dapat memberi karena kasih",
      title: "Memberi karena Kasih",
      desc: "Memberi karena kasih bukan karena gengsi atau untuk investasi, memberi untuk kemuliaan Tuhan bukan untuk dimuliakan Tuhan.",
      url: "/edukasi/hukum-tuhan/memberi-karena-kasih",
      labelBtn: "Renungan",
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
