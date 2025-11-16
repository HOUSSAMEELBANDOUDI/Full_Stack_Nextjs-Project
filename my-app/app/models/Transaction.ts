import mongoose from "mongoose";

export interface Transaction {
  _id: mongoose.Types.ObjectId;
  amount: number;
  name: string;
  userId: mongoose.Schema.Types.ObjectId;
  startDate: Date;
}

const transactionSchema = new mongoose.Schema<Transaction>(
  {
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    name: {
      type: String,
      required: [true, "Transaction name is required"],
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      ref: "User", // Reference to the User model
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

// Optional: Static method to create transaction inside a session
transactionSchema.statics.createTransaction = async function (
  transactionData: Partial<Transaction>,
  session?: mongoose.ClientSession
) {
  return this.create([transactionData], session ? { session } : {});
};

const TransactionModel = mongoose.model<Transaction>(
  "Transaction",
  transactionSchema
);

export default TransactionModel;
