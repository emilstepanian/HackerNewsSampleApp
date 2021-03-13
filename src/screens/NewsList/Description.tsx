import React from 'react';
import { Text, View } from '../../components';
import { useLabels } from '../../hooks/useLabels';

const Description = () => {
  const { landing } = useLabels();
  return (
    <View center middle>
      <Text h2>{landing.description}</Text>
    </View>
  );
};

export default Description;
