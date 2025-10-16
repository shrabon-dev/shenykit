import React from 'react';

/**
 * A responsive, stylized button component.
 * @param {object} props
 * @param {React.ReactNode} props.children - The button label.
 * @param {'primary' | 'secondary' | 'danger'} [props.variant='primary'] - Button style variant.
 * @param {string} [props.className] - Optional additional CSS classes for customization.
 * @param {function} [props.onClick] - Click handler function.
 * @returns {JSX.Element}
 */
export function ShenyButton({ children, variant = 'primary', className = '', onClick, ...rest }) {
  const baseClasses = 'font-semibold py-2 px-4 rounded-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50';

  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
