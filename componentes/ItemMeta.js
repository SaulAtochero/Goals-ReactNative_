import {
    StyleSheet,
    View,
    Text,
    Pressable,

} from 'react-native';
export default function ItemMeta({ texto, id, borrarMeta }) {
    return (
        <Pressable
            android_ripple={{ color: "#210644" }}
            style={({ pressed }) => pressed && style.pressedItem}
            onPress={() => {
                borrarMeta(id)
            }}>
            <View
                style={style.vista}>
                <Text style={style.textoVista}>   -  {texto}</Text>
            </View>
        </Pressable>
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
    pressedItem: {
        opacity: 0.5,
    },
})
