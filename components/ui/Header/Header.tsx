'use client';

import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  const pathnameWithoutSlashCapitalized = pathname
    .replace('/', '')
    .toUpperCase();
  return (
    <div className='py-4 px-2 dark:border-gray-700 border-b-[1px] flex items-center justify-center font-extralight text-lg	'>
      {pathnameWithoutSlashCapitalized}
    </div>
  );
};
