export type ProfileProps = {
  ID: string;
  Status: string;
  Address: string;
  Phone: string;
  Email: string;
};

export type FormPanelProps = {
  name?: string;
  description?: string;
};

export type UserProps = {
  name: string;
  job: string;
  email?: string;
  profile?: string;
};

export type UserPanelProps = {
  className?: string;
  userDetails: UserProps;
};

export type GoalPanelProps = {
  bank?: string;
  className?: string;
  percentage: number;
  connected: boolean;
  time: string;
};

export type JobProps = {
  name: string;
  clock: string;
};

export type JobPanelProps = {
  className?: string;
  jobs: JobProps[];
};
