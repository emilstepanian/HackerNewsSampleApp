import { fetchStory, fetchTopStories } from './story';
import { getRandomSubsetOfArray } from '../../helpers/getRandomSubsetOfArray';

export const fetchStories = async () => {
  const topStoryIds = await fetchTopStories();

  const selectedTopStoryIds = getRandomSubsetOfArray(topStoryIds, 10);

  return Promise.all(selectedTopStoryIds.map((storyId) => fetchStory(storyId)));

  /*
    I have left below initial implementations, to highlight what kind of insecurities I can have.
    For instance, I wanted to go away from promises into async/await. However, then I thought that
    it is not nice to declare all these constants as seen above that happens when you try to 'flatten'
    and decompose the logic with async/awaits.
    I end up in a dilemma not knowing what to focus on: Save amount of constants, or 'flatten' the logic?
    Stuff like this is where one simple indication from a more experienced programmer, can help me quickly
    the dos and dont's.
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
};
