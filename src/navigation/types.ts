export enum Routes {
  LANDING = 'Landing',
  NEWS_LIST = 'NewsList',
  ARTICLE = 'Article',
}

export type RootStackParamList = {
  [Routes.LANDING]: undefined;
  [Routes.NEWS_LIST]: undefined;
  [Routes.ARTICLE]: undefined;
};
