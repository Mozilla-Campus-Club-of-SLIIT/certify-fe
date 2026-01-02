"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AUTH_SERVICE_URL =
  process.env.NEXT_PUBLIC_AUTH_SERVICE_URL ??
  "https://accounts.sliitmozilla.org";

export default function Callback() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [authorizing, setAuthorizing] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const code = searchParams.get("code");

  useEffect(() => {
    (async () => {
      if (code === null) {
        setAuthorizing(false);
        setLoggedIn(false);
        return console.error("bad request");
      }
      try {
        setAuthorizing(true);
        const response = await fetch(
          `${AUTH_SERVICE_URL}/api/token?code=${encodeURIComponent(code)}`,
          {
            method: "POST",
          }
        );
        const result = await response.json();

        if (response.ok) {
          const token = result.data.token;
          localStorage.setItem("token", token);
          setLoggedIn(true);
          setAuthorizing(false);
          console.log("redirecting...");
          await router.replace("/");
        }
      } catch (err) {
        console.error(err);
        setLoggedIn(false);
      }
    })();
  });

  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <h3 className="text-3xl font-bold">
        {authorizing && <>Authorizing...</>}
        {!authorizing && loggedIn && <>Authorized!</>}
        {!authorizing && !loggedIn && <>Couldn't authorize</>}
      </h3>
    </div>
  );
}
