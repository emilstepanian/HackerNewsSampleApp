export enum Routes {
  LANDING = 'Landing',
  NEWS_LIST = 'NewsList',
  STORY = 'Story',
  WEBVIEW = 'WebView',
}

export type RootStackParamList = {
  [Routes.LANDING]: undefined;
  [Routes.NEWS_LIST]: undefined;
  [Routes.STORY]: undefined;
  [Routes.WEBVIEW]: { url: string };
};
