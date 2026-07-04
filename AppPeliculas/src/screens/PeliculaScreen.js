import { Pressable, View } from "react-native";
import { ScrollView, Text, StyleSheet } from "react-native";


export default function PeliculaScreen({route, navigation}) {
  const {datoPeli} = route.params;
  return (
   <ScrollView>
      <View style = {styles.container}>
        <Text> Nombre: {datoPeli.Nombre}</Text>
        <Text> Año: {datoPeli.Anio}</Text>
        <Text> Genero: {datoPeli.Genero}</Text>

        <Pressable onPress={() => navigation.goBack()} style={{backgroundColor: 'salmon', width: '5%', alignItems: 'center', margin: 10, padding: 10}}>
          <Text>Atras</Text>
        </Pressable>
      </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    padding: 100,
  },
})
