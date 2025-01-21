import { useEffect } from "react";

const Keamanan = () => {
  useEffect(() => {
    // Disable right-click
    const disableRightClick = (e) => e.preventDefault();

    // Disable text selection and copy
    const disableCopySelect = (e) => e.preventDefault();

    // Disable drag events
    const disableDrag = (e) => e.preventDefault();

    // Disable specific key combinations (like Ctrl+S, Ctrl+U, etc)
    const disableKeyShortcuts = (e) => {
      if (
        e.key === "PrintScreen" || // Screenshot
        (e.ctrlKey && ["u", "s", "c", "p"].includes(e.key.toLowerCase())) || // View source, Save, Copy, Print
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Inspect Element
        e.key === "F12" // DevTools
      ) {
        e.preventDefault();
        alert("Konten Dilindungi Hak Cipta!");
      }
    };

    // Disable drag on images or other elements
    const disableImageDrag = (e) => e.preventDefault();

    // Add event listeners
    document.addEventListener("contextmenu", disableRightClick); // Right click
    document.addEventListener("selectstart", disableCopySelect); // Disable text selection
    document.addEventListener("copy", disableCopySelect); // Disable text copying
    document.addEventListener("dragstart", disableDrag); // Disable drag
    document.addEventListener("keydown", disableKeyShortcuts); // Disable keyboard shortcuts
    document.addEventListener("dragstart", disableImageDrag); // Disable image dragging

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("selectstart", disableCopySelect);
      document.removeEventListener("copy", disableCopySelect);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("keydown", disableKeyShortcuts);
      document.removeEventListener("dragstart", disableImageDrag);
    };
  }, []);

  return null; // Tidak menampilkan apa-apa
};

export default Keamanan;
