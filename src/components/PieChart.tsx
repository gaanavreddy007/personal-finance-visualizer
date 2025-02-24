import { PieChart as RePieChart, Pie, Tooltip, Cell } from "recharts";
import type { Transaction } from "@/models/Transaction"; // ✅ FIXED IMPORT

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PieChart({ transactions }: { transactions: Transaction[] }) {
  const categoryTotals = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.keys(categoryTotals).map((category, index) => ({
    name: category,
    value: categoryTotals[category],
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <RePieChart width={400} height={300}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label />
      <Tooltip />
    </RePieChart>
  );
}
