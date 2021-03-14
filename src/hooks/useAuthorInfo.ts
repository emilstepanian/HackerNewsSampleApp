import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../service/hackernews';
import { AppState } from '../store/initialState';
import { updateStory } from '../store/stories/actions';
import { setLoading } from '../store/ui/actions';
const useAuthorInfo = () => {
  const stableDispatch = useCallback(useDispatch(), []);
  const {
    stories: { selectedStory },
  } = useSelector((state: AppState) => state);

  useEffect(() => {
    if (!selectedStory.userData) {
      const retrieveUserData = async () => {
        stableDispatch(setLoading(true));
        const user = await fetchUserById(selectedStory.by);
        stableDispatch(updateStory({ userData: user }));
        stableDispatch(setLoading(false));
      };

      retrieveUserData();
    }
  }, [selectedStory, stableDispatch]);
};

export { useAuthorInfo };
