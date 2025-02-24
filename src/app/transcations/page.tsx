import React, { useEffect, useState } from 'react';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await fetch('/api/transactions');
      const data = await res.json();
      setTransactions(data);
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((transaction: any) => (
          <li key={transaction._id}>
            {transaction.date} - {transaction.description} - {transaction.amount} - {transaction.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsPage;
