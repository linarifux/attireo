import React from 'react';

// A simple, non-animated component for displaying a text policy.
// We'll wrap this in FadeInView at the page level.
const PolicySection = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="space-y-4 text-gray-700 dark:text-gray-300">
      {children}
    </div>
  </div>
);

export default PolicySection;