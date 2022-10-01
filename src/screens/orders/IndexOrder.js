import { FlatList, Text, View } from 'react-native';

import IndexOrderItem from '../../components/IndexComp';
import React from 'react';
import { orders } from '../../constants/data/OrdersJson';
import { styles } from './StylesOrder';

const IndexOrder = (navigation) => {
    const onCancel = (id) => {
        console.warn(id);
    }
    const renderItem = ({item }) => <IndexOrderItem item={item} onCancel={onCancel} />
  return (
    <View style={styles.container}>
        <FlatList
            data={orders}
            renderItem={renderItem}
            keyExtractor= { item => item.id.toString()}
        />
    </View>
  )
};

export default IndexOrder;