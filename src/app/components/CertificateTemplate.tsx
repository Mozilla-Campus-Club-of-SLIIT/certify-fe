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
    <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px] mx-auto aspect-[16/9]">
      <div className="relative w-full h-full bg-white rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-4 border-gray-200">
        {/* Dynamic Top Bar Design based on categoryCode */}
        {renderTopBarDesign()}
        {/* Dynamic Bottom Bar Design based on categoryCode */}
        {renderBottomBarDesign()}

        <div className="relative z-30 flex flex-col items-center justify-center h-full w-full px-[4%] sm:px-[5%] md:px-[6%] lg:px-[7%] xl:px-[8%] 2xl:px-[10%] pt-[5%] sm:pt-[6%] md:pt-[7%] lg:pt-[8%] xl:pt-[8%] 2xl:pt-[8%] pb-[5%] sm:pb-[6%] md:pb-[7%] lg:pb-[8%] xl:pb-[8%] 2xl:pb-[8%]">
          {/* Logo at the top center - Responsive sizing */}
          <img
            src="/sliitmozilla-logo.png"
            alt="SLIIT Mozilla Logo"
            className="w-[20%] sm:w-[18%] md:w-[16%] lg:w-[15%] xl:w-[14%] 2xl:w-[12%] h-[20%] sm:h-[18%] md:h-[16%] lg:h-[15%] xl:h-[14%] 2xl:h-[12%] mb-2 sm:mb-3 md:mb-4 lg:mb-5 rounded mt-1 sm:mt-2"
            style={{ objectFit: "contain" }}
          />
          {/* Certificate Title - Responsive */}
          <div className="flex flex-row items-center justify-center w-full mb-1 sm:mb-2 mt-1 sm:mt-2">
            <span className="text-[2.2vw] sm:text-[2.0vw] md:text-[1.8vw] lg:text-[1.7vw] xl:text-[1.6vw] 2xl:text-[1.3vw] font-normal tracking-wide sm:tracking-widest text-[#223] uppercase text-center">
              {categoryName}
            </span>
          </div>
          
          {/* Subtitle - Responsive */}
          <div className="text-[1.2vw] sm:text-[1.1vw] md:text-[1.0vw] lg:text-[0.9vw] xl:text-[0.8vw] 2xl:text-[0.65vw] font-medium text-[#222] mb-2 sm:mb-3 tracking-wide text-center">
            We are proudly present this to
          </div>
          
          {/* Name - Responsive */}
          <div className="font-playfair-display font-semibold text-[3.2vw] sm:text-[3.0vw] md:text-[2.8vw] lg:text-[2.5vw] xl:text-[2.3vw] 2xl:text-[1.8vw] text-black mb-1 sm:mb-2 tracking-wide text-center">
            {name}
          </div>
          
          {/* Description - Responsive */}
          <div className="text-center text-[1.0vw] sm:text-[0.9vw] md:text-[0.8vw] lg:text-[0.8vw] xl:text-[0.7vw] 2xl:text-[0.55vw] text-[#222] mb-2 sm:mb-3 max-w-[95%] sm:max-w-[90%] px-2 sm:px-0">
            {description}
          </div>

          {/* Signature and Medal Section - Responsive */}
          <div className="flex justify-between items-end w-full mt-2 sm:mt-3 md:mt-4 px-1 sm:px-2">
            {/* Left issuer */}
            <div className="flex flex-col items-center">
              {signatureLeft && (
                <Image
                  src={signatureLeft}
                  alt="Left Signature"
                  width={50}
                  height={50}
                  className="mb-1 w-[8vw] sm:w-[7vw] md:w-[6vw] lg:w-[5.5vw] xl:w-[5vw] 2xl:w-[4vw] h-[4vw] sm:h-[3.5vw] md:h-[3vw] lg:h-[2.75vw] xl:h-[2.5vw] 2xl:h-[2vw] max-w-[50px] sm:max-w-[60px] lg:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[100px] max-h-[30px] sm:max-h-[36px] lg:max-h-[42px] xl:max-h-[48px] 2xl:max-h-[60px] min-w-[25px] sm:min-w-[30px] min-h-[15px] sm:min-h-[18px]"
                  style={{ objectFit: "contain" }}
                />
              )}
              <div className="border-t border-black w-[12vw] sm:w-[11vw] md:w-[10vw] lg:w-[9vw] xl:w-[8vw] 2xl:w-[6vw] mb-1" />
              <div className="font-semibold text-black text-[1.1vw] sm:text-[1.0vw] md:text-[0.9vw] lg:text-[0.8vw] xl:text-[0.75vw] 2xl:text-[0.6vw] text-center">
                {issuerLeft}
              </div>
              <div className="text-[0.9vw] sm:text-[0.8vw] md:text-[0.7vw] lg:text-[0.65vw] xl:text-[0.6vw] 2xl:text-[0.5vw] italic text-gray-700 text-center">
                {issuerLeftRole}
              </div>
            </div>

            {/* Medal/Seal - Responsive */}
            <div className="flex flex-col items-center">
              <svg
                width="4vw"
                height="4vw"
                viewBox="0 0 60 60"
                className="mb-1 sm:w-[3.5vw] sm:h-[3.5vw] md:w-[3vw] md:h-[3vw] lg:w-[2.75vw] lg:h-[2.75vw] xl:w-[2.5vw] xl:h-[2.5vw] 2xl:w-[2vw] 2xl:h-[2vw]"
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
              <div className="text-[0.9vw] sm:text-[0.8vw] md:text-[0.7vw] lg:text-[0.65vw] xl:text-[0.6vw] 2xl:text-[0.5vw] text-gray-600 text-center">
                {new Date(dateIssued).toLocaleDateString()}
              </div>
            </div>

            {/* Right issuer - Responsive */}
            <div className="flex flex-col items-center">
              {signatureRight && (
                <Image
                  src={signatureRight}
                  alt="Right Signature"
                  width={50}
                  height={50}
                  className="mb-1 w-[8vw] sm:w-[7vw] md:w-[6vw] lg:w-[5.5vw] xl:w-[5vw] 2xl:w-[4vw] h-[4vw] sm:h-[3.5vw] md:h-[3vw] lg:h-[2.75vw] xl:h-[2.5vw] 2xl:h-[2vw] max-w-[50px] sm:max-w-[60px] lg:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[100px] max-h-[30px] sm:max-h-[36px] lg:max-h-[42px] xl:max-h-[48px] 2xl:max-h-[60px] min-w-[25px] sm:min-w-[30px] min-h-[15px] sm:min-h-[18px]"
                  style={{ objectFit: "contain" }}
                />
              )}
              <div className="border-t border-black w-[12vw] sm:w-[11vw] md:w-[10vw] lg:w-[9vw] xl:w-[8vw] 2xl:w-[6vw] mb-1" />
              <div className="font-semibold text-black text-[1.1vw] sm:text-[1.0vw] md:text-[0.9vw] lg:text-[0.8vw] xl:text-[0.75vw] 2xl:text-[0.6vw] text-center">
                {issuerRight}
              </div>
              <div className="text-[0.9vw] sm:text-[0.8vw] md:text-[0.7vw] lg:text-[0.65vw] xl:text-[0.6vw] 2xl:text-[0.5vw] italic text-gray-700 text-center">
                {issuerRightRole}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
