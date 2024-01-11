import Image from 'next/image';
import { Link } from './components/Link/Link';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1'>
        <section className='relative w-full h-[100vh]'>
          <Image
            alt='NBA Game'
            className='absolute inset-0 object-cover w-full h-full'
            height='1080'
            src='https://cdn.nba.com/manage/2023/02/IMG_9200-1568x882.jpg'
            style={{
              aspectRatio: '1920/1080',
              objectFit: 'cover',
            }}
            width='1920'
          />
          <div className='absolute inset-0 bg-black/70' />
          <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 text-center'>
            <h1 className='text-3xl font-bold text-white sm:text-4xl md:text-5xl'>
              Experience the Thrill of NBA
            </h1>
            <p className='mt-4 text-lg text-gray-300 md:text-xl pb-8'>
              Join the ultimate NBA fan community and get access to exclusive
              content, stats, and more.
            </p>
            <Link
              className='p-4 bg-gray-50 dark:hover:bg-gray-300'
              href='/games'
            >
              <div className='flex items-center gap-2'>
                Go to Dashboard <FaArrowRight />{' '}
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
