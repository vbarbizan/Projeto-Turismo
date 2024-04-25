import { useState, useEffect } from "react";
import { StatusBar, StyleSheet, Text, TextInput, View, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import CidadeButton from "../components/CidadeButton";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Feed({ route }) {
  const [local, setLocal] = useState([]);
  const [query, setQuery] = useState("");

  const navigation = useNavigation();


  useEffect(() => {
    fetch("http://10.0.2.2:3000/pontos_turisticos")
      .then((response) => response.json())
      .then((data) => setLocal(data));
  }, []);

  const filteredCidade = query ? local.filter((item) =>
    item.nome.toLowerCase().includes(query.toLowerCase()))
    : local;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 16 }}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar Locais"
          placeholderTextColor="#cccccc"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
        <TouchableOpacity style={{ marginLeft: 16 }} onPress={() => navigation.navigate('Profile')}>
          <FontAwesome name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView >
        {filteredCidade.map((local, index) => (
          <CidadeButton cidade={local} key={index} />
        ))}
      </ScrollView>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  searchInput: {
    height: 50,
    backgroundColor: "#2C2C2C",
    borderRadius: 6,
    padding: 10,
    color: "#ffffff",
    fontSize: 16,
    flex: 1,
  },
  noResultsText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#333333",
    borderRadius: 6,
    overflow: "hidden",
    height: 140,
    alignItems: 'center',
    padding: 8,
  },
  albumImage: {
    width: 110,
    height: 110,
    borderRadius: 50,

  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  titleText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  nomeLugar: {
    color: "#dddddd",
    fontSize: 17,
    bottom: 5,
  },
  nomeDescricao: {
    color: "#dddddd",
    fontSize: 13,

  },
  horario: {
    color: "#dddddd",
    fontSize: 13,
    top: 10,
  }
});