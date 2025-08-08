"use client";
import { useState } from "react";

type Certificate = {
  credentialId: string;
  name: string;
  course: string;
  dateIssued: string;
  issuer: string;
};

export default function CertificatePage() {
  const [credentialId, setCredentialId] = useState("");
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setCertificate(null);
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
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

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">View Certificate</h1>
      <form onSubmit={fetchCertificate} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Enter Credential ID"
          value={credentialId}
          onChange={(e) => setCredentialId(e.target.value)}
          className="border px-2 py-1 rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {certificate && (
        <div className="bg-gray-50 p-4 rounded border">
          <h2 className="text-xl font-semibold mb-2">
            Certificate of Completion
          </h2>
          <p>
            <b>Name:</b> {certificate.name}
          </p>
          <p>
            <b>Course:</b> {certificate.course}
          </p>
          <p>
            <b>Date Issued:</b>{" "}
            {new Date(certificate.dateIssued).toLocaleDateString()}
          </p>
          <p>
            <b>Issuer:</b> {certificate.issuer}
          </p>
          <p>
            <b>Credential ID:</b> {certificate.credentialId}
          </p>
        </div>
      )}
    </div>
  );
}
