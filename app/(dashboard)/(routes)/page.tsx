"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import TypographyAnimation from '@/components/Banner';

export default function Home() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSettled(true);
    }, 5000); // Adjust time as needed for the animation to settle

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Spiral Homepage</title>
        <TypographyAnimation/>
        <meta name="description" content="A dynamic homepage that spirals until it settles." />
      </Head>
      <div
        className={`transition-all duration-1000 ease-in-out ${settled ? 'transform-none' : 'animate-spiral'}`}
      >
        <h1 className="text-4xl font-bold text-center">Welcome to My Spiral Homepage</h1>
      </div>
    </div>
  );
}
