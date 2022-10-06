import { Colors } from "../../constants/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    containerList:{
        flex: 1,
        backgroundColor: '#ffff',
    },
    footer: {
        borderTopColor: Colors.primary,
        borderTopWidth: 1,
        paddingVertical: 10,
        marginBottom: 10,
        marginHorizontal: 10,        
    },
    buttonConfirm: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textButtonConfirm:{
        fontFamily: 'Play-Regular',
        fontSize: 14,
    },
    totalContainer:{
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalTitle: {
        fontFamily: 'Play-Regular',
        fontSize: 14,
    },
    total:{
        fontFamily: 'Play-Regular',
        fontSize: 16,
    },
});