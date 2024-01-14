"use client";
import React, { PropsWithChildren } from "react";
import NextLink, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

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
      href={href || "#"} // Make sure to provide a valid href or default to '#'
      className={`
        ${className} 
        rounded-md 
        p-2 
        text-gray-600 
        transition-colors 
        duration-300 
        focus:outline-none 
        dark:text-gray-400 
        
        ${
          isCurrentPath
            ? "bg-blue-100 !text-gray-800 shadow-md"
            : "dark:hover:bg-gray-800"
        }
      `}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
