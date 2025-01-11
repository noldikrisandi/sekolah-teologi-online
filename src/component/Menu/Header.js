import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  // State untuk setiap submenu
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 w-full lg:p-0 lg:m-0 lg:w-1/4 lg:h-lvh lg:fixed">
      {/* Logo */}
      <Link
        href="/"
        className="font-bold text-lg lg:text-xl lg:float-right lg:mr-5 lg:w-4/5"
      >
        Sekolah Teologi Online
      </Link>

      {/* Navigation Menu */}
      <ul className="flex gap-3 px-3 lg:block  lg:w-4/5 lg:mr-5 lg:float-right lg:mt-4 lg:border-2 lg:border-gray-300 lg:border-1 lg:border-gray-950 py-8 px-4 lg:rounded">
        {/* Renungan */}
        <li className="relative">
          <button
            onClick={() => toggleSubMenu("renungan")}
            className="cursor-pointer hover:text-blue-400 transition lg:font-bold"
          >
            Renungan
          </button>
          {openSubMenu === "renungan" && (
            <ul className="absolute left-0 mt-2 bg-gray-800 text-sm rounded shadow-lg p-2 w-48 space-y-2 ">
              <li>
                <Link
                  href="/renungan/renungan-harian"
                  className="block hover:text-blue-400"
                >
                  Renungan Harian
                </Link>
              </li>
              <li>
                <Link
                  href="/renungan/keluarga-kristen"
                  className="block hover:text-blue-400"
                >
                  Keluarga Kristen
                </Link>
              </li>
              <li>
                <Link
                  href="/renungan/mengerti-maksud-tuhan"
                  className="block hover:text-blue-400"
                >
                  Mengerti Maksud Tuhan
                </Link>
              </li>
              <li>
                <Link
                  href="/renungan/kasih-damai-sejahtera"
                  className="block hover:text-blue-400"
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
            className="cursor-pointer hover:text-blue-400 transition lg:font-bold"
          >
            Edukasi
          </button>
          {openSubMenu === "edukasi" && (
            <ul className="absolute left-0 mt-2 bg-gray-800 text-sm rounded shadow-lg p-2 w-48 space-y-2">
              <li>
                <Link
                  href="/edukasi/mengenal-tuhan"
                  className="block hover:text-blue-400"
                >
                  Mengenal Tuhan
                </Link>
              </li>
              <li>
                <Link
                  href="/edukasi/keselamatan"
                  className="block hover:text-blue-400"
                >
                  Keselamatan dalam Iman Kristen
                </Link>
              </li>
              <li>
                <Link
                  href="/edukasi/hukum-tuhan"
                  className="block hover:text-blue-400"
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
            className="cursor-pointer hover:text-blue-400 transition lg:font-bold"
          >
            Sejarah
          </button>
          {openSubMenu === "sejarah" && (
            <ul className="absolute left-0 mt-2 bg-gray-800 text-sm rounded shadow-lg p-2 w-48 space-y-2">
              <li>
                <Link
                  href="/sejarah/bangsa-israel"
                  className="block hover:text-blue-400"
                >
                  Bangsa Israel
                </Link>
              </li>
              <li>
                <Link
                  href="/sejarah/raja"
                  className="block hover:text-blue-400"
                >
                  Raja-Raja
                </Link>
              </li>
              <li>
                <Link
                  href="/sejarah/nabi"
                  className="block hover:text-blue-400"
                >
                  Nabi Perjanjian Lama
                </Link>
              </li>
              <li>
                <Link
                  href="/sejarah/rasul"
                  className="block hover:text-blue-400"
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
            className="cursor-pointer hover:text-blue-400 transition lg:font-bold"
          >
            S. Minggu
          </button>
          {openSubMenu === "sekolah-minggu" && (
            <ul className="absolute right-0 md:left-0 mt-2 bg-gray-800 text-sm rounded shadow-lg p-2 w-48 space-y-2">
              <li>
                <Link
                  href="/sekolah-minggu/cerita"
                  className="block hover:text-blue-400"
                >
                  Cerita Sekolah Minggu
                </Link>
              </li>
              <li>
                <Link
                  href="/sekolah-minggu/bahan-ajar"
                  className="block hover:text-blue-400"
                >
                  Bahan Ajar
                </Link>
              </li>
              <li>
                <Link
                  href="/sekolah-minggu/edukasi"
                  className="block hover:text-blue-400"
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
