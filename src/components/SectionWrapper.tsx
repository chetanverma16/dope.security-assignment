import React, { useState } from "react";

const SectionWrapper = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading?: string;
}) => {
  const [key, setKey] = useState(0);

  const handleReload = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <section className="py-10 p-4  border-b border-gray-100">
      {heading && (
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {heading}
          </h2>
          <button
            onClick={handleReload}
            className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Reload Component
          </button>
        </div>
      )}
      <div key={key}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
