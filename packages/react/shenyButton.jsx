import React from 'react';

/**
 * ShenyKit Button Component
 * A simple, customizable button with stateful styling using Tailwind CSS.
 *
 * @param {object} props
 * @param {string} [props.variant='primary'] - 'primary', 'secondary', 'danger'
 * @param {string} [props.size='md'] - 'sm', 'md', 'lg'
 * @param {string} [props.className=''] - Additional Tailwind classes for customization
 * @param {React.ReactNode} props.children - Button content
 * @param {function} props.onClick - Click handler
 */
export const ShenyButton = ({ variant = 'primary', size = 'md', className = '', children, onClick }) => {
  const baseStyle = 'font-semibold rounded-lg transition-all duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-4';

  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-300',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-7 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

/**
 * ShenyKit Card Component
 * A container component for displaying grouped content, fully responsive.
 *
 * @param {object} props
 * @param {React.ReactNode} props.title - The card title content
 * @param {React.ReactNode} props.children - The main card content
 * @param {string} [props.className=''] - Additional Tailwind classes for customization
 */
export const ShenyCard = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-xl mx-auto ${className}`}>
      <div className="border-b pb-4 mb-4 border-gray-100">
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

// Export all components from the main entry point
export default {
    ShenyButton,
    ShenyCard
};
