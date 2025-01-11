import React, { useEffect, useState } from "react";
import Link from "next/link";

const EditorSection = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setLastUpdated(currentDate.toLocaleDateString("en-US", options));
  }, []);

  return (
    <div className="rounded-lg">
      <div className="mb-4">
        <p className="text-md font-bold text-gray-800 lg:text-xl">
          Penulis: Noldi Krisandi
        </p>
        <p id="lastModified" className="text-sm text-gray-600">
          Last updated: {lastUpdated}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-medium text-gray-700">Share:</span>
        <Link
          href="mailto:?subject=Check%20out%20this%20article&body=Here%20is%20an%20interesting%20article%20I%20found."
          className="text-gray-600 hover:text-blue-500 transition"
          title="Share via Email"
        >
          <i className="fas fa-envelope text-lg"></i>
        </Link>
        <Link
          href="/"
          className="text-gray-600 hover:text-blue-500 transition"
          title="Go to Home"
        >
          <i className="fas fa-home text-lg"></i>
        </Link>
        <Link
          href="https://twitter.com/share?text=Check%20out%20this%20article&url=https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 transition"
          title="Share on Twitter"
        >
          <i className="fab fa-twitter text-lg"></i>
        </Link>
      </div>
    </div>
  );
};

export default EditorSection;
