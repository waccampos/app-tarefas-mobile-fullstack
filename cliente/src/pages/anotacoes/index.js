import { StatusBar } from 'expo-status-bar';
import { FlatList, View } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import {Modalanotacoes} from '../../components/Modalanotacoes'
import { useState , useEffect} from 'react';
import Itemanotacoes from '../../components/Itemanotacoes';



export default function Anotacoes() {

  const [visivel, setVisivel] = useState(false);
  const [anotacoes, setAnotacoes] = useState([])

  useEffect(() => {
    axios.get("http://10.0.0.168:3001/anotacoes").then(
      (response) => {    
      setAnotacoes(response.data);
      }
    )
  }, [anotacoes]);
  return (
    <View style={styles.container}>
      <Header
      title="anotações"
      funcao={()=> setVisivel(true)}
      />
      <FlatList
      style={{ marginTop: 10, paddingHorizontal: 20 ,width:"110%"}}
      data={anotacoes}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => 
        (
          <Itemanotacoes nome={item.tarefa} hora={item.hora} funcao={color}/>
          )}
        />
    <Modalanotacoes
    visible={visivel} setVisivel={setVisivel}/>
      <StatusBar style="auto" />
    </View>
  );
}


