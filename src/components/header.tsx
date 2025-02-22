"use client";
import { useState } from "react";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <header className="px-8 py-4 sticky top-0 w-full bg-stone-200 dark:bg-stone-800 flex items-center justify-between backdrop-blur-lg z-50">
      
      {/* Logo */}
      <h1 className="text-3xl cursor-pointer font-bold text-slate-600 dark:text-primary tracking-wide">
        Good<span className="text-primary dark:text-white">Brawn</span>
      </h1>

      {/* Desktop Nav (Centered) */}
      <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-lg font-medium">
        <Link href="/" className="text-gray-700 dark:text-white dark:hover:text-primary hover:text-primary transition">Home</Link>
        <Link href="/mainpage" className="text-gray-700 dark:text-white dark:hover:text-primary hover:text-primary transition">Collection</Link>
        <Link href="/about" className="text-gray-700 dark:text-white dark:hover:text-primary hover:text-primary transition">About</Link>
        <Link href="/contact" className="text-gray-700 dark:hover:text-primary dark:text-white hover:text-primary transition">Contact</Link>
      </nav>

      {/* Right Section: Theme Toggle & Hamburger Menu */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="p-2 rounded-full bg-primary transition-all">
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-white" />
          ) : (
            <MoonIcon className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Mobile Menu Button (Right-Aligned) */}
        <button 
          className="md:hidden p-2 rounded-md bg-primary text-white transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu (Slide-in) */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-stone-200 dark:bg-stone-800 flex flex-col items-center gap-4 py-6 md:hidden transition-all">
          <Link href="/" className="text-gray-700 dark:text-white text-lg font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/mainpage" className="text-gray-700 dark:text-white text-lg font-medium" onClick={() => setMenuOpen(false)}>Collection</Link>
          <Link href="/about" className="text-gray-700 dark:text-white text-lg font-medium" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="text-gray-700 dark:text-white text-lg font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
      
    </header>
  );
}
