import transactionUrls from "./transaction.urls";
import { closedAPI } from "../../service";

export const TransactionService = {
  getTransactions: () => {
    return closedAPI.get(transactionUrls.getTransactionsUrl());
  },
};
