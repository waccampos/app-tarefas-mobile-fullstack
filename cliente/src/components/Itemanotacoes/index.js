import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';


export default function Itemanotacoes(props,funcao) {
  return (
    <View style={styles.containerbox}>
        
      <View style={styles.boxname}>
        <Text style={styles.item}>{props.nome}</Text>
      </View>
      
      <View style={styles.boxicons}>
        <TouchableOpacity onPress={() => funcao(item.key)}>
          <FontAwesome name="trash-o" size={45} color="black" />
        </TouchableOpacity>
      </View>
      
    </View>
  );
}


