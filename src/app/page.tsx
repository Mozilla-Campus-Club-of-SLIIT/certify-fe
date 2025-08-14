"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Certificate = {
  credentialId: string;
  name: string;
  course: string;
  dateIssued: string;
  issuer: string;
};

export default function Home() {
  console.log("Certify Home page loaded");
  const [credentialId, setCredentialId] = useState("");
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setCertificate(null);
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
      const res = await fetch(`${baseUrl}/api/certificate/${credentialId}`);
      if (!res.ok) throw new Error("Certificate not found");
      // Redirect to certificate details page
      router.push(`/certificate/${credentialId}`);
      // Optionally, you can skip the following lines since you redirect:
      // const data = await res.json();
      // setCertificate(data);
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

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl p-10 flex flex-col items-center max-w-xl w-full">
        {/* <Image
          src="/mozilla-logo.png"
          alt="Certify Logo"
          width={100}
          height={100}
          className="mb-6"
          priority
        /> */}
        <h1 className="text-4xl font-bold text-orange-500 mb-4 text-center">
          Certify
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Easily verify and showcase your achievements with Certify. Check
          validity of sliitmozilla certificates in seconds.
        </p>

        <form onSubmit={fetchCertificate} className="mb-6 flex gap-2 w-full">
          <input
            type="text"
            placeholder="Enter Credential ID"
            value={credentialId}
            onChange={(e) => setCredentialId(e.target.value)}
            className="border px-3 py-2 rounded-lg w-full text-black font-bold"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            disabled={loading}
          >
            {loading ? "Loading..." : "Check"}
          </button>
        </form>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        {certificate && (
          <div className="bg-gray-50 p-6 rounded-lg border w-full">
            <h2 className="text-xl font-semibold mb-4 text-center">
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
        )}
      </div>
    </div>
  );
}
