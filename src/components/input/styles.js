import { Colors } from '../../constants/themes/IndexColors';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        paddingVertical: 5,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Play-Regular',
        marginBottom: 10,
    },
    message: {
        marginVertical: 5,
    },
    helperText: {
        fontSize: 12,
        fontFamily: 'Play-Regular',
        color: #ff0000,
    }
});