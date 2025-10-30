import Link from "next/link";
import React from "react";

export default function Employee() {
  const username = "Abdus Satter";
  return (
    <main className="flex flex-row items-center justify-center gap-10 min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1>Welcome to about us page {username}</h1>
        <Link className="underline" href={"/"}>
          Home Page
        </Link>
      </div>
    </main>
  );
}
