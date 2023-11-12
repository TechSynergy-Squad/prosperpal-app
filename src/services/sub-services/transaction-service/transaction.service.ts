import transactionUrls from "./transaction.urls";
import { closedAPI } from "../../service";
import { AxiosResponse } from "axios";

export const TransactionService = {
  getTransactions: () => {
    return closedAPI
      .get(transactionUrls.getTransactionsUrl())
      .then((apiResponse: AxiosResponse) => apiResponse?.data);
  },
};
