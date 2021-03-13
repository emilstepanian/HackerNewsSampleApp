import React from 'react';
import { Text, View } from '../../components';
import { useLabels } from '../../hooks/useLabels';

const AppTitle = () => {
  const { landing } = useLabels();
  return (
    <View center middle>
      <View row>
        <Text h1 bold>
          {'landing.headerTitleStart' + ' '}
        </Text>
        <Text h1 bold primary>
          {landing.headerTitleEnd}
        </Text>
      </View>
      <Text gray h3>
        {landing.headerSubtitle}
      </Text>
    </View>
  );
};

export default AppTitle;
