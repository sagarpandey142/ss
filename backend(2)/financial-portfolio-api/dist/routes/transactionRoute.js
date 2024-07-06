"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionController_1 = require("../controller/transactionController");
const authMiddleware_1 = __importDefault(require("../auth/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/transactions', authMiddleware_1.default, transactionController_1.createTransaction);
router.get('/portfolio', authMiddleware_1.default, transactionController_1.getPortfolio);
router.get('/portfolio/history', authMiddleware_1.default, transactionController_1.getTransactionHistory);
exports.default = router;
