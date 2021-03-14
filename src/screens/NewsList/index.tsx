import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { Header, Screen, Text } from '../../components';
import { Palette, Sizes } from '../../constants';

const NewsList = () => {
  //var [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const data = [{ name: 'emil' }, { name: 'Silva' }];

  return (
    <Screen style={styles.container}>
      <Header title="Top stories" onNavBack={() => navigation.goBack()} />
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl
            colors={[Palette.white, Palette.secondary]}
            progressBackgroundColor={Palette.primary}
            refreshing={false}
            onRefresh={() => {}}
          />
        }
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </Screen>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: Sizes.padding,
  },
});

export default NewsList;
