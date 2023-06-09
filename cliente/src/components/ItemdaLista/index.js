import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign , Ionicons} from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';

export default function ItemdaLista(props,funcao,funcao2) {
  return (
    <View style={
      [styles.containerbox,
      {backgroundColor: props.situacao === 0 ? '#7FF53F': '#96F2EE'
      }]}>
        
      <View style={styles.boxhora}>
        <Text style={styles.item}><Ionicons name="alarm" size={24} color="black" /> {props.hora}</Text>
      </View>

      <View style={styles.boxname}>
        <Text style={styles.item}>{props.nome}</Text>
      </View>
      
      <View style={styles.boxicons}>
        <TouchableOpacity onPress={() => funcao(item.key)}>
          <FontAwesome name="trash-o" size={45} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => funcao2(item.key) }>
          <AntDesign name="check" size={45} color="black" />
        </TouchableOpacity>
      </View>
      
    </View>
  );
}


