export const mapReport = (data: any) => {
  return {
    userDetails: {
      name: data.name,
      job: data.role,
    },
    clockDetails: {
      time: data.time,
      sync: data.sync,
    },
    jobs: data.jobs,
  };
};
