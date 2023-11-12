import goalsUrl from "./goal.urls";
import { closedAPI } from "../../service";
import { AxiosResponse } from "axios";

export const GoalService = {
  getGoal: (id: number) => {
    return closedAPI
      .get(goalsUrl.getGoalUrl(id))
      .then((apiResponse: AxiosResponse) => apiResponse?.data);
  },
  getGoals: () => {
    return closedAPI
      .get(goalsUrl.getGoalsUrl())
      .then((apiResponse: AxiosResponse) => apiResponse?.data);
  },
  setGoal: (goal: any) => {
    return closedAPI
      .post(goalsUrl.setGoalUrl(), goal)
      .then((apiResponse: AxiosResponse) => apiResponse?.data);
  },
};
