import { Colors } from "../../constants/themes/Colors";
import { StyleSheet } from "react-native.";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height: 120,
        backgroundColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: Colors.black,
        shadowOffset: {
            with: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10,
    },
    headerContainer: {
        
    },
    title: {
        fontSize: 16,
        fontFamily: 'bold',
        color: Colors.text,
        marginBotton: 5,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content:{
        flex: 1,
    },
    quantity:{
        fontSize: 14,
        fontFamily: 'bold',
        color: Colors.text,
        marginBotton: 5,
    },
    price: {
        fontSize: 14,
        color: Colors.text,
        fontFamily: 'bold'
    },
})