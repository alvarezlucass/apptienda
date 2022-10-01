import { FlatList, Text, TouchableOpacity, View } from 'react-native'

import { CartJson } from '../../constants/data';
import IndexCartItem from '../../components/cartItem/IndexCartItem';
import React from 'react'
import { styles } from './StyleCart';

const IndexCart = (navigation) => {
    const total = 1400;
    
    const onDelete = (id) =>{
        console.warn(id);
    }
    const renderItem = ({item}) => <IndexCartItem item={item} onDelete={onDelete} />
 
    return (
        <View style={ styles.container}>
            <FlatList 
                data={CartJson}
                renderItem={renderItem}
                style={styles.containerList}
                keyExtractor={item => item.id.toString()}
            />
        </View>
        
  )
}

export default IndexCart;