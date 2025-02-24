"use client"; // This ensures it's rendered only on the client

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

// Prevents hydration errors by ensuring client-side rendering
const Chart = ({ data }: { data: any[] }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Avoid mismatches during hydration

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Ensures that Recharts is only loaded on the client-side
export default dynamic(() => Promise.resolve(Chart), { ssr: false });
