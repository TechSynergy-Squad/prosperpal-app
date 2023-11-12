import { baseURL } from "../../service";
const baseTransactionUrl = `${baseURL}/Goal`;

const setGoalUrl = () => `${baseTransactionUrl}/setgoal`;
const getGoalUrl = (id: number) => `${baseTransactionUrl}/getgoal/${id}`;
const getGoalsUrl = () => `${baseTransactionUrl}/getgoals`;

export default {
  setGoalUrl,
  getGoalUrl,
  getGoalsUrl,
};
