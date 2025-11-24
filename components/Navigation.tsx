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
          ? "backdrop-blur-md bg-white/70 border-b border-white/20 shadow-lg shadow-neutral-900/10"
          : "backdrop-blur-md bg-white/70 border-b border-white/20 shadow-md shadow-neutral-900/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Left: Logo - Far Left Corner */}
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

          {/* Center: Navigation Links - Centered */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center mx-8">
            {menuItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Action Buttons - Far Right Corner */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0 ml-auto">
            {/* Login Link */}
            <a
              href="https://app.magiqai.io/login"
              className="text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            >
              Login
            </a>

            {/* Talk to sales Button */}
            <a
              href="https://calendly.com/nilesh-kanawade"
              className="inline-flex items-center px-5 py-2.5 text-base font-semibold text-neutral-900 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-xl hover:bg-white hover:border-neutral-300 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
            >
              Talk to sales
            </a>

            {/* Try for free Button - Glow Button */}
            <a
              href="https://app.magiqai.io/signup"
              className="btn-glow-primary inline-flex items-center px-6 py-2.5 text-base font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Try for free
            </a>
          </div>

          {/* Mobile Menu Button - Far Right */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-neutral-900 hover:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg transition-colors ml-auto"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
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
            className="lg:hidden border-t border-white/20 backdrop-blur-md bg-white/80"
          >
            <div className="px-4 py-5 space-y-3">
              {menuItems.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset rounded-lg px-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-white/10">
                <a
                  href="https://app.magiqai.io/login"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset rounded-lg px-2"
                >
                  Login
                </a>
                <a
                  href="https://calendly.com/nilesh-kanawade"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 text-base font-semibold text-neutral-900 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-xl hover:bg-white hover:border-neutral-300 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                >
                  Talk to sales
                </a>
                <a
                  href="https://app.magiqai.io/signup"
                  onClick={() => setIsOpen(false)}
                  className="btn-glow-primary block w-full text-center px-6 py-3 text-base font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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
