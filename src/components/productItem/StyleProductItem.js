import { Colors } from '../../constants/themes';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        height: 120,
    },
    item: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Play-Regular',
        fontSize: 18,
    },
    price: {
        fontFamily: 'Play-Regular',
        fontSize: 16,
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detail: {
        fontFamily: 'Play-Regular',
        fontSize: 14,
    },
});