import { Text, View } from 'react-native';

import React from 'react';
import { products } from '../../constants/data/ProductsJson';
import { styles } from './ProductStyles';

const ProductIndex = ({navigation, route}) => {
    const { productId } = route.params;
    const product = products.find(product => product.id === productId);
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

export default ProductIndex;