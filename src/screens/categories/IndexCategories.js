import { CategoriesJson } from '../../constants/data/IndexData'
import { FlatList } from 'react-native';
import IndexCategoryItem from '../../components/categoryItem/IndexCategoryItem';
import React from 'react';
import { styles } from './StylesCategories';

const IndexCategories = ({navigation, route}) => {
    const onSelected = (item) => {
        navigation.navigate('Products', { name: item.title, category: item.id});        
    }
    const renderItem = ({item}) => <IndexCategoryItem item={item} onSelected={onSelected} />
  return (
    <FlatList
        data={CategoriesJson}
        renderItem={renderItem}
        keyExtractor= {item => item.id.toString()}
        style={styles.containerList}
    />
  )
};

export default IndexCategories;