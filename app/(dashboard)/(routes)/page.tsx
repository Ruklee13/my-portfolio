// pages/index.tsx
import Head from 'next/head';
import GameOfLife from '@/components/GameofLife';
import TypographyAnimation from '@/components/Banner';

export default function Home() {
  return (
    <div className='h-full w-full'>
      <TypographyAnimation/>
      <main>
        <GameOfLife/>
      </main>
    </div>
  );
}