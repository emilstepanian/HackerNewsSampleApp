export const fetchTopStories = async () =>
  fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  ).then((response) => response.json());

export const fetchStory = async (storyId: number) =>
  fetch(
    `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
  ).then((response) => response.json());
