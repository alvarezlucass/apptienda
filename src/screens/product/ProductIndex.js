import { Text, View } from 'react-native';

import { ProductsJson } from '../../constants/data/ProductsJson';
import React from 'react';
import { styles } from './ProductStyles';

const Product = ({navigation, route}) => {
    const { productId } = route.params;
    const product = ProductsJson.find(product => product.id === productId);
  return (
    <View style={ styles.container}>
      <Text>id: {product.id}</Text>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
      <Text>weight: {product.weight}</Text>
    </View>
  )
};

export default Product;