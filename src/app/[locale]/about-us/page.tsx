import Link from "next/link";
import React from "react";

export default async function AboutPage() {
  return (
    <main>
      <h1>About us</h1>
      <p>
        <b>Our Address</b>
      </p>
      <p>
        123 example
        <br />
        Cairo
      </p>
      <Link href="/">Home</Link>
    </main>
  );
}
