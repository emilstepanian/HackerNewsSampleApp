import React from 'react';
import { GradientButton, Text, View } from '../../components';
import { useLabels } from '../../hooks/useLabels';
import { fetchStories } from '../../service/hackernews';

const GetStartedButton = () => {
  const { landing } = useLabels();

  //const navigation = useNavigation();

  // const navigateToNewsList = () => navigation.navigate(Routes.NEWS_LIST);

  const retrieveData = async () => {
    const data = await fetchStories();
    console.log(data[0].score);
  };

  return (
    <View middle>
      <GradientButton onPress={retrieveData}>
        <Text white bold center>
          {landing.getStartedButtonText}
        </Text>
      </GradientButton>
    </View>
  );
};

export default GetStartedButton;
