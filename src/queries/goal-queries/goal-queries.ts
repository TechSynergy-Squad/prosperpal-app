import { useQuery } from "@tanstack/react-query";
import { GoalService } from "../../services/sub-services/goal-service";

export const useGoalsQuery = () => {
  return useQuery({
    queryKey: ["GoalService.getGoals"],
    queryFn: () => GoalService.getGoals(),
  });
};
