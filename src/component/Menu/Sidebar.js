import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-gray-900 text-gray-100 border-1 lg:bg-gray-900 lg:text-white p-4 lg:w-1/4 lg:h-screen lg:fixed lg:overflow-y-auto lg:m-0">
      {/* Logo */}
      <div className="lg:mb-8">
        <Link
          href="/"
          className="text-lg font-bold hover:text-blue-400 lg:text-xl xl:text-2xl "
        >
          Sekolah Teologi Online
        </Link>
      </div>

      {/* Navigation Menu */}
      <ul className="lg:space-y-4 flex gap-4 lg:px-3 lg:block lg:text-lg">
        {/* Renungan */}
        <li className="relative">
          <button
            onClick={() => toggleSubMenu("renungan")}
            className="w-full text-left font-semibold hover:text-blue-400"
          >
            Renungan
          </button>
          {openSubMenu === "renungan" && (
            <ul className="mt-2 bg-gray-800 rounded shadow-lg absolute p-1 w-52 lg:w-full lg:relative">
              <li>
                <Link
                  href="/renungan/renungan-harian"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Renungan Harian
                </Link>
              </li>
              <li>
                <Link
                  href="/renungan/keluarga-kristen"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Keluarga Kristen
                </Link>
              </li>
              <li>
                <Link
                  href="/renungan/mengerti-maksud-tuhan"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Mengerti Maksud Tuhan
                </Link>
              </li>
              <li>
                <Link
                  href="/renungan/kasih-damai-sejahtera"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Kasih dan Damai Sejahtera
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Edukasi */}
        <li className="relative">
          <button
            onClick={() => toggleSubMenu("edukasi")}
            className="w-full text-left font-semibold hover:text-blue-400"
          >
            Edukasi
          </button>
          {openSubMenu === "edukasi" && (
            <ul className="mt-2 bg-gray-800 rounded shadow-lg absolute p-1 w-52 lg:w-full lg:relative">
              <li>
                <Link
                  href="/edukasi/mengenal-tuhan"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Mengenal Tuhan
                </Link>
              </li>
              <li>
                <Link
                  href="/edukasi/keselamatan"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Keselamatan dalam Iman Kristen
                </Link>
              </li>
              <li>
                <Link
                  href="/edukasi/hukum-tuhan"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Hukum Tuhan
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Sejarah */}
        <li className="relative">
          <button
            onClick={() => toggleSubMenu("sejarah")}
            className="w-full text-left font-semibold hover:text-blue-400"
          >
            Sejarah
          </button>
          {openSubMenu === "sejarah" && (
            <ul className="mt-2 bg-gray-800 rounded shadow-lg absolute p-1 w-52 lg:w-full lg:relative">
              <li>
                <Link
                  href="/sejarah/bangsa-israel"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Bangsa Israel
                </Link>
              </li>
              <li>
                <Link
                  href="/sejarah/raja"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Raja-Raja
                </Link>
              </li>
              <li>
                <Link
                  href="/sejarah/nabi"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Nabi Perjanjian Lama
                </Link>
              </li>
              <li>
                <Link
                  href="/sejarah/rasul"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Rasul Perjanjian Baru
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Sekolah Minggu */}
        <li className="relative">
          <button
            onClick={() => toggleSubMenu("sekolah-minggu")}
            className="w-full text-left font-semibold hover:text-blue-400"
          >
            Sekolah Minggu
          </button>
          {openSubMenu === "sekolah-minggu" && (
            <ul className="mt-2 bg-gray-800 rounded shadow-lg absolute right-0 sm:left-0 p-1 w-52 lg:w-full lg:relative">
              <li>
                <Link
                  href="/sekolah-minggu/cerita"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Cerita Sekolah Minggu
                </Link>
              </li>
              <li>
                <Link
                  href="/sekolah-minggu/bahan-ajar"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Bahan Ajar
                </Link>
              </li>
              <li>
                <Link
                  href="/sekolah-minggu/edukasi"
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                >
                  Edukasi Untuk Guru
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
