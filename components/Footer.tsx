import Image from "next/image";

interface FooterProps {
  tagline: string;
  sections: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
}

export default function Footer({ tagline, sections }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo */}
        <div className="mb-12">
          <a href="/" className="inline-block">
            <Image
              src="/icons/icon-logo-full.svg"
              alt="MagiQ AI"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Links grid - Matching Perspective.co */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-[#141414] font-semibold mb-4 text-sm">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#141414] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} MagiQ AI. All rights reserved.
            </p>
            {/* Language selector placeholder */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
