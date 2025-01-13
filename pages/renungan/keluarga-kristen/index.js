import { Card } from "src/component/Card/Card";

export default function renungan() {
  const cards = [
    {
      img: "/images/produktif.webp",
      altText: "Gambar 1",
      title: "Menjadi Ayah yang Berkenan",
      desc: "Sukses menjadi ayah yang berkenan di hadapan Tuhan sehingga bisa menjadi teladan dalam keluarga yang diberkati Tuhan.",
      url: "/renungan/keluarga-kristen/ayah-yang-berkenan",
      labelBtn: "Renungan",
    },
    {
      img: "/images/produktif.webp",
      altText: "Gambar 2",
      title: "Menjadi Ibu yang Berkenan",
      desc: "Belajar menjadi ibu yang berkenan di hadapan Tuhan, karena kedamaian dalam keluarga berasal dari seorang ibu yang berkenan dihadapan Tuhan.",
      url: "/renungan/keluarga-kristen/ibu-yang-berkenan",
      labelBtn: "Renungan",
    },
    {
      img: "/images/produktif.webp",
      altText: "Gambar 3",
      title: "Menjadi Anak yang Berkenan",
      desc: "Pentingnya menjadi anak yang berkenan di hadapan Tuhan dan orang tua sehingga hidup kita penuh damai dan sejahtera.",
      url: "/renungan/keluarga-kristen/anak-yang-berkenan",
      labelBtn: "Renungan",
    },
    {
      img: "/images/produktif.webp",
      altText: "Gambar 4",
      title: "Orang Tua Sebagai Teladan",
      desc: "Orang tua harus menjadi teladan bagi anak, karena anak adalah citra dari orang tua itu sendiri | Pentingnya perkenanan Tuhan",
      url: "/renungan/keluarga-kristen/orang-tua-sebagai-teladan",
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
