"use client"; // Ensure this runs only on the client

import React, { useState } from "react";

const TransactionForm = ({ addTransaction }: { addTransaction: any }) => {
  const [formData, setFormData] = useState({ date: "", amount: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.amount) return alert("Fill all fields");
    addTransaction({ ...formData, amount: Number(formData.amount) });
    setFormData({ date: "", amount: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
