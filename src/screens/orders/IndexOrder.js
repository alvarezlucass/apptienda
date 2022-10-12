import { FlatList, View } from 'react-native';

import OrderItem from '../../components/IndexComp';
import React from 'react';
import { styles } from './StylesOrder';
import { useSelector } from 'react-redux';

const Order = (navigation) => {
  const orders = useSelector(state => state.orders.list);
  
    const onCancel = (id) => {
        console.warn(id);
    }
    const renderItem = ({item }) => <OrderItem item={item} onCancel={onCancel} />
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

export default Order;