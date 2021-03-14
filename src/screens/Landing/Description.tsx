import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components';
import { Sizes } from '../../constants';
import { useLabels } from '../../hooks/useLabels';

const Description = () => {
  const { landing } = useLabels();
  return (
    <View center middle style={styles.container}>
      <Text center h2>
        {landing.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Sizes.padding,
  },
});

export default Description;
