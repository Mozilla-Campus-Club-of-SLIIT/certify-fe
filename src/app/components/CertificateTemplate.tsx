import React from "react";

type CertificateTemplateProps = {
  name: string;
  course: string;
  dateIssued: string;
  issuerLeft?: string;
  issuerLeftRole?: string;
  issuerRight?: string;
  issuerRightRole?: string;
  description?: string;
};

export default function CertificateTemplate({
  name,
  course,
  dateIssued,
  issuerLeft = "Sadeesha Perera",
  issuerLeftRole = "President",
  issuerRight = "Mohamed Asath",
  issuerRightRole = "Secretary",
  description = "We give this certificate because the recipient has participated in a social event that we organize.",
}: CertificateTemplateProps) {
  return (
    <div className="relative bg-white w-[800px] h-[570px] mx-auto shadow-2xl rounded-xl overflow-hidden border-4 border-gray-200">
      {/* Top angled bar */}
      <div
        className="absolute top-0 left-0 w-full h-20 bg-[#1a2a3a] z-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }}
      />
      <div
        className="absolute top-0 left-0 w-full h-8 bg-[#ff9800] z-20"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 60%)" }}
      />
      {/* Bottom angled bar */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 bg-[#1a2a3a] z-10"
        style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-6 bg-[#ff9800] z-20"
        style={{ clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)" }}
      />

      <div className="relative z-30 flex flex-col items-center justify-center h-full px-12 pt-16 pb-16">
        {/* Favicon at the top center */}
        <img
          src="/sliitmozilla-logo.png"
          alt="Favicon"
          className="w-24 h-24 mb-1 rounded mt-3"
          style={{ objectFit: "contain" }}
        />
        <h1 className="text-5xl font-extrabold tracking-widest text-[#223] mb-2 mt-2">
          CERTIFICATE
        </h1>
        <div className="text-lg font-semibold tracking-wide text-[#222] mb-2 uppercase">
          of Appreciation
        </div>
        <div className="text-base font-medium text-[#222] mb-6 tracking-wide">
          We are proudly present this to
        </div>
        <div className="font-[cursive] text-3xl text-black mb-2">{name}</div>
        <div className="text-center text-sm text-[#222] mb-6 max-w-xl">
          {description}
        </div>
        <div className="flex justify-between items-end w-full mt-8 px-4">
          <div className="flex flex-col items-center">
            <div className="border-t border-black w-32 mb-1" />
            <div className="font-semibold text-black">{issuerLeft}</div>
            <div className="text-xs italic text-gray-700">{issuerLeftRole}</div>
          </div>
          {/* Medal/Seal */}
          <div className="flex flex-col items-center">
            <svg width="60" height="60" viewBox="0 0 60 60" className="mb-1">
              <circle
                cx="30"
                cy="30"
                r="24"
                fill="#FFD700"
                stroke="#FBBF24"
                strokeWidth="4"
              />
              <polygon points="30,50 35,58 30,54 25,58" fill="#FBBF24" />
            </svg>
            <div className="text-xs text-gray-600">
              {new Date(dateIssued).toLocaleDateString()}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t border-black w-32 mb-1" />
            <div className="font-semibold text-black">{issuerRight}</div>
            <div className="text-xs italic text-gray-700">
              {issuerRightRole}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
