import { useEffect } from "react";

const Keamanan = () => {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    const disableCopySelect = (e) => e.preventDefault();
    const disableDrag = (e) => e.preventDefault();
    const disableKeyShortcuts = (e) => {
      if (
        e.key === "PrintScreen" ||
        (e.ctrlKey && ["u", "s", "c", "p"].includes(e.key.toLowerCase())) ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        e.key === "F12"
      ) {
        e.preventDefault();
        alert("Akses ini dinonaktifkan!");
      }
    };

    // Tambahkan event listener
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("selectstart", disableCopySelect);
    document.addEventListener("copy", disableCopySelect);
    document.addEventListener("dragstart", disableDrag);
    document.addEventListener("keydown", disableKeyShortcuts);

    // Bersihkan listener saat komponen di-unmount
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("selectstart", disableCopySelect);
      document.removeEventListener("copy", disableCopySelect);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("keydown", disableKeyShortcuts);
    };
  }, []);

  return null; // Tidak perlu menampilkan apa pun
};

export default Keamanan;
