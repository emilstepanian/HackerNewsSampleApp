import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStories } from '../service/hackernews';
import { setStories } from '../store/stories/actions';
import { setAppInitializing } from '../store/ui/actions';
const useStories = () => {
  const stableDispatch = useCallback(useDispatch(), []);

  useEffect(() => {
    const retrieveStories = async () => {
      const stories = await fetchStories();
      stableDispatch(setStories(stories));
      stableDispatch(setAppInitializing(false));
    };
    retrieveStories();
  }, [stableDispatch]);
};

export { useStories };
