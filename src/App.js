import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SearchBox from './components/Card/SearchBox';
import Card from './components/Card/Card';
import patika_store from './productData.json';

const App = () => {
  const renderitem = ({item}) => <Card store={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.text_title}>PATIKASTORE</Text>
      <View style={styles.body}>
        <FlatList
          ListHeaderComponent={() => <SearchBox />}
          horizontal={false}
          numColumns={2}
          data={patika_store}
          renderItem={renderitem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6c4c4',
  },
  text_title: {
    color: 'blue',
    fontSize: 35,
    textAlign: 'center',
  },
  body: {
    margin: 10,
  },
});

export default App;
