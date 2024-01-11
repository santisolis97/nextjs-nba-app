import Image from 'next/image';
import { Link } from '../components/Link/Link';
import { Header } from '../components/Header/Header';
import { FaBasketballBall } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='md:flex min-h-screen'>
      <aside className='flex md:flex-col sm:flex-row overflow-x-auto w-full sm:w-32'>
        <div className='sm:items-center flex md:flex-col md:items-start md:h-full py-8 md:space-y-8 px-2 bg-white dark:bg-gray-900 dark:border-gray-700'>
          <Link href='/' className='w-full'>
            <Image
              src={'/nba-logo.webp'}
              alt='nba logo'
              priority
              width='128'
              height='32'
            />
          </Link>
          <Link href='/games' className='w-full flex gap-2 items-center'>
            <FaBasketballBall className='h-5 w-5' /> Games
          </Link>
          <Link href='/players' className='w-full flex gap-2 items-center'>
            <FaUserAlt className='h-5 w-5' />
            Players
          </Link>
          <Link href='/teams' className='w-full flex gap-2 items-center'>
            <RiTeamFill className='h-5 w-5' />
            Teams
          </Link>
        </div>
      </aside>
      <main className='w-full overflow-y-hidden bg-gray-900 md:border-l md:border-r sm:w-64 dark:bg-gray-900 dark:border-gray-700 flex-1'>
        <Header />
        <div className='p-4 overflow-y-auto max-h-full'>{children}</div>
      </main>
    </div>
  );
}
