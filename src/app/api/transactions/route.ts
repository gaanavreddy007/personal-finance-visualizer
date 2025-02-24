import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import TransactionModel from "@/models/Transaction";

export async function GET() {
  try {
    await connectDB();
    const transactions = await TransactionModel.find().lean();
    
    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching transactions:", error);
    return NextResponse.json({ error: "Failed to fetch transactions" }, { status: 500 });
  }
}
