import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Profile({ userInfo }) {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
      <AntDesign name="leftcircleo" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.user}>
        <Image style={styles.image} source={require('../asset/user.jpg')} />
        <Text style={styles.labelName}>Jaka </Text>
      </View>

      <Text style={styles.label}>Conta Conectada <AntDesign name="right" size={14} color="black" /></Text>
      <Text style={styles.label}>Privacidade e Segurança<AntDesign name="right" size={14} color="black" /></Text>
      <Text style={styles.label}>Configuração de Login  <AntDesign name="right" size={14} color="black" /></Text>
      <Text style={styles.label}>Centro de Serviço <AntDesign name="right" size={14} color="black" /></Text>


      <Text style={styles.textLocal}>Locais Mais Visitados:</Text>

      <View style={styles.imgs}>
      <Image style={styles.image1} source={require('../asset/ginasio.jpg')} />
      <Image style={styles.image1} source={require('../asset/lago.png')} />
      <Image style={styles.image1} source={require('../asset/shopping.jpg')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    top: 30,
  },
  imgs:{
    top:20,
    justifyContent:"space-around",
    flexDirection:"row",
    
  },
  image1:{
    width: 120,
    height: 120,
    borderRadius: 70,
    
  },
  labelName: {
    fontSize: 25,
    fontWeight: 'bold',
    left: 30,
  },
  user: {
    bottom: 30,
    alignSelf: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 70,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 10,
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 25

  },
  textLocal: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  
  
  value: {
    fontSize: 16,
  },
});



