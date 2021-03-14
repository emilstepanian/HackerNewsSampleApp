export const formatEpochToDateString = (milliseconds: number) => {
  return new Date(milliseconds * 1000).toDateString();
};
