export enum Routes {
  LANDING = 'Landing',
  NEWS_LIST = 'NewsList',
}

export type RootStackParamList = {
  [Routes.LANDING]: undefined;
  [Routes.NEWS_LIST]: undefined;
};
