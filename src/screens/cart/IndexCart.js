import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../../components/IndexComp';
import React from 'react';
import { styles } from './StyleCart';

const Cart = (navigation) => {
    const dispatch = useDispatch();
    const total = useSelector(state => state.cart.total);
    const items = useSelector(state => state.cart.items);
    
    const onDelete = (id) =>{
        dispatch(removeFromCart(id))
    }
    const onConfirm = () => {
        dispatch(confirmCart(items, total));
    }
    const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete} />
 
    return (
        <View style={ styles.container}>
            <View style={styles.containerList}>
            <FlatList 
                data={items}
                renderItem={renderItem}
                style={styles.containerList}
                keyExtractor={item => item.id.toString()}
            />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={items.length === 0 ? styles.disabledButtonConfirm : styles.buttonConfirm}
                    onPress={onConfirm}
                    disabled={items.length === 0}
                >            
                    <Text style={styles.textButtonConfirm}>Confirmar</Text>
                    <View style={styles.totalContainer}>
                        <Text style={ styles.totalTitle}>Total: </Text>
                        <Text style={styles.total}> $ {total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
  )
};

export default Cart;