import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-600 hover:text-indigo-600 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}