import { Transaction } from "@/app/dashboard/page";

export default function TransactionList({ transactions }: { transactions: Transaction[] }) {
  return (
    <table className="w-full mt-6 border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">Category</th>
          <th className="p-2 border">Amount</th>
          <th className="p-2 border">Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t._id} className="text-center">
            <td className="p-2 border">{t.category}</td>
            <td className="p-2 border">{t.amount}</td>
            <td className="p-2 border">{new Date(t.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
