import { Router } from 'express';
import { createTransaction, getPortfolio, getTransactionHistory } from '../controller/transactionController';


const router = Router();

router.post('/transactions', createTransaction);
router.get('/portfolio', getPortfolio);
router.get('/portfolio/history', getTransactionHistory);


export default router;
