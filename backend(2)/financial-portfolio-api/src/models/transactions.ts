import { Schema, model, Document } from 'mongoose';

interface ITransaction extends Document {
  type: 'deposit' | 'withdrawal' | 'buy' | 'sell';
  amount: number;
  asset?: string;
  price?: number;
  date: Date;
}

const transactionSchema = new Schema<ITransaction>({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  asset: { type: String },
  price: { type: Number },
  date: { type: Date, required: true }
});

const Transaction = model<ITransaction>('Transaction', transactionSchema);

export default Transaction;
