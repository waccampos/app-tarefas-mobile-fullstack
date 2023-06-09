import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TextInput, Button } from 'react-native';
import styles from './styles';
import background from '../../../assets/images/future.png';
import { useState } from 'react';

export default function HomeScreen() {
  const [pergunta, setPergunta] = useState('');

  const apikey = "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";

  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Olá meu nome é <Text style={{ color: "blue" }}>Vega</Text>,</Text>
        <Text style={styles.title}>O seu assistente virtual.</Text>
      </View>
      <View style={styles.containergpt}>
        <View style={styles.containertexto}>
        <TextInput
          style={styles.textArea}
          multiline={true}
          value={pergunta}
          placeholder="Digite seu texto..."
          onChangeText={text => setPergunta(text)}
        />
        </View>
        <View style={styles.containerbotao}>
        <Button
          style={styles.botao}
          title="enviar"
          onPress={() => {
            // Faça alguma coisa com a pergunta digitada
          }}
        />
        </View>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}



