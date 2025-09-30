import React from "react";
import Image from "next/image";

type CertificateTemplateProps = {
  name: string;
  course: string;
  dateIssued: string;
  categoryName?: string; // dynamic certificate category
  categoryCode?: string; // unique code for design selection
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
  categoryCode = "DEFAULT", // default design code
  issuerLeft = "Sadeesha Perera",
  issuerLeftRole = "President",
  issuerRight = "Mohamed Asath",
  issuerRightRole = "Secretary",
  description = "We give this certificate because the recipient has participated in a social event that we organize.",
  signatureLeft,
  signatureRight,
}: CertificateTemplateProps) {
  // Function to render different top bar designs based on categoryCode
  const renderTopBarDesign = () => {
    switch (categoryCode) {
      case "EXCELLENCE":
        // Design 1: Double layer with gradient effect
        return (
          <>
            <div
              className="absolute top-0 left-0 w-full h-[8%] bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 z-10"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)" }}
            />
            <div
              className="absolute top-0 left-0 w-full h-[3%] bg-gradient-to-r from-gold-400 via-yellow-400 to-gold-400 z-20"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}
            />
          </>
        );

      case "PARTICIPATION":
        // Design 2: Curved wave design
        return (
          <>
            <div
              className="absolute top-0 left-0 w-full h-[6%] bg-green-600 z-10"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%)",
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-[2.5%] bg-emerald-400 z-20"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 60%, 0 100%)",
              }}
            />
          </>
        );

      case "ACHIEVEMENT":
        // Design 3: Multi-layered angular design
        return (
          <>
            <div
              className="absolute top-0 left-0 w-full h-[7.5%] bg-red-700 z-10"
              style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 80%)" }}
            />
            <div
              className="absolute top-0 left-0 w-full h-[4%] bg-orange-500 z-20"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 60%)" }}
            />
            <div
              className="absolute top-0 left-0 w-full h-[1.5%] bg-yellow-400 z-30"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 40%)" }}
            />
          </>
        );

      case "MEMBERSHIP":
        // Design 4: Geometric diamond pattern
        return (
          <>
            <div
              className="absolute top-0 left-0 w-full h-[6.5%] bg-indigo-800 z-10"
              style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)" }}
            />
            <div
              className="absolute top-0 left-0 w-full h-[3.5%] bg-cyan-400 z-20"
              style={{ clipPath: "polygon(10% 0, 90% 0, 75% 100%, 25% 100%)" }}
            />
          </>
        );

      case "COMPLETION":
        // Design 5: Stepped design
        return (
          <>
            <div
              className="absolute top-0 left-0 w-full h-[7%] bg-teal-700 z-10"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 40%, 80% 70%, 60% 40%, 40% 70%, 20% 40%, 0 70%)",
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-[3%] bg-lime-400 z-20"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 50%)" }}
            />
          </>
        );

      case "holamozilla2025":
        // Design 6: HolaMozilla 2025 - Professional minimal design
        return (
          <>
            {/* Main top bar with subtle gradient */}
            <div
              className="absolute top-0 left-0 w-full h-[5%] z-10"
              style={{
                background: "linear-gradient(90deg, #6A15D2 0%, #6A15D2 100%)",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
            {/* Golden accent bar */}
            <div
              className="absolute top-0 left-0 w-full h-[1.5%] bg-[#FFB30D] z-20"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            />
            {/* Corner accent elements */}
            <div
              className="absolute top-0 left-0 w-[4%] h-[4%] bg-[#FFB30D] z-30"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />
            <div
              className="absolute top-0 right-0 w-[4%] h-[4%] bg-[#FFB30D] z-30"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            />
          </>
        );

      default:
        // Default design (original Mozilla style)
        return (
          <>
            <div
              className="absolute top-0 left-0 w-full h-[7%] bg-[#1a2a3a] z-10"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }}
            />
            <div
              className="absolute top-0 left-0 w-full h-[2.8%] bg-[#ff9800] z-20"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 60%)" }}
            />
          </>
        );
    }
  };

  // Function to render different bottom bar designs based on categoryCode
  const renderBottomBarDesign = () => {
    switch (categoryCode) {
      case "EXCELLENCE":
        // Design 1: Double layer with gradient effect (matching top)
        return (
          <>
            <div
              className="absolute bottom-0 left-0 w-full h-[8%] bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 z-10"
              style={{ clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[3%] bg-gradient-to-r from-gold-400 via-yellow-400 to-gold-400 z-20"
              style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)" }}
            />
          </>
        );

      case "PARTICIPATION":
        // Design 2: Curved wave design (matching top)
        return (
          <>
            <div
              className="absolute bottom-0 left-0 w-full h-[6%] bg-green-600 z-10"
              style={{
                clipPath: "polygon(0 50%, 50% 0, 100% 50%, 100% 100%, 0 100%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[2.5%] bg-emerald-400 z-20"
              style={{
                clipPath: "polygon(0 0, 50% 40%, 100% 0, 100% 100%, 0 100%)",
              }}
            />
          </>
        );

      case "ACHIEVEMENT":
        // Design 3: Multi-layered angular design (matching top)
        return (
          <>
            <div
              className="absolute bottom-0 left-0 w-full h-[7.5%] bg-red-700 z-10"
              style={{ clipPath: "polygon(0 20%, 90% 0, 100% 100%, 0 100%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[4%] bg-orange-500 z-20"
              style={{ clipPath: "polygon(0 40%, 95% 0, 100% 100%, 0 100%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[1.5%] bg-yellow-400 z-30"
              style={{ clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)" }}
            />
          </>
        );

      case "MEMBERSHIP":
        // Design 4: Geometric diamond pattern (matching top)
        return (
          <>
            <div
              className="absolute bottom-0 left-0 w-full h-[6.5%] bg-indigo-800 z-10"
              style={{ clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0 100%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[3.5%] bg-cyan-400 z-20"
              style={{ clipPath: "polygon(25% 0, 75% 0, 90% 100%, 10% 100%)" }}
            />
          </>
        );

      case "COMPLETION":
        // Design 5: Stepped design (matching top)
        return (
          <>
            <div
              className="absolute bottom-0 left-0 w-full h-[7%] bg-teal-700 z-10"
              style={{
                clipPath:
                  "polygon(0 30%, 20% 60%, 40% 30%, 60% 60%, 80% 30%, 100% 60%, 100% 100%, 0 100%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[3%] bg-lime-400 z-20"
              style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
            />
          </>
        );

      case "holamozilla2025":
        // Design 6: HolaMozilla 2025 - Professional minimal bottom design
        return (
          <>
            {/* Main bottom bar */}
            <div
              className="absolute bottom-0 left-0 w-full h-[5%] z-10"
              style={{
                background: "linear-gradient(90deg, #6A15D2 0%, #6A15D2 100%)",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
            {/* Golden accent bar */}
            <div
              className="absolute bottom-0 left-0 w-full h-[1.5%] bg-[#FFB30D] z-20"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            />
            {/* Corner accent elements */}
            <div
              className="absolute bottom-0 left-0 w-[4%] h-[4%] bg-[#FFB30D] z-30"
              style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-[4%] h-[4%] bg-[#FFB30D] z-30"
              style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
            />
          </>
        );

      default:
        // Default design (original Mozilla style)
        return (
          <>
            <div
              className="absolute bottom-0 left-0 w-full h-[5.5%] bg-[#1a2a3a] z-10"
              style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[2.1%] bg-[#ff9800] z-20"
              style={{ clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)" }}
            />
          </>
        );
    }
  };

  return (
    <div className="w-full max-w-[700px] mx-auto aspect-[16/9]">
      <div className="relative w-full h-full bg-white rounded-xl overflow-hidden border-4 border-gray-200">
        {/* Dynamic Top Bar Design based on categoryCode */}
        {renderTopBarDesign()}
        {/* Dynamic Bottom Bar Design based on categoryCode */}
        {renderBottomBarDesign()}

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
          <div className="font-playfair-display font-semibold text-[2.5vw] text-black mb-1 tracking-wide">
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
