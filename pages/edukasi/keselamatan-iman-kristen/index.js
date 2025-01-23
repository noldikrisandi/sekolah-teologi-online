import { Card } from "src/component/Card/Card";

export default function Edukasi() {
  const cards = [
    {
      img: "/images/renungan-kristen.webp",
      altText: "",
      title: "Konsep Dasar Keselamatan",
      desc: "Setiap orang percaya harus mengetahui Konsep Dasar Keselamatan dalam Iman Kristen, agar tidak salah dalam memahaminya...",
      url: "/edukasi/keselamatan-iman-kristen/keselamatan-dalam-iman-kristen",
      labelBtn: "Renungan",
    },
    {
      img: "/images/renungan-rohani.webp",
      altText:
        "salib di padang rumput mejadi simbol pentingnya Menjadi Pribadi Penuh Damai",
      title: "Syarat Memperoleh Keselamatan",
      desc: "Didalam Alkitab dijelaskan bahwa untuk memperoleh keselamatan itu ada syarat dan konsekuensinya, inilah yang harus kita pahami, sehingga...",
      url: "/edukasi/keselamatan-iman-kristen/hukum-kasih-kepada-tuhan",
      labelBtn: "Renungan",
    },
    {
      img: "/images/diberkati-tuhan.webp",
      altText: "seseorang yang mendapatkan berkat kesejahteraan dari Tuhan",
      title: "Kenapa Yesus harus Mati?",
      desc: "Sebagian orang yang belum memahami konsep keselamatan dalam Kekristenan akan bertanya, kenapa sampai Yesus harus mati di kayu salib?...",
      url: "/edukasi/keselamatan-iman-kristen/selalu-hidup-dalam-kesejahteraan",
      labelBtn: "Renungan",
    },
    {
      img: "/images/memuliakan-tuhan-dengan-memandang-salib.webp",
      altText:
        "sekumpulan orang yang memandang salib agar dapat memberi karena kasih",
      title: "Bukan Sekadar Percaya",
      desc: "Yesus hanya menyelamatkan orang yang percaya kepada-Nya. Percaya bukan hanya sekadar mengaku, tetapi harus melakukan perintah-Nya...",
      url: "/edukasi/keselamatan-iman-kristen/memberi-karena-kasih",
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
