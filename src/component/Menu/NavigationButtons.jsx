export default function NavigationButtons({
  onBack,
  onNext,
  backText = "Back",
  nextText = "Next",
}) {
  return (
    <div className="flex justify-between items-center mt-10 p-4 bg-gray-100">
      {/* Tombol Back */}
      {onBack && (
        <button
          onClick={onBack}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          {backText}
        </button>
      )}

      {/* Tombol Next */}
      {onNext && (
        <button
          onClick={onNext}
          className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          {nextText}
        </button>
      )}
    </div>
  );
}
