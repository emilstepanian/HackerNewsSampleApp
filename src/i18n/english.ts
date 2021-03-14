import { LanguageProps } from './types';

const language: LanguageProps = {
  landing: {
    headerTitleStart: 'Hacker',
    headerTitleEnd: 'News',
    headerSubtitle: 'Sample app',
    description:
      'App utilizes the Hacker News API to display 10 randomized top stories ordered by their score. \n\nClicking on a story, one gets the options of viewing displayed information and opening the URL.',
    getStartedButtonText: 'Get started',
    loadingStories: 'Loading stories',
  },
  newsList: {
    headerTitle: 'Top Stories',
  },
  story: {
    dateCreated: 'Date Created',
    score: 'Score',
    url: 'Link',
    by: 'By',
    authorKarma: 'Their karma',
    loadingAuthorInfo: 'Loading author',
    authorInfo: 'Author Information',
  },
};
export default language;
