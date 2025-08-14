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
      {certificate ? (
        <CertificateTemplate
          name={certificate.name}
          course={certificate.course}
          dateIssued={certificate.dateIssued}
          description={`This is to certify that ${certificate.name} has contributed as a ${certificate.course}.`}
        />
      ) : (
        <div className="text-center">Certificate not found</div>
      )}
    </div>
  );
}
// ...existing code...
