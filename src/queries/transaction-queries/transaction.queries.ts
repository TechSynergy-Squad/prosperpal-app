import { useQuery } from "@tanstack/react-query";
import { TransactionService } from "../../services/sub-services/transaction-service/transaction.service";

export const useGetTransactionsQuery = () => {
  return useQuery({
    queryKey: ["TransactionService.getTransactions"],
    queryFn: () => TransactionService.getTransactions(),
  });
};
