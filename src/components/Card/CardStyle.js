import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  search_input: {
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    margin: 4,
    borderRadius: 5,
    width: Dimensions.get('window').width / 2,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  price: {
    color: 'grey',
    fontWeight: 'bold',
  },
  inner_container: {
    padding: 10,
    paddingBottom: 0,
  },
  inStock: {
    fontWeight: 'bold',
    color: 'red',
  },
});
