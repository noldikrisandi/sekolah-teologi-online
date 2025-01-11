import { Card } from "../src/component/Card/Card";

export default function Kasih() {
  const cards = [
    {
      img: "images/produktif.webp",
      altText: "Gambar 1",
      title: "Judul 1",
      desc: "Deskripsi untuk card pertama",
      url: "/link1",
      labelBtn: "Detail",
    },
    {
      img: "images/produktif.webp",
      altText: "Gambar 2",
      title: "Judul 2",
      desc: "Deskripsi untuk card kedua",
      url: "/link2",
      labelBtn: "Detail",
    },
    {
      img: "images/produktif.webp",
      altText: "Gambar 3",
      title: "Judul 3",
      desc: "Deskripsi untuk card ketiga",
      url: "/link3",
      labelBtn: "Detail",
    },
    {
      img: "images/produktif.webp",
      altText: "Gambar 4",
      title: "Judul 4",
      desc: "Deskripsi untuk card keempat",
      url: "/link2",
      labelBtn: "Detail",
    },
    {
      img: "images/produktif.webp",
      altText: "Gambar 3",
      title: "Judul 5",
      desc: "Deskripsi untuk card kelima",
      url: "/link3",
      labelBtn: "Detail",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Kumpulan Card</h1>
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
  // return (
  //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  //     <Link href="/">Home</Link> <br />
  //     <Card
  //       img="images/produktif.webp"
  //       altText="image 1"
  //       title="Ini Title"
  //       desc="Ini dalah card yang berfungsi sebagai card"
  //       labelBtn="Selengkapnya"
  //       url="/pergaulan"
  //     />
  //   </div>
  // );
}
