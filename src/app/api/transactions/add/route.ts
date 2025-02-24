import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import TransactionModel from "@/models/Transaction";

export async function GET() {
  await connectDB();
  const transactions = await TransactionModel.find().sort({ date: -1 });
  return NextResponse.json(transactions);
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { category, amount, date } = await req.json();
    const transaction = new TransactionModel({ category, amount, date });
    await transaction.save();
    return NextResponse.json({ success: true, transaction });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Error saving transaction" }, { status: 500 });
  }
}
