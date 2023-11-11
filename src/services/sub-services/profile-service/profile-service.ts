import { closedAPI } from "../../service";
import { formsURL, mapReport, profileURL, reportURL } from ".";

export const ProfileService = {
  profile: () => {
    return closedAPI.get(profileURL);
  },
  forms: async () => {
    const { data } = await closedAPI.get(profileURL);
    const { id } = data;
    return closedAPI.get(formsURL, { params: { id } });
  },
  report: async () => {
    const { data } = await closedAPI.get(profileURL);
    const { id } = data;
    const res = await closedAPI.get(reportURL, { params: { id } });
    return mapReport(res.data);
  },
};
