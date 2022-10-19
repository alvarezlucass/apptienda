import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { addToCart } from '../../store/actions/cartAction'
import { styles } from './ProductStyles';

const Product = ({navigation, route}) => {
  
    const dispatch = useDispatch();
    
    const product = useSelector ((state) => state.products.selected);
    
    const addCartItem = () => {
      dispatch(addToCart(product));
    }
    
  const { id, title, description, price, weight } = product || {};
  
  return (
    <View style={ styles.container}>
      <Text>id: {id}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>$ {price}</Text>
      <Text>weight: {weight}</Text>
      <Button
        title= 'Agregar al Carrito'
        onPress= { addCartItem }
      />
    </View>
  )
};

export default Product;