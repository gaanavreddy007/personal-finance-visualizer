"use client";

import React, { useState } from "react";
import TransactionForm from "../../components/TransactionForm";
import Chart from "../../components/Chart";

const Dashboard = () => {
  const [transactions, setTransactions] = useState<{ date: string; amount: number }[]>([]);

  const addTransaction = (newTransaction: { date: string; amount: number }) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <div>
      <h1>Personal Finance Dashboard</h1>
      <TransactionForm addTransaction={addTransaction} />
      <Chart data={transactions} />
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>{t.date}: ${t.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
