import { FlatList } from 'react-native';
import { ProductItem } from '../../components/IndexComp';
import React from 'react';
import { products } from '../../constants/data/ProductsJson';
import { styles } from './ProductsStyle';

const Products = ({navigation, route}) => {
  const { categoryId } = route.params;
  const productsFiltered = products.filter( product => product.categoryId === categoryId);
  const onSelected = ( item ) => {
    navigation.navigate('Product', { name: item.title, productId: item.id});
  };
  const renderItem = ( {item}) => <ProductItem item = { item } onSelected= {onSelected} />
    return (
        <FlatList
            data={productsFiltered}
            renderItem= { renderItem}
            keyExtractor= { item => item.id.toString()}
        />
  )
};

export default Products;