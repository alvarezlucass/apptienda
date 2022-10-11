import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { styles } from './StyleProductItem';

const IndexProductItem = ({item, onSelected}) => {
  return (
    <View style={ styles.container}>
        <TouchableOpacity style={styles.item} onPress= {() => onSelected(item)}>
          <Text style={styles.title}>{item.title}</Text>
          <View style= { styles.detailContainer}>
            <Text style={ styles.price}>${item.price}</Text>
            <Text style={styles.detail}>weight: {item.weight}</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default IndexProductItem;