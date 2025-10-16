import React from 'react';

/**
 * A responsive, stylized card component for grouping content.
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @param {string} [props.className] - Optional additional CSS classes for customization.
 * @returns {JSX.Element}
 */
export function ShenyCard({ children, className = '' }) {
  // Base classes for the card: 
  // Shadow, rounded corners, white background, and responsive padding.
  const baseClasses = 
    'bg-white shadow-xl rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl';

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}
