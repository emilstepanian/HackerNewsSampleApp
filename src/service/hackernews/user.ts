import { User } from '../../types';

export const fetchUser = async (userId: string) =>
  fetch(`https://hacker-news.firebaseio.com/v0/user/${userId}.json`).then(
    (response) => response.json() as Promise<User>
  );
