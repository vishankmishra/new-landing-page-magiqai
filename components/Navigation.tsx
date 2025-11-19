"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface NavigationProps {
  logo?: string;
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
  ctaButton?: {
    text: string;
    href: string;
  };
}

export default function Navigation({
  logo = "MagiQ AI",
  menuItems = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ],
  ctaButton = { text: "Join Waitlist", href: "#waitlist" },
}: NavigationProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image
                src="/icons/icon-logo-full.svg"
                alt={logo}
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-[#141414] hover:text-gray-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Action Buttons - Matching Perspective.co */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Login Link */}
            <a
              href="https://app.magiqai.io/LOGIN"
              className="text-base font-medium text-[#141414] hover:text-gray-600 transition-colors"
            >
              Login
            </a>

            {/* Talk to sales Button */}
            <a
              href="https://calendly.com/nilesh-kanawade"
              className="inline-flex items-center px-5 py-2.5 text-base font-semibold text-[#141414] bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
            >
              Talk to sales
            </a>

            {/* Try for free Button - Perspective.co blue */}
            <a
              href="https://app.magiqai.io/signup"
              className="inline-flex items-center px-6 py-2.5 text-base font-semibold text-white bg-[#0071eb] rounded-xl hover:bg-[#0056b8] transition-all shadow-sm hover:shadow-md"
            >
              Try for free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#141414] hover:text-gray-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-5 space-y-3">
              {menuItems.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 text-base font-medium text-[#141414] hover:text-gray-600"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-100">
                <a
                  href="https://app.magiqai.io/LOGIN"
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 text-base font-medium text-[#141414] hover:text-gray-600"
                >
                  Login
                </a>
                <a
                  href="https://calendly.com/nilesh-kanawade"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 text-base font-semibold text-[#141414] bg-white border border-gray-200 rounded-xl hover:bg-gray-50"
                >
                  Talk to sales
                </a>
                <a
                  href="https://app.magiqai.io/signup"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 text-base font-semibold text-white bg-[#0071eb] rounded-xl hover:bg-[#0056b8] shadow-sm"
                >
                  Try for free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
