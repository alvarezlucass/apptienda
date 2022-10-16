import { Button, Text, View } from 'react-native';
import React, { useDebugValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { products } from '../../constants/data/ProductsJson';
import { styles } from './ProductStyles';

// import { selectedProduct } from '../../store/IndexStore';


const Product = ({navigation, route}) => {
    // const dispatch = useDispatch();
    // const product = useSelector ((state) => state.products.selected);
    const selectedProduct = useSelector((state) => state.products.selected);
    const product = products.find(product => product.id === productId);
    // const addCartItem = () => {
    //   dispatch(addToCart(product));
    // }
    
  // const { id, title, description, price, weight } = product || {};
  return (
    <View style={ styles.container}>
      <Text>id: {product.id}</Text>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
      <Text>weight: {product.weight}</Text>
      {/* <Button
        title= 'Agregar al Carrito'
        onPress= { addCartItem } */}
      {/* /> */}
    </View>
  )
};

export default Product;