import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStories } from '../service/hackernews';
import { setStories } from '../store/stories/actions';
import { setLoading } from '../store/ui/actions';
const useNewStories = () => {
  const stableDispatch = useCallback(useDispatch(), []);
  stableDispatch(setLoading(true));

  useEffect(() => {
    const retrieveStories = async () => {
      const stories = await fetchStories();
      stableDispatch(setStories(stories));
      stableDispatch(setLoading(false));
    };
    retrieveStories();
  }, [stableDispatch]);
};

export { useNewStories };
