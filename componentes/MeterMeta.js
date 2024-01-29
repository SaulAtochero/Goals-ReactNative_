
import {
    StyleSheet,
    TextInput,
    View,
    Button,

} from 'react-native';
import { useState, React } from 'react';

//metemos a traves del padre, la funcionalidad de agregar a ala lista por eso ponemos props
export default function MeterMeta({ nuevaMeta }) {

    const [newGoal, setNewGoal] = useState("");
    function textChangeHandler(texto) {
        setNewGoal(texto);
        //console.log(newGoal);
    }
    function pulsar() {
        if (newGoal) {
            nuevaMeta(newGoal)
        }
        setNewGoal("");
    }
    return (
        //Traigo el componente de meter las metas, de App.js
        <View style={style.inputcontainer}>
            <TextInput
                style={style.TextInput}
                value={newGoal}
                placeholder='Introduce una meta'
                onChangeText={textChangeHandler}

            />
            <Button
                title='Enviar'
                onPress={pulsar}
            />
        </View>
    )
}
//Traigo el style a este componente
const style = new StyleSheet.create({
    //-------------------------------------------------------------------------------------------//
    inputcontainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#2296f3",
        alignItems: "center",
    },
    //-------------------------------------------------------------------------------------------//
})