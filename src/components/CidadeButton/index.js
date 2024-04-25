import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text,  View, Image, TouchableOpacity } from "react-native";

export default function CidadeButton({cidade}) {
  
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', {cidade: cidade})}>   
          <View style={styles.itemContainer}>
            <Image 
            style={styles.albumImage} source={{uri:`http://10.0.2.2:3000/asset/${cidade.foto}`}}/>
            <View style={styles.textContainer}>
                <Text style={styles.nomeLugar}>{cidade.nome}</Text>
                <Text style={styles.nomeComplemento}>{cidade.localizacao.complemento}</Text>                
                <Text style={styles.horario}>{cidade.horario_funcionamento}</Text>
                
            </View>
        </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: "row",
      marginBottom: 20,
      backgroundColor: "#333333",
      borderRadius: 6,
      overflow: "hidden",
      height:140,
      alignItems:'center',
      padding:8,
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
      fontSize: 22,
      bottom:10,
      left:20,
    },
    nomeComplemento: {
      color: "#dddddd",
      fontSize: 13,
      left:25
  
    },
    horario: {
      color: "#dddddd",
      fontSize: 13,
      top:10,
      left:20,
    }
  });