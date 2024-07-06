"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transactions_1 = __importDefault(require("../models/transactions"));
const calculatePortfolio = () => __awaiter(void 0, void 0, void 0, function* () {
    const transactions = yield transactions_1.default.find();
    let totalValue = 0;
    let assetAllocation = {};
    let profitLoss = 0;
    transactions.forEach(transaction => {
        if (transaction.type === 'buy') {
            totalValue += transaction.amount * transaction.price;
            assetAllocation[transaction.asset] = (assetAllocation[transaction.asset] || 0) + transaction.amount;
        }
        else if (transaction.type === 'sell') {
            totalValue -= transaction.amount * transaction.price;
            assetAllocation[transaction.asset] = (assetAllocation[transaction.asset] || 0) - transaction.amount;
        }
        else if (transaction.type === 'deposit') {
            totalValue += transaction.amount;
        }
        else if (transaction.type === 'withdrawal') {
            totalValue -= transaction.amount;
        }
    });
    Object.keys(assetAllocation).forEach(asset => {
        if (assetAllocation[asset] === 0) {
            delete assetAllocation[asset];
        }
    });
    return {
        totalValue,
        profitLoss,
        assetAllocation
    };
});
exports.default = {
    calculatePortfolio
};
