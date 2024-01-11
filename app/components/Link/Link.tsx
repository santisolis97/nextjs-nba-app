'use client';
import React, { PropsWithChildren } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export const Link = ({
  href,
  children,
  className,
  ...rest
}: PropsWithChildren<LinkProps> & { className?: string }) => {
  const pathname = usePathname();
  const isCurrentPath = href === pathname;

  return (
    <NextLink
      href={href || '#'} // Make sure to provide a valid href or default to '#'
      className={`
        ${className} 
        p-2 
        text-gray-600 
        focus:outline-none 
        transition-colors 
        duration-300 
        rounded-md 
        dark:text-gray-400 
        hover:bg-gray-100
        ${
          isCurrentPath
            ? 'bg-blue-100 shadow-md !text-gray-800'
            : 'dark:hover:bg-gray-800'
        }
      `}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
