import { Card } from "src/component/Card/Card";

export default function Kasih() {
  const cards = [
    {
      img: "../images/produktif.webp",
      altText: "Pentingnya Mengasihi Diri Sendiri",
      title: "Pentingnya Mengasihi Diri Sendiri",
      desc: "Ketika kita berhasil mengasihi diri sendiri maka kita akan berhasil mengasihi sesama manusia dan selalu hidup dalam damai.",
      url: "kasih-damai-sejahtera/pentingnya-mengasihi-diri",
      labelBtn: "Renungan",
    },
    {
      img: "../images/produktif.webp",
      altText: "Gambar 2",
      title: "Kasih Tuhan dalam Hidupku",
      desc: "Pentingnya mengetahui bagaimana kasih Tuhan mengalir dalam hidup manusia, sehingga kasih Tuhan terpancar dalam kehidupan kita.",
      url: "/kasih-damai-sejahtera/kasih-tuhan-dalam-hidupku",
      labelBtn: "Renungan",
    },
    {
      img: "../images/produktif.webp",
      altText: "Gambar 3",
      title: "Menjadi Pribadi Penuh Damai",
      desc: "Semua orang mencari kedamain, tetapi hanya sedikit yang mau menjadi sumber damai. Mari menjadi pribadi yang membawa kedamaian.",
      url: "/kasih-damai-sejahtera/menjadi-pribadi-penuh-damai",
      labelBtn: "Renungan",
    },
    {
      img: "../images/produktif.webp",
      altText: "Gambar 4",
      title: "Selalu Hidup dalam Kesejahteraan",
      desc: "Siapa sih yang tidak ingin hidup sejahtera, mari belajar dari Firman Tuhan bagaimana cara untuk selalu hidup dalam kesejahteraan.",
      url: "/kasih-damai-sejahtera/selalu-hidup-dalam-kesejahteraan",
      labelBtn: "Renungan",
    },
    {
      img: "../images/produktif.webp",
      altText: "Gambar 3",
      title: "Memberi karena Kasih",
      desc: "Memberi karena kasih bukan karena gengsi atau untuk investasi, memberi untuk kemuliaan Tuhan bukan untuk dimuliakan Tuhan.",
      url: "/kasih-damai-sejahtera/memberi-karena-kasih",
      labelBtn: "Renungan",
    },
    {
      img: "../images/produktif.webp",
      altText: "Gambar 3",
      title: "Kasih Yesus Mengubah Hidupku",
      desc: "Setiap orang yang mengalami dan mengerti akan kasih Yesus, maka hidupnya akan berubah menjadi pribadi kasih.",
      url: "/kasih-damai-sejahtera/kasih-yesus-mengubah-hidupku",
      labelBtn: "Renungan",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Kasih dan Damai Sejahtera</h1>
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
