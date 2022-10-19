import { Colors } from "../../constants/themes/IndexColors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: Colors.white,
        height: 300,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Play-Regular',
        marginVertical: 5,
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        fontFamily: 'Play-Regular',
        marginVertical: 5,
    },
    input: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Play-Regular',
        marginBottom: 10,
    },
    promptButton: {
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    prompt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 14,
        color: Colors.secondary,
        fontFamily: 'Play-Regular',
    }
});