import TransactionModel from "@/models/Transaction";
import { connectDB } from "./db";

export async function getTransactions() {
  await connectDB();
  return await TransactionModel.find().sort({ date: -1 }).lean();
}
