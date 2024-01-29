import {
    StyleSheet,
    View,
    Text,

} from 'react-native';
export default function ItemMeta({ texto }) {
    return (
        <View
            style={style.vista}>
            <Text style={style.textoVista}>   -  {texto}</Text>
        </View>
    )
}
const style = new StyleSheet.create({
    //-------------------------------------------------------------------------------------------//
    textoVista: {
        color: "red",
        fontSize: 20,
    },
    //-------------------------------------------------------------------------------------------//
    vista: {
        marginBottom: 5,
        borderRadius: 8,
        padding: 6,
        borderBottomColor: "red",
        borderBottomWidth: 7,
        borderTopColor: "red",
        borderTopWidth: 7,
        backgroundColor: "yellow",
    },
    //-------------------------------------------------------------------------------------------//
})
