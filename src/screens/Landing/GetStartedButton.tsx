import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { GradientButton, Text, View } from '../../components';
import { useLabels } from '../../hooks/useLabels';
import { Routes } from '../../navigation/types';

const GetStartedButton = () => {
  const { landing } = useLabels();

  const navigation = useNavigation();

  const navigateToNewsList = () => navigation.navigate(Routes.NEWS_LIST);

  return (
    <View middle>
      <GradientButton onPress={navigateToNewsList}>
        <Text white bold center>
          {landing.getStartedButtonText}
        </Text>
      </GradientButton>
    </View>
  );
};

export default GetStartedButton;
