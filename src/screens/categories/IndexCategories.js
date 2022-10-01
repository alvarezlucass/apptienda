import { Button, FlatList, Text, View } from 'react-native';

import IndexCategoryItem from '../../components';
import React from 'react';
import { categories } from '../../constants/data'
import { styles } from '../../components/cartItem/StyleCartItem';

const IndexCategories = ({navigation, route}) => {
    const onSelected = (item) => {
        navigation.navigate('Products', { name: item.title, category: item.id});        
    }
    const renderItem = ({item}) => <IndexCategoryItem item={item} onSelected={onSelected} />
  return (
    <FlatList
    data={categories}
    renderItem={renderItem}
    keyExtractor= {item => item.id.toString()}
    style={styles.containerList}
    />
  )
};

export default IndexCategories;