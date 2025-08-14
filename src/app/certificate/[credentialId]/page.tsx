"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

type Certificate = {
  credentialId: string;
  name: string;
  course: string;
  dateIssued: string;
  issuer: string;
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
        setCertificate(data);
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

  if (loading) return <div className="text-center mt-16">Loading...</div>;
  if (error)
    return <div className="text-red-600 text-center mt-16">{error}</div>;

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-xl w-full">
        {certificate ? (
          <div className="bg-gray-50 p-6 rounded-lg border w-full text-black">
            <h2 className="text-xl font-semibold mb-4 text-center text-black">
              Certificate of Completion
            </h2>
            <p className="mb-2">
              <b>Name:</b> {certificate.name}
            </p>
            <p className="mb-2">
              <b>Course:</b> {certificate.course}
            </p>
            <p className="mb-2">
              <b>Date Issued:</b>{" "}
              {new Date(certificate.dateIssued).toLocaleDateString()}
            </p>
            <p className="mb-2">
              <b>Issuer:</b> {certificate.issuer}
            </p>
            <p>
              <b>Credential ID:</b> {certificate.credentialId}
            </p>
          </div>
        ) : (
          <div className="text-center">Certificate not found</div>
        )}
      </div>
    </div>
  );
}
