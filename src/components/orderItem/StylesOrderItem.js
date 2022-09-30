import { Colors } from '../../constants/themes/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10, 
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        backgroundColor: Colors.primary,
        height: 80,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    headerContainer: {
        
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        
    },
    total: {
        fontSize: 16,
        fontFamily: 'bold',
    },
});