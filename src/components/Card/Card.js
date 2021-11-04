import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './CardStyle';
const Card = ({store}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: store.imgURL}}></Image>
        <Text style={styles.title}>{store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
        <Text style={styles.inStock}>
          {store.inStock === true ? 'STOKTA VAR' : 'STOKTA YOK'}
        </Text>
      </View>
    </View>
  );
};

export default Card;
