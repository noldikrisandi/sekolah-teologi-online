// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-10">
          <Link
            href="https://wa.me/6282346484778?text=Hallo%20saya%20memerlukan%20kunsultasi%20dan%20dukungan%20doa"
            target="blank"
            className="px-6 py-3 text-blue-800 hover:text-blue-900 rounded shadow-md"
          >
            Konsultasi dan Dukungan Doa
          </Link>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Sekolah Teologi Online</h2>
          <p className="mt-2">Edukasi Teologi dan Renungan Rohani Kristen.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="#"
            className="hover:text-blue-500 transition duration-200"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.845v-3.622h2.975V8.414c0-2.946 1.792-4.548 4.406-4.548 1.251 0 2.329.093 2.642.134v3.064l-1.812.001c-1.421 0-1.696.676-1.696 1.667v2.186h3.392l-.442 3.622h-2.95V24h5.777c.729 0 1.325-.593 1.325-1.325V1.325C24 .593 23.406 0 22.675 0z" />
            </svg>
          </Link>
          <Link
            href="/instragram/noldikrisandi"
            className="hover:text-red-500 transition duration-200"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 0c3.313 0 3.696.012 4.985.071 1.289.058 2.17.252 2.905.54a5.821 5.821 0 0 1 2.133 1.398 5.821 5.821 0 0 1 1.398 2.133c.288.735.482 1.616.54 2.905.059 1.289.071 1.672.071 4.985s-.012 3.696-.071 4.985c-.058 1.289-.252 2.17-.54 2.905a5.821 5.821 0 0 1-1.398 2.133 5.821 5.821 0 0 1-2.133 1.398c-.735.288-1.616.482-2.905.54-1.289.059-1.672.071-4.985.071s-3.696-.012-4.985-.071c-1.289-.058-2.17-.252-2.905-.54a5.821 5.821 0 0 1-2.133-1.398 5.821 5.821 0 0 1-1.398-2.133c-.288-.735-.482-1.616-.54-2.905-.059-1.289-.071-1.672-.071-4.985s.012-3.696.071-4.985c.058-1.289.252-2.17.54-2.905a5.821 5.821 0 0 1 1.398-2.133A5.821 5.821 0 0 1 4.11.61c.735-.288 1.616-.482 2.905-.54C8.304.012 8.687 0 12 0zm0 2.163c-3.26 0-3.641.012-4.92.07-.805.036-1.235.176-1.526.293-.446.172-.763.377-1.096.71-.333.333-.538.65-.71 1.096-.117.291-.257.721-.293 1.526-.058 1.28-.07 1.66-.07 4.92s.012 3.641.07 4.92c.036.805.176 1.235.293 1.526.172.446.377.763.71 1.096.333.333.65.538 1.096.71.291.117.721.257 1.526.293 1.28.058 1.66.07 4.92.07s3.641-.012 4.92-.07c.805-.036 1.235-.176 1.526-.293.446-.172.763-.377 1.096-.71.333-.333.538-.65.71-1.096.117-.291.257-.721.293-1.526.058-1.28.07-1.66.07-4.92s-.012-3.641-.07-4.92c-.036-.805-.176-1.235-.293-1.526-.172-.446-.377-.763-.71-1.096a2.33 2.33 0 0 0-1.096-.71c-.291-.117-.721-.257-1.526-.293-1.28-.058-1.66-.07-4.92-.07zm0 3.79a4.048 4.048 0 1 1 0 8.095 4.048 4.048 0 0 1 0-8.095zm0 1.945a2.103 2.103 0 1 0 0 4.205 2.103 2.103 0 0 0 0-4.205zm6.406-2.21a.974.974 0 1 1 0-1.949.974.974 0 0 1 0 1.949z" />
            </svg>
          </Link>
        </div>
        <p>Menerima jasa pembuatan website</p>
        <p>Menerima kerja sama dari berbagai pihak</p>
        <Link
          href="https://wa.me/6282346484778?text=Hallo%20saya%20tertarik%20bekerjasama%20dengan%20Sekolah%20Teologi%20Online"
          target="blank"
          className="text-blue-800"
        >
          WA: 0823-4648-4778
        </Link>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sekolah Teologi Online. Semua hak
          cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
