import React, { useState } from 'react';
import { Modal, Text, TextInput, SafeAreaView, TouchableOpacity ,KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { TextInputMask } from 'react-native-masked-text';
import axios from 'axios';

export function Modalagenda({ visible, setVisivel }) {
  const [tarefa, setTarefa] = useState('');
  const [hora, setHora] = useState('');

  const adicionarTarefa = (hora, tarefa) => {
    console.log(tarefa)
    console.log(hora)
    axios
      .post("http://10.0.0.168:3001/agendar", { hora: hora, tarefa: tarefa });
    setVisivel(false)
    setTarefa('')
    setHora('')
  };
  

  return (
    <Modal visible={visible} onRequestClose={() => setVisivel(false)}>
      <SafeAreaView style={styles.modalContainer}>
        <KeyboardAvoidingView style={styles.modalContent} behavior="padding">
          <Text style={styles.modalTitle}>Adicionar tarefa</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="nome da tarefa"
            onChangeText={(text) => setTarefa(text)}
          />
          <TextInputMask
            style={styles.modalInput}
            placeholder="Horário da tarefa"
            type={'datetime'}
            options={{
              format: 'HH:mm'
            }}
            onChangeText={(text) => setHora(text)}
          />
          <TouchableOpacity
            style={styles.modalBotao}
            onPress={() => adicionarTarefa(hora, tarefa)}
          >
            <Text>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalBotao} onPress={() => setVisivel(false)}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}
