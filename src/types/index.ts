export type User = {
  id: string;
  karma: number;
};

export type Story = {
  id: number;
  score: number;
  time: number;
  title: string;
  url: string;
  by: string;
  userData: User;
};
