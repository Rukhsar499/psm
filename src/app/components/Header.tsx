"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false); // mobile dropdown

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-black/80 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-10 md:py-2">
          <Link href="/" className="flex items-center justify-center gap-2">
            <Image src="/assets/img/logo.webp" alt="Right arrow" width={70} height={100} />
          </Link>

          <div className="flex space-x-6">
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-white text-[17px] font-semibold ml-10">
              <Link href="/">HOME</Link>
              <Link href="/about-us">ABOUT US</Link>

              {/* DROPDOWN DESKTOP */}
              <div className="relative group cursor-pointer">
                <div className="flex items-center gap-1">
                  <span>FACILITIES</span>
                  <ChevronDown size={18} />
                </div>

                <div className="absolute left-0 top-full mt-2 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[180px]">
                  <Link href="/football" className="block px-4 py-2 hover:bg-gray-100">Football Turf</Link>
                  <Link href="/cricket" className="block px-4 py-2 hover:bg-gray-100">Cricket Turf</Link>
                  <Link href="/baseball" className="block px-4 py-2 hover:bg-gray-100">Baseball</Link>
                  <Link href="/volleyball" className="block px-4 py-2 hover:bg-gray-100">Volley Ball</Link>
                  <Link href="/skating" className="block px-4 py-2 hover:bg-gray-100">Skating</Link>
                </div>
              </div>

              <Link href="/faqs">FAQS</Link>
              <Link href="/contact">CONTACT US</Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpenMenu(true)}
                className="p-2 rounded-md text-white hover:bg-white/10 block md:hidden"
              >
                <Menu size={22} />
              </button>

              {/* Book Now */}
              <Link
                href="/booking"
                className="bg-lime-500 text-white px-5 py-2 font-semibold hover:bg-lime-600 transition"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Drawer */}
      <div
        className={`block md:hidden fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 z-50 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <button
            onClick={() => setOpenMenu(false)}
            className="self-end text-gray-400 hover:text-white"
          >
            ✕
          </button>

          <Link href="/" onClick={() => setOpenMenu(false)}>HOME</Link>
          <Link href="/about-us" onClick={() => setOpenMenu(false)}>ABOUT US</Link>

          {/* MOBILE DROPDOWN */}
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="flex items-center justify-between"
          >
            FACILITIES
            <ChevronDown
              size={18}
              className={`transition-transform ${openDropdown ? "rotate-180" : ""}`}
            />
          </button>

          {openDropdown && (
            <div className="ml-4 flex flex-col gap-3">
              <Link href="/football" className="block px-4 py-2 hover:bg-gray-100">Football Turf</Link>
                  <Link href="/cricket" className="block px-4 py-2 hover:bg-gray-100">Cricket Turf</Link>
                  <Link href="/baseball" className="block px-4 py-2 hover:bg-gray-100">Baseball</Link>
                  <Link href="/volleyball" className="block px-4 py-2 hover:bg-gray-100">Volley Ball</Link>
                  <Link href="/skating" className="block px-4 py-2 hover:bg-gray-100">Skating</Link>
            </div>
          )}

          <Link href="/faqs" onClick={() => setOpenMenu(false)}>FAQS</Link>
          <Link href="/contact" onClick={() => setOpenMenu(false)}>CONTACT US</Link>
        </div>
      </div>

      {/* Overlay */}
      {openMenu && (
        <div onClick={() => setOpenMenu(false)} className="fixed inset-0 bg-black/50 z-40" />
      )}
    </>
  );
}
