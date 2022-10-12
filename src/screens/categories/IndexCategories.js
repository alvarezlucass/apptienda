import CategoryItem from '../../components/categoryItem/IndexCategoryItem';
import { FlatList } from 'react-native';
import React from 'react';
import { categories } from '../../constants/data/IndexData'
import { styles } from './StylesCategories';

const Categories = ({navigation, route}) => {
    const onSelected = (item) => {
        navigation.navigate('Products', { name: item.title, category: item.id});        
    }
    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected} />
  return (
    <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor= {item => item.id.toString()}
        style={styles.containerList}
    />
  )
};

export default Categories;