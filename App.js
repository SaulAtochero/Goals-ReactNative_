import {
  StyleSheet,
  TextInput, Text,
  View,
  Button,
  FlatList,

} from 'react-native';
import { useState } from 'react';
import MeterMeta from './componentes/MeterMeta';
import ItemMeta from './componentes/ItemMeta';
import { StatusBar } from 'expo-status-bar';



export default function App() {

  //Declaramos el Hook de estado de componente "newGoal"
  //      "get"      "set"
  //        |          |
  //        V          V
  const [myGoals, setMyGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)

  //me llevo el  text Change handler
  function añadirLista(newGoalText) {
    setMyGoal(myGoals => [...myGoals, {
      id: Date.now(),
      text: newGoalText,
    }]);

  }
  function onDeleteGoalHandler(id) {
    setMyGoal((myGoals) => {
      return myGoals.filter((goal) => goal.id != id)
    })
  }
  function cerrarModal() {
    setModalVisible(false);
  }
  return (
    <>
      <StatusBar style='dark' />
      <View style={style.container}>
        <MeterMeta nuevaMeta={añadirLista}
          visible={modalVisible}
          onCancel={cerrarModal} />
        <View style={style.goalsContainer}>
          <Button
            title='Añadir Meta'
            onPress={() => setModalVisible(true)}
          />
          <Text style={style.textoListaMeta}> Tu lista de metas...</Text>
          <FlatList
            data={myGoals}
            renderItem={(dataitem) => (
              <ItemMeta
                key={dataitem.item.id}
                id={dataitem.item.id}
                texto={dataitem.item.text}
                borrarMeta={onDeleteGoalHandler} />
            )

            }
          />
        </View>
      </View>
    </>
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
  textoListaMeta: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "auto",
    marginRight: "auto",
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
