import { fetchStory, fetchTopStories } from './story';
import { fetchUser } from './user';
import { getRandomSubsetOfArray } from '../../helpers/getRandomSubsetOfArray';

export const fetchUserById = async (authorId: string) => {
  return fetchUser(authorId);
};

export const fetchStories = async () => {
  const topStoryIds = await fetchTopStories();

  const selectedTopStoryIds: number[] = getRandomSubsetOfArray(topStoryIds, 10);

  const stories = await Promise.all(
    selectedTopStoryIds.map((storyId) => fetchStory(storyId))
  );

  stories.sort((a, b) => (a.score < b.score ? 1 : -1));

  return stories;
};
/*
    I have left below initial implementations, to highlight what kind of insecurities I can have.
    For instance, I wanted to go away from promises into async/await. However, then I thought that
    it is not nice to declare these constants as seen above  that happens when you try to 'flatten'
    and decompose the logic with async/awaits, as it allocates memory for the constant.
    I end up in a dilemma not knowing what to focus on: Save amount of constants to save memory, or 'flatten' the logic?
    Stuff like this is where one simple indication from a more experienced programmer, can help me quickly
    know the dos and dont's.
    I chose to go with the flattened logic.

  Second implementation = Solution where we don't create any constants, thus saving memory?
    return await fetchTopStories()
    .then((topStories) => getRandomSubsetOfArray(topStories, 10))
    .then((selectedStories) =>
      selectedStories.map((storyId) => fetchStory(storyId))
    )
    .then((storyPromises) => Promise.all(storyPromises))
    .catch((error) => {
      console.error(error);
    });


  First implementation = Promise solution
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then((response) => response.json())
    .then((storyIds) => getRandom(storyIds, 10))
    .then((selectedStories) => {
      return selectedStories.map((storyId) => {
        return fetch(
          `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`,
        ).then((response) => {
          return response.json();
        });
      });
    })
    .then((promises) => Promise.all(promises))
    .catch((error) => {
      console.error(error);
    });

    */
