
import {
    StyleSheet,
    TextInput,
    View,
    Button,
    Modal,
    Image,

} from 'react-native';
import { useState, React } from 'react';

//metemos a traves del padre, la funcionalidad de agregar a ala lista por eso ponemos props
export default function MeterMeta({ nuevaMeta, visible, onCancel }) {

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
        <Modal visible={visible}
            animationType='slide'>
            <Image source={require("../assets/img/lista.png")}
                style={style.imagen} />
            <View style={style.inputcontainer}>
                <TextInput
                    style={style.TextInput}
                    value={newGoal}
                    placeholder='Introduce una meta'
                    onChangeText={textChangeHandler}

                />
                <View style={style.containerAcceptCancel}>
                    <View style={style.boton}>
                        <Button
                            color="#f13f42"
                            title='Cancelar'
                            onPress={onCancel}
                        />
                    </View>

                    <View style={style.boton}>
                        <Button
                            color="#009000"
                            title='Enviar'
                            onPress={pulsar}
                        />
                    </View>


                </View>
            </View>
        </Modal>
    )
}
//Traigo el style a este componente
const style = new StyleSheet.create({
    //-------------------------------------------------------------------------------------------//
    inputcontainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#2296f3",
        alignItems: "center",
    },
    //-------------------------------------------------------------------------------------------//
    containerAcceptCancel: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        alignItems: "center",
    },
    //-------------------------------------------------------------------------------------------//
    boton: {
        width: "30%",
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
    },
    //-------------------------------------------------------------------------------------------//
    TextInput: {
        borderColor: "#2296f3",
        borderWidth: 1,
        width: "70%",
        padding: 8,
        color: "#0c3659",
        fontWeight: "bold",
    },
    //-------------------------------------------------------------------------------------------//
    imagen: {
        marginLeft: "20%",
        maxHeight: "50%",
        maxWidth: "60%",
    },
    //-------------------------------------------------------------------------------------------//
})