"use client"

import Image from "next/image";
import logo from "@/app/assets/logo.png"
import { useEffect, useState } from "react";

const AUTH_SERVICE_URL =
  process.env.NEXT_PUBLIC_AUTH_SERVICE_URL ??
  "https://accounts.sliitmozilla.org";

export default function Login() {

  const [origin, setOrigin] = useState<string>("")

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <a
        className="cursor-pointer bg-white border border-[#FF4814] px-3 py-2 rounded-2xl"
        href={`${AUTH_SERVICE_URL}/api/authorize?redirect=${encodeURIComponent(origin)}%2Fcallback`}
      >
        <button className="flex gap-2 items-center cursor-pointer">
          <Image src={logo} alt="sliitmozilla" width={28} />
          <span className="text-xl text-black">Login with sliitmozilla</span>
        </button>
      </a>
    </div>
  );
}
