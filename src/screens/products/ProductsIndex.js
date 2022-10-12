import React, { useEffect } from 'react';
import { filteredProducts, selectedProduct } from '../../store/IndexStore';
import { useDispatch, useSelector } from 'react-redux';

import { FlatList } from 'react-native';
import { ProductItem } from '../../components/IndexComp';
import { products } from '../../constants/data/ProductsJson';
import { styles } from './ProductsStyle';

const Products = ({navigation}) => {
  const dispatch= useDispatch();
  
  const selectCategory = useSelector((state) => state.category.selected)

  const productsFiltered = useSelector( (state) => state.products.filteredProducts);
  
  useEffect(()=> {
    dispatch(filteredProducts(selectCategory.id))
  },[]);
  
  const onSelected = ( item ) => {
    dispatch(selectedProduct(item.id))
    navigation.navigate('Product', { name: item.title });
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