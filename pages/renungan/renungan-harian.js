import Head from "next/head";
import { useEffect, useRef } from "react";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Gantilah dengan API yang valid
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const ArtikelPage = ({ data }) => {
  const lastModifiedRef = useRef(null);

  useEffect(() => {
    if (lastModifiedRef.current) {
      lastModifiedRef.current.innerText = `Last modified: ${new Date().toLocaleDateString()}`;
    }
  }, []);

  return (
    <>
      <Head>
        <title>Pergaulan</title>
      </Head>

      <p className="text-lg font-medium leading-6">
        Shalom... <br />
        Kiranya Damai Sejahtera dari Tuhan Yesus melingkupi kehidupan kita
        semua.
      </p>
      <p>
        Pembahasan saat ini sangat menarik, kita akan membahas mengenai manusia
        sebagai gambar dan rupa Allah, apa sih spesialnya manusia dan kenapa
        Tuhan menciptakan manusia. Kita akan bahas secara ringan dulu ya, untuk
        penjelasan lebih beratnya nanti kamu bisa dapatkan linknya di bawah.
      </p>
      <p>
        Pada awal penciptaan Tuhan Allah membuat semua hal yang dibutuhkan oleh
        manusia, kemudian pada hari yang ke-enam Tuhan menjadikan manusia.
        Manusia diciptakan Tuhan secara spesial, karena benda-benda lain
        diciptakan oleh Tuhan dengan berfirman atau berkata, sedangkan manusia
        diciptakan Tuhan dengan membentuk manusia dari tanah liat, dan dibuat
        sesuai gambar dan rupa Tuhan Allah sendiri. Jadi jika kamu pernah
        berfikir bahwa kamu jelek, secara tidak langsung kamu juga menghina
        Tuhan Allah, karena kamu diciptakan sesuai gambar dan rupa Allah
        (Kejadian 1:26-28).
      </p>
      <h2 className="text-xl font-semibold mt-4">
        Kamu adalah gambar dan rupa Allah
      </h2>
      <p>
        Pernah tidak kamu berfikir bagaimana Tuhan menciptakan kita, terus apa
        sih tujuan Tuhan menciptakan kita sesuai gambar dan rupa-Nya? Betapa
        spesialnya manusia sampai Tuhan Yesus sendiri datang untuk menyelamatkan
        kita?.
      </p>
      <p>
        Manusia diciptakan Tuhan dengan akal, pikiran, dan perasaan selayaknya
        dengan Tuhan Allah sendiri. Jika kamu merasa sakit hati ketika diduakan,
        maka Tuhan Allah juga merasa demikian saat kamu menduakan Tuhan. gambar
        dan rupa Allah.
      </p>
      <p>
        Ingat kamu adalah gambar dan rupa Allah yang berharga dimana Tuhan
        Allah, tidak peduli dunia mengganggap kamu hina tapi Tuhan tetap
        memandang kamu berharga karna kamu adalah gambar dan rupa Allah. Gimana
        udah sadar belum jika kamu adalah gambar dan rupa Allah?
      </p>
      <h2 className="text-xl font-semibold mt-4">
        Orang disekitar kamu adalah gambar dan rupa Allah
      </h2>
      <p>
        Pernah kah kamu dengan sengaja atau tidak menghina orang lain? Kamu tahu
        tidak sebernarnya jika kamu menghina orang lain maka artinya kamu
        menghina penciptaNya, apalagi dia diciptakan berdasarkan gambar dan rupa
        penciptaNya, tentu spesial bukan. Pernahkah kamu membuat sebuah karya,
        kemudian karyamu itu dihina oleh orang lain? Jika pernah maka kamu akan
        sakit hati, begitu juga dengan Tuhan Allah, ketika kamu menghina
        ciptaanNya. Sifat Allah juga melakat pada setiap manusia.
      </p>
      <p>
        Yang perlu kamu sadari saat ini adalah bahwa setiap orang yang ada di
        dunia ini adalah gambar dan rupa Allah, dan semua yang ada di sekitarmu
        adalah ciptaan Tuhan, jadi jangan dihina ya.
      </p>
      <h2 className="text-xl font-semibold mt-4">
        Gambar dan rupa Allah pada manusia dirusak iblis
      </h2>
      <p>
        Sejatinya manusia itu tidak suka orang jahat kepadanya, tentu kamu juga
        manusia kan! Ini adagam gambar dan rupa Allah yang benar bahwa setiap
        manusia suka mengasihi dan dikasihi, contohnya saja, kamu pasti sangat
        senang ketika kamu dikasihi atau disayangi oleh orang lain, dan
        diperlakukan dengan baik. Orang yang kamu kasihi pasti kamu perlakukan
        dengan baik, inilah gambar dan rupa Allah sesungguhnya.
      </p>
      <p>
        Iblis merusak gambar dan rupa Allah pada manusia dengan membuat manusia
        melakukan hal yang jahat. Kebenarannya adalah manusia tidak suka
        perbuatan yang jahat, kita sepakat tentang hal ini, terus kenapa sih
        manusia terkadang melakukan hal yang jahat? Itu karena ulah si jahat
        yaitu iblis.
      </p>
      <p>
        Untuk pembahasan gambar dan rupa Allah yang dirusak oleh iblis kamu bisa
        membacanya dengan menekan tombol dibawah ini
      </p>
      <button type="button" className="btn btn-danger mb-4">
        Iblis merusak gambar dan rupa Allah pada manusia
      </button>
      <p>
        Kita tahu sekarang jika kita melakukan hal jahat itu karna kita ditipu
        oleh sih jahat, jangan mau ditipu lagi sama si jahat karna kita ini
        adalah gambar dan rupa Allah yang sejati.
      </p>
      <p>
        Perkataan Tuhan Yesus pada Yohanes 8 ayat 37 - 47 menjelaskan bahwa ada
        manusia yang menjadikan iblis sebagai bapanya, karena lebih menuruti
        keinginan iblis daripada keinginan Tuhan (Yohanes 8 : 44). Begitulah
        cara iblis merusak gambar dan rupa Allah pada manusia yaitu dengan
        membuat manusia lebih menuruti keinginannya daripada keinginan Tuhan,
        jangan sampai kita jadi anak-anak iblis dengan melakukan keinginannya.
      </p>
      <p>
        Harusnya sampai disini kamu sudah paham tentang manusia sebagai gambar
        dan rupa Allah, serta bagaimana gambar dan rupa Allah pada manusia
        dirusak oleh iblis. Untuk pembahasan detail mengenai kamu bisa klik
        tombol diatas tadi. Sekarang apa sih tujuan Tuhan Allah menciptakan
        manusia sesuai gambar dan rupaNya? Kamu bisa dapatkan penjelasan
        lengkapnya melalui tombol dibawah ini, karena jika dijelaskan di sini
        maka akan terlalu panjang.
      </p>
      <p>
        Sejatinya manusia diciptakan sesuai gambar dan rupa Allah, ini yang
        membuat manusia juga memiliki sifat seperti Tuhan Allah yang menyukai
        kebaikan dan kasih, tetapi kemudian iblis berusaha merusak gambar dan
        rupa Allah pada manusia sehingga terkadang manusia melakukan apa yang
        jahat di mata Tuhan.
      </p>
      <p>
        Jadilah gambar dan rupa Allah sejati dengan melakukan kebaikan dan
        kasih, jangan mau menjadi anak-anak iblis dengan menuruti keinginannya.
      </p>
      <p>
        Gimana sobat, sudah paham kan. Kamu bisa mendapatkan banyak artikel
        rohani lainnya dengan mengunjungi artikel rohani lainnnya di website
        ini, caranya sangat mudah hanya dengan mengklik tombol dibawah ini.
        Tuhan Yesus Memberkati.
      </p>
    </>
  );
};

export default ArtikelPage;
