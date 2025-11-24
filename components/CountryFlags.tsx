"use client";

import React, { useState } from "react";

interface CountryFlagsProps {
  countries: Array<{
    code: string;
    name: string;
  }>;
  className?: string;
}

const countryFlagMap: Record<string, { name: string }> = {
  IN: { name: "India" },
  SG: { name: "Singapore" },
  MY: { name: "Malaysia" },
  AE: { name: "UAE" },
  US: { name: "United States" },
};

function FlagImage({ code, name }: { code: string; name: string }) {
  // Try local flag SVG first, then fallback to CDN
  const localPath = `/flags/${code.toLowerCase()}.svg`;
  // Using flagcdn.com which provides high-quality flag SVGs
  const cdnUrl = `https://flagcdn.com/${code.toLowerCase()}.svg`;
  const [src, setSrc] = useState(localPath);
  const [hasError, setHasError] = useState(false);

  return (
    <span className="inline-flex items-center" title={name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={hasError ? cdnUrl : src}
        alt={`${name} flag`}
        width={32}
        height={24}
        className="inline-block rounded border border-gray-200 shadow-sm"
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setSrc(cdnUrl);
          }
        }}
        style={{
          width: "32px",
          height: "24px",
          objectFit: "cover",
          display: "inline-block",
        }}
      />
    </span>
  );
}

export default function CountryFlags({
  countries,
  className = "",
}: CountryFlagsProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="text-sm text-gray-500">Access Available for</span>
      {countries.map((country) => {
        const flag = countryFlagMap[country.code];
        if (!flag) return null;

        return (
          <FlagImage key={country.code} code={country.code} name={flag.name} />
        );
      })}
    </span>
  );
}
