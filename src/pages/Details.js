import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Details({ route }) {

  const navigation = useNavigation();
  const { cidade } = route.params;
  console.log(route.params);

  return (
    <View style={styles.container} >
      <Image
        style={styles.fotos}
        source={{ uri: `http://10.0.2.2:3000/asset/${cidade.foto}` }}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
          onPress={() => navigation.navigate('Feed')}>
          <AntDesign style={styles.icon} name="leftcircleo" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title1}>{cidade.nome}</Text>
      </View>

      <View>
        <Text style={styles.title}>{cidade.descricao}</Text>
        <Text style={styles.title}>{cidade.localizacao.cidade}</Text>
        <Text style={styles.title}>Endereço: {cidade.localizacao.logradouro}</Text>
        <Text style={styles.title}>{cidade.horario_funcionamento}</Text>

      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 70,
    position: 'relative',


  },
  icon: {
    marginTop: 8,
    marginRight:16,
  },
  title1: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: 'center',
    padding: 10,
    top: 20,
    marginBottom: 30
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fotos: {
    width: "100%",
    height: "30%",
    borderRadius: 5,
    bottom: 38,

  }
});