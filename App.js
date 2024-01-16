import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.inputcontainer}>
        <TextInput style={style.TextInput} placeholder='Introduce una meta' />
        <Button title='Enviar' />
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
  TextInput: {
    borderColor: "#2296f3",
    borderWidth: 1,
    width: "70%",
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  texto: {
    fontWeight: "bold",
    fontSize: 20,
  },
})
