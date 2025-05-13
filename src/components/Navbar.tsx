'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Check if scrolled past hero section (100vh)
        setIsScrolled(window.scrollY > window.innerHeight);
        
        if (window.scrollY > lastScrollY) { // scroll down
          setIsVisible(false);
        } else { // scroll up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-sm shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Victoria Villano Evans"
            width={180}
            height={50}
            className={`h-12 w-auto transition-all duration-300 ${
              isScrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-accent' 
                : 'text-white hover:text-gray-200'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/testimonials" 
            className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-accent' 
                : 'text-white hover:text-gray-200'
            }`}
          >
            Testimonials
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-accent' 
                : 'text-white hover:text-gray-200'
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-accent' 
                : 'text-white hover:text-gray-200'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 