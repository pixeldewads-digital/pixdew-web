'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { basePath } from '../../../next.config';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        <Link href="/">
          <Image
            src={`${basePath || ''}/logo/PD-New.svg`}
            alt="PixelDew Logo"
            width={48}
            height={48}
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-brand-black hover:text-green-500 transition-colors">Home</Link>
          <Link href="/about" className="text-brand-black hover:text-green-500 transition-colors">About</Link>
          <Link href="/contact" className="text-brand-black hover:text-green-500 transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
