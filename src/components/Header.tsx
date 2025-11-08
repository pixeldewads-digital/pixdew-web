'use client';

import { useState, useEffect } from 'react';
import Container from './Container';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl font-bold font-poppins">PixelDew</h1>
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <a href="#" className="hover:text-green-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
