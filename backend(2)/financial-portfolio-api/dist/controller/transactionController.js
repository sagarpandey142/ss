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
exports.getTransactionHistory = exports.getPortfolio = exports.createTransaction = void 0;
const transactions_1 = __importDefault(require("../models/transactions"));
const Portfolioservices_1 = __importDefault(require("../services/Portfolioservices"));
const createTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, amount, asset, price, date } = req.body;
        const transaction = new transactions_1.default({ type, amount, asset, price, date });
        yield transaction.save();
        res.status(201).json(transaction);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.createTransaction = createTransaction;
const getPortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const portfolio = yield Portfolioservices_1.default.calculatePortfolio();
        res.json(portfolio);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getPortfolio = getPortfolio;
const getTransactionHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactions = yield transactions_1.default.find();
        res.json(transactions);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getTransactionHistory = getTransactionHistory;
