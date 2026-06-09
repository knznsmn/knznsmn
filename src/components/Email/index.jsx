"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Email() {
  // TypeScript automatically infers these types!
  const [email, setEmail] = useState("Loading contact...");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const username = "hello";
    const domain = "jccesar.com";
    const fullEmail = `${username}@${domain}`;

    setEmail(fullEmail);
    setIsLoaded(true);
  }, []); // Cleaned up dependency array

  if (!isLoaded) {
    return <span className="text-gray-400">Loading...</span>;
  }

  return (
    <Link href={`mailto:${email}`}>
      {email}
    </Link>
  );
}
