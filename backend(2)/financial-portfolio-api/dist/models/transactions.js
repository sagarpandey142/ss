"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    asset: { type: String },
    price: { type: Number },
    date: { type: Date, required: true }
});
const Transaction = (0, mongoose_1.model)('Transaction', transactionSchema);
exports.default = Transaction;
