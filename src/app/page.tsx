"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Personal Finance Visualizer</h1>
      <Link href="/dashboard">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">Go to Dashboard</button>
      </Link>
    </main>
  );
}
