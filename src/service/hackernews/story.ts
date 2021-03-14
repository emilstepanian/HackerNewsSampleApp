import { Story } from '../../types';

export const fetchTopStories = async () =>
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then(
    (response) => response.json() as Promise<number[]>
  );

export const fetchStory = async (storyId: number) =>
  fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`).then(
    (response) => response.json() as Promise<Story>
  );
