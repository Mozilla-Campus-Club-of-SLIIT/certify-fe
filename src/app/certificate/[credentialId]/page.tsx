"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import CertificateTemplate from "../../components/CertificateTemplate";

type Certificate = {
  credentialId: string;
  name: string;
  course: string;
  dateIssued: string;
  issuer: string;
  categoryName?: string; // dynamic certificate category from DB
  categoryCode?: string; // unique code for design selection
  signatures?: { image_b64: string }[];
};

export default function CertificateDetailsPage() {
  const params = useParams();
  const credentialId = params.credentialId as string;
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
        const res = await fetch(`${baseUrl}/api/certificate/${credentialId}`);
        if (!res.ok) throw new Error("Certificate not found");
        const data = await res.json();
        setCertificate(data); // store entire certificate, including signatures
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error fetching certificate");
        }
      } finally {
        setLoading(false);
      }
    };

    if (credentialId) {
      fetchCertificate();
    }
  }, [credentialId]);

  if (loading)
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Animated Certificate Icon */}
          <div className="relative">
            <svg
              className="w-16 h-16 text-orange-600 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {/* Spinning ring around the icon */}
            <div className="absolute -top-2 -left-2 w-20 h-20 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>

          {/* Loading text with fade animation */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Loading Certificate
            </h2>
          </div>

          {/* Progress dots */}
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    );
  if (error)
    return <div className="text-red-600 text-center mt-16">{error}</div>;

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
      {certificate ? (
        <CertificateTemplate
          name={certificate.name}
          course={certificate.course}
          dateIssued={certificate.dateIssued}
          categoryName={certificate.categoryName}
          categoryCode={certificate.categoryCode}
          description={`This is to certify that ${certificate.name} ${certificate.course}.`}
          signatureLeft={certificate.signatures?.[0]?.image_b64}
          signatureRight={certificate.signatures?.[1]?.image_b64}
        />
      ) : (
        <div className="text-center">Certificate not found</div>
      )}
    </div>
  );
}

// ...existing code...
