import { Request, Response } from 'express';
import Transaction from '../models/transactions';
import portfolioService from '../services/Portfolioservices';

export const createTransaction = async (req: Request, res: Response) => {
  try {
    console.log("data")
    const { type, amount, asset, price, date } = req.body;
    const transaction = new Transaction({ type, amount, asset, price, date });
    await transaction.save();
    console.log("hii")
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getPortfolio = async (req: Request, res: Response) => {
  try {
    const portfolio = await portfolioService.calculatePortfolio();
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getTransactionHistory = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
