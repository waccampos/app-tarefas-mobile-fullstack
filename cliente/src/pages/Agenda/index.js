import { StatusBar } from 'expo-status-bar';
import { FlatList, View } from 'react-native';
import styles from './styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemdaLista from '../../components/ItemdaLista';
import Header from '../../components/Header';
import { Modalagenda } from '../../components/Modalagenda';

export default function Agenda() {
  const [visivel, setVisivel] = useState(false);

  const [lista, setLista] = useState([]);

const color = (id) => {
  setLista(lista.map((item) => {
    if (item.id === id) {
      item.situacao = 1;
    }
    return item;
  }));
};
  useEffect(() => {
    axios.get("http://10.0.0.168:3001/agenda").then(
      (response) => {    
      setLista(response.data);
      }
    )
  }, [lista]);
  return (   
    <View style={styles.container}>
      <Header
      title="agenda"
      funcao={()=> setVisivel(true)}
    />
      <FlatList
      style={{ marginTop: 10, paddingHorizontal: 20 ,width:"110%"}}
      data={lista}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
      <ItemdaLista nome={item.tarefa} hora={item.hora} funcao1={color} funcao2={color}
      />)}
      />
       <Modalagenda visible={visivel} setVisivel={setVisivel}  />
      <StatusBar style="auto" />
    </View>
  );
}


