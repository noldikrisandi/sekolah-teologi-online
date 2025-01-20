import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Edukasi() {
  return (
    <>
      <Head>
        <title>Dokma (Doktrin-Doktrin Utama) Kristen</title>
      </Head>
      <header>
        <div>
          <h1 className="text-xl py-4 md:text-2xl font-semibold mt-5">
            Dokma (Doktrin-Doktrin Utama) Kristen
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
          <h2 className="text-2xl font-semibold mt-5">Pengertian Dogma</h2>
          <p>
            <strong>Dogma</strong> adalah ajaran, keyakinan, atau doktrin yang
            dianggap sebagai kebenaran mutlak dan tidak dapat diganggu gugat.
            Dogma biasanya ditetapkan oleh otoritas tertentu, seperti lembaga
            agama, pemimpin, atau organisasi, dan diterima oleh pengikut tanpa
            dipertanyakan. Dogma sering ditemukan dalam berbagai konteks,
            termasuk agama, filsafat, dan ideologi.
          </p>
          <p>
            Secara etimologis, kata dogma berasal dari bahasa Yunani Kuno{" "}
            <b>δόγμα</b> (dogma), yang berarti pendapat, keputusan, atau
            doktrin. Kata ini berasal dari akar kata <b>δοκέω</b> (dokeō), yang
            berarti saya berpikir, saya percaya, atau saya berpendapat. Dalam
            bahasa Latin, kata ini diadopsi dengan makna yang serupa dan
            kemudian berkembang menjadi istilah yang dikenal dalam berbagai
            bahasa modern.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mt-5">Ciri-ciri Dogma</h2>
          <ol className="list-decimal pl-5">
            <li>
              <b>Bersifat Absolut:</b> Dogma dianggap sebagai kebenaran mutlak
              yang tidak dapat dibantah atau diragukan.
            </li>
            <li>
              <b>Ditetapkan oleh Otoritas:</b> Dogma biasanya berasal dari
              tokoh, lembaga, atau organisasi yang memiliki pengaruh besar.
            </li>
            <li>
              <b>Sulit Berubah:</b> Dogma bersifat statis dan cenderung tetap
              meskipun terjadi perubahan dalam zaman atau konteks sosial.
            </li>
            <li>
              <b>Tidak Dapat Dikritik:</b> Pengikut diharapkan menerima dogma
              tanpa analisis kritis atau pertanyaan lebih lanjut.
            </li>
          </ol>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mt-5">Dogma Iman Kristen</h2>
          <p>
            Dalam kekristenan, dogma merujuk pada ajaran resmi gereja yang
            dianggap sebagai kebenaran mutlak dan tidak dapat diganggu gugat.
            Dogma ini mencakup inti dari keyakinan iman Kristen yang diajarkan
            oleh Gereja berdasarkan Kitab Suci dan tradisi gerejawi.
          </p>
          <p>
            Dogma iman Kristen berfungsi sebagai fondasi utama yang mengatur
            ajaran, ibadah, dan kehidupan umat Kristen. Melalui dogma, gereja
            memberikan panduan yang jelas bagi para pengikutnya untuk memahami
            dan menjalankan iman dengan benar.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mt-5">
            Karakteristik Dogma Iman Kristen
          </h2>
          <ol className="list-decimal pl-5">
            <li>
              <b>Berdasarkan Wahyu Ilahi:</b> Dogma bersumber dari wahyu Allah
              yang terdapat dalam Kitab Suci dan tradisi suci, menjadi landasan
              utama ajaran iman.
            </li>
            <li>
              <b>Ditetapkan oleh Gereja:</b> Dogma dirumuskan melalui konsili
              gereja atau otoritas kepausan, terutama dalam tradisi Katolik, dan
              diterima sebagai ajaran universal bagi seluruh umat Kristen.
            </li>
            <li>
              <b>Bersifat Kekal:</b> Meskipun pemahaman teologi dapat
              berkembang, dogma tetap tidak berubah karena bersifat kekal dan
              abadi.
            </li>
            <li>
              <b>Mengikat Umat Beriman:</b> Umat Kristen diharapkan menerima
              dogma ini dengan iman yang tulus, tanpa keraguan atau penolakan,
              sebagai wujud ketaatan kepada Allah.
            </li>
          </ol>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mt-5">
            Dogma Utama Iman Kristen
          </h2>
          <ol className="list-decimal pl-5">
            <li>
              <h3 className="font-semibold">Dogma tentang Allah Tritunggal</h3>
              Allah adalah satu dalam esensi, tetapi terdiri dari tiga pribadi:
              Bapa, Putra, dan Roh Kudus. Ketiganya setara dalam kemuliaan dan
              kekuasaan.{" "}
              <Link
                href="dogma-allah-tritunggal"
                className="text-blue-700 underline underline-offset-2"
              >
                Penjelasan lengkap mengenai Dogma tentang Allah Tritunggal klik
                link ini.
              </Link>
            </li>
            <li>
              <h3 className="font-semibold">Dogma tentang Inkarnasi</h3>
              Yesus Kristus, Putra Allah, menjadi manusia untuk menyelamatkan
              umat manusia. Dia sepenuhnya Allah dan sepenuhnya manusia.{" "}
              <Link
                href="dogma-inkarnasi-kristen"
                className="text-blue-700 underline underline-offset-2"
              >
                Penjelasan lengkap mengenai Dogma tentang Inkarnasi klik link
                ini.
              </Link>
            </li>
            <li>
              <h3 className="font-semibold">Dogma tentang Keselamatan</h3>
              Keselamatan diberikan oleh kasih karunia Allah melalui iman kepada
              Yesus Kristus. Manusia tidak dapat menyelamatkan dirinya sendiri,
              tetapi hanya melalui karya penebusan Kristus.{" "}
              <Link
                href="dogma-keselamatan-kristen"
                className="text-blue-700 underline underline-offset-2"
              >
                Penjelasan lengkap mengenai Dogma tentang Keselamatan klik link
                ini.
              </Link>
            </li>
            <li>
              <h3 className="font-semibold">Dogma tentang Kebangkitan</h3>
              Yesus Kristus bangkit dari antara orang mati pada hari ketiga
              setelah kematian-Nya, menjamin kebangkitan bagi semua orang
              percaya.{" "}
              <Link
                href="dogma-kebangkitan-yesus"
                className="text-blue-700 underline underline-offset-2"
              >
                Penjelasan lengkap mengenai Dogma tentang Kebangkitan klik link
                ini.
              </Link>
            </li>
            <li>
              <h3 className="font-semibold">Dogma tentang Gereja</h3>
              Gereja adalah tubuh Kristus yang satu, kudus, katolik (universal),
              dan apostolik. Dipimpin oleh Roh Kudus, Gereja bertugas
              menyebarkan Injil kepada seluruh bangsa.{" "}
              <Link
                href="dogma-gereja-kristen"
                className="text-blue-700 underline underline-offset-2"
              >
                Penjelasan lengkap mengenai Dogma tentang Gereja klik link ini.
              </Link>
            </li>
            <li>
              <h3 className="font-semibold">Dogma tentang Maria</h3> (khusus
              dalam Gereja Katolik)
              <ul className="list-disc pl-5">
                <li>
                  Maria adalah &quot;Bunda Allah&quot; (Theotokos), yang
                  melahirkan Yesus Kristus, Putra Allah.
                </li>
                <li>
                  Dogma tentang Maria yang dikandung tanpa noda dosa (Immaculate
                  Conception).
                </li>
                <li>
                  Dogma tentang Maria diangkat ke surga secara utuh (Tubuh dan
                  Jiwa).
                </li>
              </ul>
            </li>
          </ol>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mt-5">
            Fungsi Dogma dalam Kekristenan
          </h2>
          <ol className="list-decimal pl-5">
            <li>
              <h3 className="font-semibold">Membimbing Iman</h3>
              Dogma memberikan kerangka ajaran yang jelas, sehingga umat dapat
              memahami dan mendalami iman mereka dengan benar sesuai ajaran
              Gereja.
            </li>
            <li>
              <h3 className="font-semibold">Menjaga Kesatuan Gereja</h3>
              Dogma berfungsi sebagai penghubung yang menyatukan umat beriman di
              seluruh dunia, meskipun terdapat perbedaan budaya dan tradisi.
            </li>
            <li>
              <h3 className="font-semibold">Meneguhkan Identitas</h3>
              Dogma membantu membedakan ajaran Kristen dari ajaran agama atau
              kepercayaan lainnya, menegaskan identitas unik Kekristenan.
            </li>
          </ol>
        </article>
      </section>
    </>
  );
}
