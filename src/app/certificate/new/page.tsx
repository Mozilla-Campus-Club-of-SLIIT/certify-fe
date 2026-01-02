"use client";

import { FormEvent, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

export default function CertificateNew() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("")
  const [categoryCode, setCategoryCode] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [date, setDate] = useState(new Date().toDateString());
  const [issuer, setIssuer] = useState("Mozilla Campus Club of SLIIT");

  const createCertificate = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(`${API_URL}/api/certificate/new`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, course, categoryCode, categoryName, date, issuer,
        signatures: ["pmvodpn5", "szoii2l2"]
        // Seniru's note:  i have no idea how these 2 strings came from. I jsut included it as it is
        // im assuming you would want to select it with a select and do a call to the backend to get these strings
      }),
    });
    console.log(response)
  };

  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <form onSubmit={createCertificate}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="name">Course</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="categoryCode">Category code</label>
          <input
            type="text"
            id="categoryCode"
            value={categoryCode}
            onChange={(event) => setCategoryCode(event.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="categoryName">Category name</label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={(event) => setCategoryName(event.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="date">Date issued</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="issuer">Issuer</label>
          <input
            type="text"
            id="issuer"
            value={issuer}
            onChange={(event) => setIssuer(event.target.value)}
            required
          />
        </fieldset>
        {/** Seniru's note: no input field for signatures. Need to discuss how to implement it */}
        <input type="submit" />
      </form>
    </div>
  );
}
