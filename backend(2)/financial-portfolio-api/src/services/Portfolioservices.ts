import Transaction from '../models/transactions';

const calculatePortfolio = async () => {
  const transactions = await Transaction.find();
  let totalValue = 0;
  let assetAllocation: { [key: string]: number } = {};
  let profitLoss = 0;

  transactions.forEach(transaction => {
    if (transaction.type === 'buy') {
      totalValue += transaction.amount * transaction.price!;
      assetAllocation[transaction.asset!] = (assetAllocation[transaction.asset!] || 0) + transaction.amount;
    } else if (transaction.type === 'sell') {
      totalValue -= transaction.amount * transaction.price!;
      assetAllocation[transaction.asset!] = (assetAllocation[transaction.asset!] || 0) - transaction.amount;
    } else if (transaction.type === 'deposit') {
      totalValue += transaction.amount;
    } else if (transaction.type === 'withdrawal') {
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
};

export default {
  calculatePortfolio
};
