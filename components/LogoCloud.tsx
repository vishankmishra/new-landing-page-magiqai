"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoCloudProps {
  title?: string;
}

export default function LogoCloud({
  title = "Used daily by more than 6,000 small and large businesses",
}: LogoCloudProps) {
  // Company logo placeholders - using placeholder service until real logos are added
  const logos = [
    { name: "Google", src: "https://placehold.co/120x40?text=Google" },
    { name: "Microsoft", src: "https://placehold.co/120x40?text=Microsoft" },
    { name: "Amazon", src: "https://placehold.co/120x40?text=Amazon" },
    { name: "Salesforce", src: "https://placehold.co/120x40?text=Salesforce" },
    { name: "HubSpot", src: "https://placehold.co/120x40?text=HubSpot" },
    { name: "Zoom", src: "https://placehold.co/120x40?text=Zoom" },
    { name: "Slack", src: "https://placehold.co/120x40?text=Slack" },
    { name: "Shopify", src: "https://placehold.co/120x40?text=Shopify" },
    { name: "Meta", src: "https://placehold.co/120x40?text=Meta" },
    { name: "LinkedIn", src: "https://placehold.co/120x40?text=LinkedIn" },
    { name: "Google", src: "https://placehold.co/120x40?text=Google" },
    { name: "Microsoft", src: "https://placehold.co/120x40?text=Microsoft" },
    { name: "Amazon", src: "https://placehold.co/120x40?text=Amazon" },
    { name: "Salesforce", src: "https://placehold.co/120x40?text=Salesforce" },
    { name: "HubSpot", src: "https://placehold.co/120x40?text=HubSpot" }, // Duplicate for infinite scroll effect
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-8">
          {title}
        </p>

        {/* Scrolling Logo Strip */}
        <div className="relative overflow-hidden h-20">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center h-full"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`}
                  className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
