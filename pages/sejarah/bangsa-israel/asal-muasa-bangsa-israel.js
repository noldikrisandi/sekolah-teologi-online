import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Edukasi() {
  return (
    <>
      <Head>
        <title>Asal-Usul Bangsa Israel</title>
      </Head>
      <header>
        <div>
          <h1 className="text-2xl py-4 font-semibold mt-5">
            Asal-Usul Terbentuknya Bangsa Israel
          </h1>
          <p className="text-md mb-4">Penulis: Noldi Krisandi</p>
        </div>
      </header>
      <section>
        <Image
          src="/images/memuliakan-tuhan-dengan-memandang-salib.webp"
          alt="sekumpulan orang yang memandang salib agar dapat memberi karena kasih"
          className="w-full h-44 md:h-80 object-cover rounded mb-5"
          width={500}
          height={300}
        />

        <article>
          <p>
            Shalom! <br />
            Kiranya Damai Sejahtera dari Tuhan Yesus melingkupi kehidupan kita
            semua.
          </p>
          <p>
            Kali ini, kita akan mengungkap asal-usul bangsa Israel, sebuah
            bangsa yang memiliki peran penting dalam Kitab Perjanjian Lama.
          </p>
          <p>
            Yuk, mari kita pelajari lebih lanjut tentang bangsa Israel yang
            istimewa ini.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mt-5">
            Kisah Awal Bangsa Israel: Abraham, Bapak Bangsa Israel
          </h2>
          <p>
            Sejarah bangsa Israel berawal dari kisah Abraham. Dalam Kitab
            Kejadian, Abraham (dulu bernama Abram) adalah seorang pria dari kota
            Ur di Mesopotamia.
          </p>
          <p>
            Tuhan memanggil Abraham untuk meninggalkan kampung halamannya dan
            pergi ke tanah yang dijanjikan-Nya. Tuhan berjanji kepada Abraham
            untuk membuatnya menjadi bapak dari bangsa yang besar, meskipun saat
            itu dia dan istrinya, Sara, belum memiliki anak.
          </p>
          <p>
            Abraham menaati panggilan Tuhan dan pindah ke tanah Kanaan, yang
            nantinya akan menjadi Tanah Perjanjian bagi keturunan Israel.
          </p>
          <p>
            Abraham dan Sara belum memiliki anak, sedangkan usia mereka sudah
            sangat tua sehingga tidak mungkin bisa memiliki seorang anak. Tuhan
            melakukan mukjizat dengan memberikan mereka seorang anak laki-laki
            bernama Ishak.
          </p>
          <p>
            Kelahiran Ishak merupakan bukti nyata dari janji Tuhan kepada
            Abraham bahwa dia akan menjadi bapak dari bangsa yang besar,
            meskipun pada awalnya hal itu tampak mustahil.
          </p>
          <p>
            Ishak kemudian menjadi penerus janji Tuhan kepada Abraham dan
            menjadi figur penting dalam sejarah bangsa Israel. Ishak menikah
            dengan seorang wanita bernama Ribka, dari pernikahan mereka lahirlah
            dua anak kembar yaitu Esau dan Yakub.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mt-5">
            Yakub Menjadi Israel dan Cikal Bakal 12 Suku Israel
          </h2>
          <p>
            Ishak memberkati Yakub, sehingga Yakub menjadi penerus janji Tuhan
            kepada Abraham.
          </p>
          <p>
            Dalam sejarah Alkitab, kita mengenal istilah &quot;Allah Abraham,
            Ishak, dan Yakub&quot; sebagai representasi dari berkat Tuhan yang
            turun kepada keturunan Abraham diteruskan kepada Ishak dan Yakub.
          </p>
          <p>
            Yakub diberi nama baru oleh Tuhan, yaitu Israel, setelah peristiwa
            penting di mana Tuhan bertarung dengannya di sepanjang malam
            (Kejadian 32:28). Sejak saat itu, keturunan Yakub dikenal sebagai
            bangsa Israel.
          </p>
          <p>
            Yakub memiliki 12 anak laki-laki yang menjadi cikal bakal 12 suku
            Israel. Setiap suku berasal dari keturunan salah satu anak Yakub.
          </p>
        </article>
        <article>
          <h2 className="text-2xl font-semibold mt-5">
            Janji Tuhan kepada Abraham dan Keturunannya: Pemenuhan Janji kepada
            Yakub dan Bangsa Israel
          </h2>
          <p>
            Janji Tuhan kepada Abraham bahwa keturunannya akan diberkati tidak
            hanya berlaku untuk Abraham saja, tetapi juga diteruskan kepada
            anak-anaknya, terutama Yakub, yang kemudian dikenal dengan nama
            Israel.
          </p>
          <p>
            Tuhan berjanji bahwa keturunan Yakub akan menjadi bangsa yang besar
            dan kuat. Oleh karena itu, bangsa Israel dianggap sebagai penerus
            berkat Tuhan kepada Abraham.
          </p>
          <p>
            Berkat ini membuat bangsa Israel berkembang pesat, membangun
            peradaban yang kuat, dan terus bertumbuh menjadi bangsa yang
            diberkati oleh Tuhan.
          </p>
          <p>
            Keberhasilan dan kekuatan bangsa Israel dalam sejarah adalah bukti
            nyata dari pemenuhan janji Tuhan kepada Abraham, Ishak, dan Yakub.
          </p>
        </article>
        <article>
          <p>
            Inilah asal muasal bangsa Israel. Jika kamu ingin mengetahui lebih
            lanjut tentang perjalanan bangsa Israel, dari Mesir hingga menuju
            Tanah Perjanjian, klik tombol di bawah ini untuk membaca artikel
            selanjutnya!
          </p>
          <div className="w-full border-2 rounded py-3 pl-2 my-5 text-blue-600 font-medium">
            <Link href="/sejarah/bangsa-israel/perbudakan-israel-di-mesir">
              Awal mula Bangsa Israel diperbukan di Tanah Mesir
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
