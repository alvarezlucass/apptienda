import CategoryItem from '../../components/categoryItem/IndexCategoryItem';
import { FlatList } from 'react-native';
import React from 'react';
import { styles } from './StylesCategories';
import { useSelector } from 'react-redux';

const Categories = ({navigation, route}) => {
    const categories = useSelector((state) => state.category.categories);
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