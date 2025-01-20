import { Card } from "src/component/Card/Card";

export default function Kasih() {
  const cards = [
    {
      img: "/images/renungan-kristen.webp",
      altText: "",
      title: "Pentingnya Mengasihi Diri Sendiri",
      desc: "Ketika kita berhasil mengasihi diri sendiri maka kita akan berhasil mengasihi sesama manusia dan selalu hidup dalam damai.",
      url: "/renungan/kasih-damai-sejahtera/pentingnya-mengasihi-diri",
      labelBtn: "Renungan",
    },
    {
      img: "/images/renungan-rohani.webp",
      altText:
        "salib di padang rumput mejadi simbol pentingnya Menjadi Pribadi Penuh Damai",
      title: "Menjadi Pribadi Penuh Damai",
      desc: "Semua orang mencari kedamain, tetapi hanya sedikit yang mau menjadi sumber damai. Mari menjadi pribadi yang membawa kedamaian.",
      url: "/renungan/kasih-damai-sejahtera/menjadi-pribadi-penuh-damai",
      labelBtn: "Renungan",
    },
    {
      img: "/images/diberkati-tuhan.webp",
      altText: "seseorang yang mendapatkan berkat kesejahteraan dari Tuhan",
      title: "Selalu Hidup dalam Kesejahteraan",
      desc: "Siapa sih yang tidak ingin hidup sejahtera, mari belajar dari Firman Tuhan bagaimana cara untuk selalu hidup dalam kesejahteraan.",
      url: "/renungan/kasih-damai-sejahtera/selalu-hidup-dalam-kesejahteraan",
      labelBtn: "Renungan",
    },
    {
      img: "/images/memuliakan-tuhan-dengan-memandang-salib.webp",
      altText:
        "sekumpulan orang yang memandang salib agar dapat memberi karena kasih",
      title: "Memberi karena Kasih",
      desc: "Memberi karena kasih bukan karena gengsi atau untuk investasi, memberi untuk kemuliaan Tuhan bukan untuk dimuliakan Tuhan.",
      url: "/renungan/kasih-damai-sejahtera/memberi-karena-kasih",
      labelBtn: "Renungan",
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
