import React from "react";
import Image from "next/image";

type CertificateTemplateProps = {
  name: string;
  course: string;
  dateIssued: string;
  categoryName?: string; // dynamic certificate category
  issuerLeft?: string;
  issuerLeftRole?: string;
  issuerRight?: string;
  issuerRightRole?: string;
  description?: string;
  signatureLeft?: string; // base64 image
  signatureRight?: string; // base64 image
};

export default function CertificateTemplate({
  name,
  course,
  dateIssued,
  categoryName = "CERTIFICATE OF APPRECIATION", // default full certificate title
  issuerLeft = "Sadeesha Perera",
  issuerLeftRole = "President",
  issuerRight = "Mohamed Asath",
  issuerRightRole = "Secretary",
  description = "We give this certificate because the recipient has participated in a social event that we organize.",
  signatureLeft,
  signatureRight,
}: CertificateTemplateProps) {
  return (
    <div className="w-full max-w-[900px] mx-auto aspect-[16/9]">
      <div className="relative w-full h-full bg-white shadow-2xl rounded-xl overflow-hidden border-4 border-gray-200">
        {/* Top angled bar */}
        <div
          className="absolute top-0 left-0 w-full h-[7%] bg-[#1a2a3a] z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }}
        />
        <div
          className="absolute top-0 left-0 w-full h-[2.8%] bg-[#ff9800] z-20"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 60%)" }}
        />
        {/* Bottom angled bar */}
        <div
          className="absolute bottom-0 left-0 w-full h-[5.5%] bg-[#1a2a3a] z-10"
          style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[2.1%] bg-[#ff9800] z-20"
          style={{ clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)" }}
        />

        <div className="relative z-30 flex flex-col items-center justify-center h-full w-full px-[7%] pt-[7%] pb-[7%]">
          {/* Favicon at the top center */}
          <img
            src="/sliitmozilla-logo.png"
            alt="Favicon"
            className="w-[15%] h-[15%] mb-5 rounded mt-2"
            style={{ objectFit: "contain" }}
          />
          <div className="flex flex-row items-center justify-center w-full mb-1 mt-1">
            <span className="text-[1.7vw] font-normal tracking-widest text-[#223] uppercase">
              {categoryName}
            </span>
          </div>
          <div className="text-[0.9vw] font-medium text-[#222] mb-3 tracking-wide">
            We are proudly present this to
          </div>
          <div className="font-playfair-display font-semibold text-[3.5vw] text-black mb-1 tracking-wide">
            {name}
          </div>
          <div className="text-center text-[0.8vw] text-[#222] mb-3 max-w-[90%]">
            {description}
          </div>

          {/* Signature and Medal Section */}
          <div className="flex justify-between items-end w-full mt-4 px-2">
            {/* Left issuer */}
            <div className="flex flex-col items-center">
              {signatureLeft && (
                <Image
                  src={signatureLeft}
                  alt="Left Signature"
                  width={50}
                  height={50}
                  className="mb-1 w-[6vw] h-[3vw] max-w-[60px] max-h-[36px] min-w-[30px] min-h-[18px]"
                  style={{ objectFit: "contain" }}
                />
              )}
              <div className="border-t border-black w-[10vw] mb-1" />
              <div className="font-semibold text-black text-[0.9vw]">
                {issuerLeft}
              </div>
              <div className="text-[0.7vw] italic text-gray-700">
                {issuerLeftRole}
              </div>
            </div>

            {/* Medal/Seal */}
            <div className="flex flex-col items-center">
              <svg
                width="3vw"
                height="3vw"
                viewBox="0 0 60 60"
                className="mb-1"
              >
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
              <div className="text-[0.7vw] text-gray-600">
                {new Date(dateIssued).toLocaleDateString()}
              </div>
            </div>

            {/* Right issuer */}
            <div className="flex flex-col items-center">
              {signatureRight && (
                <Image
                  src={signatureRight}
                  alt="Right Signature"
                  width={50}
                  height={50}
                  className="mb-1 w-[6vw] h-[3vw] max-w-[60px] max-h-[36px] min-w-[30px] min-h-[18px]"
                  style={{ objectFit: "contain" }}
                />
              )}
              <div className="border-t border-black w-[10vw] mb-1" />
              <div className="font-semibold text-black text-[0.9vw]">
                {issuerRight}
              </div>
              <div className="text-[0.7vw] italic text-gray-700">
                {issuerRightRole}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
