import { StyleSheet, TextInput, View, Button, Text, LogBox } from 'react-native';
import { useState } from 'react';
export default function App() {

  //Declaramos el Hook de estado de componente "newGoal"
  //      "get"      "set"
  //        |          |
  //        V          V
  const [newGoal, setNewGoal] = useState("");


  function textChangeHandler(texto) {
    setNewGoal(texto);
    console.log(newGoal);
  }

  return (
    <View style={style.container}>
      <View style={style.inputcontainer}>
        <TextInput
          style={style.TextInput}
          placeholder='Introduce una meta'
          onChangeText={textChangeHandler}
        />
        <Button
          title='Enviar'
        />
      </View>
      <View style={style.goalsContainer}>
        <Text style={style.texto}> Tu lista de metas...</Text>
      </View>
    </View>
  );
}
const style = new StyleSheet.create({
  //-------------------------------------------------------------------------------------------//
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
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
  TextInput: {
    borderColor: "#2296f3",
    borderWidth: 1,
    width: "70%",
    padding: 8,
    color: "#0c3659",
    fontWeight: "bold",
  },
  //-------------------------------------------------------------------------------------------//
  goalsContainer: {
    flex: 5,
  },
  //-------------------------------------------------------------------------------------------//
  texto: {
    fontWeight: "bold",
    fontSize: 20,
  },
  //-------------------------------------------------------------------------------------------//

})
