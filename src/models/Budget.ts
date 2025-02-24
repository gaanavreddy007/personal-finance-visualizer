import mongoose, { Schema, Document } from "mongoose";

export interface IBudget extends Document {
  category: string;
  amount: number;
  month: string;
}

const BudgetSchema = new Schema<IBudget>({
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  month: { type: String, required: true },
});

export default mongoose.models.Budget ||
  mongoose.model<IBudget>("Budget", BudgetSchema);
