"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

export const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <nav ref={navRef} className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://cdn.nailib.com/_next/static/media/logo-small.5691114d.svg?w=256&q=75"
              alt="Nail IB Logo"
              width={50}
              height={50}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {["Courses", "Tutors", "Resources", "Study Plans", "Exam Tips", "Practice Tests", "E-Books", "Webinars"].map((item, index) => (
              <Link
                key={index}
                href={`https://nailib.com/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-700 hover:text-blue-600 transition text-lg font-medium"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#"
              className="bg-blue-600 text-white rounded-md px-4 py-2 text-lg font-medium transition hover:bg-blue-700"
            >
              Videos
            </Link>
          </div>

          {/* Auth Links */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-700 hover:text-blue-600 transition text-lg font-medium">
              Log in
            </Link>
            <Link
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md text-lg font-medium transition shadow-md hover:shadow-lg"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
