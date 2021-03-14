export interface LanguageProps {
  landing: {
    headerTitleStart: string;
    headerTitleEnd: string;
    headerSubtitle: string;
    description: string;
    getStartedButtonText: string;
    loadingStories: string;
  };

  newsList: {
    headerTitle: string;
  };

  story: {
    dateCreated: string;
    score: string;
    url: string;
    by: string;
    authorKarma: string;
    loadingAuthorInfo: string;
    authorInfo: string;
  };
}
