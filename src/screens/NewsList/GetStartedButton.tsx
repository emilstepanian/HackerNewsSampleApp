import React from 'react';
import { GradientButton, Text, View } from '../../components';
import { useLabels } from '../../hooks/useLabels';

const GetStartedButton = () => {
  const { landing } = useLabels();
  return (
    <View middle>
      <GradientButton>
        <Text white bold center>
          {landing.getStartedButtonText}
        </Text>
      </GradientButton>
    </View>
  );
};

export default GetStartedButton;
