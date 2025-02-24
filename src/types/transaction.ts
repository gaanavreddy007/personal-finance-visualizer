export interface Transaction {
  _id?: string; // Optional ID
  amount: number;
  category: string;
  description: string;
  date: string;
}
