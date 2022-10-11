import { FlatList } from 'react-native';
import { IndexProductItem } from '../../components/IndexComp';
import { ProductsJson } from '../../constants/data/ProductsJson';
import React from 'react';
import { styles } from './ProductsStyle';

const ProductsIndex = ({navigation, route}) => {
  const { categoryId } = route.params;
  const productsFiltered = ProductsJson.filter( product => product.categoryId === categoryId);
  const onSelected = ( item ) => {
    navigation.navigate('Product', { name: item.title, productId: item.id});
  };
  const renderItem = ( {item}) => <IndexProductItem item = { item } onSelected= {onSelected} />
    return (
        <FlatList
            data={productsFiltered}
            renderItem= { renderItem}
            keyExtractor= { item => item.id.toString()}
        />
  )
};

export default ProductsIndex;