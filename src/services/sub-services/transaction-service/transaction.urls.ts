import { baseURL } from "../../service";

const baseTransactionUrl = `${baseURL}/Transactions`;

const getTransactionsUrl = () => `${baseTransactionUrl}/gettransactions`;

export default {
  getTransactionsUrl,
};
