import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export default function Header(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text>               </Text>
      </View>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={props.funcao}>
          <Ionicons name="add" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}


