import {
  StyleSheet,
  TextInput, Text,
  View,
  Button,
  FlatList,

} from 'react-native';
import { useState } from 'react';
export default function App() {

  //Declaramos el Hook de estado de componente "newGoal"
  //      "get"      "set"
  //        |          |
  //        V          V
  const [newGoal, setNewGoal] = useState("");
  const [myGoals, setMyGoal] = useState([]);


  function textChangeHandler(texto) {
    setNewGoal(texto);
    //console.log(newGoal);
  }
  function añadirLista() {
    setMyGoal(myGoals => [...myGoals, newGoal]);
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
          onPress={añadirLista}
        />
      </View>
      <View style={style.goalsContainer}>

        <Text style={style.textoB}> Tu lista de metas..</Text>
        <FlatList
          data={myGoals}
          renderItem={(item) => (
            <View key={item.item}
              style={style.vista}>
              <Text style={style.textoVista}>   -  {item.item}</Text>
            </View>
          )

          }
        />
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
  textoB: {
    fontWeight: "bold",
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
  textoVista: {
    color: "red",
    fontSize: 20,
  },

})
