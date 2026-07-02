import { StyleSheet, Text, View } from 'react-native';

export default function Perfil() {
  return (
    <View style={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ backgroundColor: 'salmon', padding: 50, borderRadius: 10, margin: 20, alignItems: 'flex-start', width: '30%' }}>

            <View style={styles.datos}>
                <Text style={styles.txt}>Nombre: </Text>
                <Text>Wanda</Text>
            </View>
            <View style={styles.datos}>
                <Text style={styles.txt}>Edad: </Text>
                <Text>18</Text>
            </View>
            <View style={styles.datos}>
                <Text style={styles.txt}>Curso: </Text>
                <Text>7*1</Text>
            </View>
            
        </View>
        
    </View>

  );
}

const styles = StyleSheet.create({
    txt: {
        color: '#000', 
        fontWeight: 'bold'
    },
    datos: {
        display: 'flex', 
        flexDirection: 'row', 
    }
});
