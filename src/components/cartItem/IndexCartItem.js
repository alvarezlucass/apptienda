import { Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '../../constants/themes/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { styles } from './StyleCartItem';

const IndexCartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.contentContainer}>
            <View style={styles.content}>
                <Text style={ styles.quantity}>{item.quantity}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
                <Ionicons name="trash" size={24} color={Colors.text} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default IndexCartItem;