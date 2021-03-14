import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { GradientButton, Text, View } from '../../components';
import { useLabels } from '../../hooks/useLabels';
import { Routes } from '../../navigation/types';
import { fetchStories } from '../../service/hackernews';
import { setStories } from '../../store/stories/actions';
import { setLoading } from '../../store/ui/actions';

const GetStartedButton = () => {
  const { landing } = useLabels();

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const navigateNewsList = async () => {
    dispatch(setLoading(true));

    const stories = await fetchStories();
    dispatch(setStories(stories));
    dispatch(setLoading(false));
    navigation.navigate(Routes.NEWS_LIST);
  };

  return (
    <View middle>
      <GradientButton onPress={navigateNewsList}>
        <Text white bold center>
          {landing.getStartedButtonText}
        </Text>
      </GradientButton>
    </View>
  );
};

export default GetStartedButton;
