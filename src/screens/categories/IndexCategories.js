import { CategoriesJson } from '../../constants/data/IndexData'
import CategoryItem from '../../components/categoryItem/IndexCategoryItem';
import { FlatList } from 'react-native';
import React from 'react';
import { styles } from './StylesCategories';

const Categories = ({navigation, route}) => {
    const onSelected = (item) => {
        navigation.navigate('Products', { name: item.title, category: item.id});        
    }
    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected} />
  return (
    <FlatList
        data={CategoriesJson}
        renderItem={renderItem}
        keyExtractor= {item => item.id.toString()}
        style={styles.containerList}
    />
  )
};

export default Categories;